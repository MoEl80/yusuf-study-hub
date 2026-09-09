/* Tutor core: the one AI zone's prompt building + GLM chat call. Pure logic — no DOM. Testable in node.
   Supports two API styles via config.kind:
   - 'anthropic' (default): BigModel GLM Coding Plan subscription — POST {endpoint}/v1/messages
   - 'openai': standard chat/completions (open.bigmodel.cn or api.z.ai) */
(function (root, factory) {
  var api = factory();
  root.YSH = root.YSH || {};
  root.YSH.tutor = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : globalThis, function () {
  'use strict';

  var DEFAULTS = {
    anthropic: { endpoint: 'https://open.bigmodel.cn/api/anthropic', model: 'glm-5.3' },
    openai: { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash' }
  };

  /* One AI zone: course-wide context — all subjects, each block trimmed, total capped. */
  var PER_SUBJECT_CTX_LIMIT = 4000;
  var TOTAL_CTX_LIMIT = 16000;

  var STARTERS = {
    quiz: 'Quiz me: 5 multiple-choice questions, one at a time, from any of my subjects.',
    mix: 'Mix me a practice set: a few multiple-choice and one short-answer question from different topics.'
  };

  function systemPrompt(course) {
    var blocks = [];
    (course || []).forEach(function (s) {
      var ctx = '';
      if (s.guide && s.guide.topics) {
        ctx = s.guide.topics.map(function (t) {
          return '- ' + t.title + ': ' + (t.keyKnowledge || []).join(' ');
        }).join('\n');
        if (ctx.length > PER_SUBJECT_CTX_LIMIT) ctx = ctx.slice(0, PER_SUBJECT_CTX_LIMIT) + '…(truncated)';
      }
      blocks.push('## ' + s.name + ' (teacher: ' + (s.teacher || 'his teacher') + ')' + (ctx ? '\n' + ctx : ''));
    });
    var courseCtx = blocks.join('\n\n');
    if (courseCtx.length > TOTAL_CTX_LIMIT) courseCtx = courseCtx.slice(0, TOTAL_CTX_LIMIT) + '\n…(truncated)';
    return 'You are Yusuf\'s study AI — a friendly, patient tutor for a Year 9 student (age 14-15) at Amity College, NSW, Australia. ' +
      'You help with ALL of his subjects and anything else about his schoolwork.\n' +
      'Rules:\n' +
      '- Keep answers short (under 150 words) and in simple English.\n' +
      '- Teach, do not just hand over finished essay answers: guide with steps, examples and questions.\n' +
      '- Stay aligned to the NSW syllabus topics listed below when relevant.\n' +
      '- When he asks to be quizzed or wants practice questions: ask ONE item at a time (multiple choice as A/B/C/D unless he asks otherwise), wait for his answer, mark it, explain in one or two sentences, and give a score at the end. He may change anything mid-session — number of questions, type (multiple choice / short answer / extended response), topic, difficulty — or ask you to explain a topic in depth first: adapt naturally.\n' +
      '- End normal explanations with one quick check question so he proves he understood.\n' +
      '- If he asks who you are: you are his study AI, and you know his four school subjects.\n' +
      '- This is a school student: keep every answer age-appropriate and safe.\n' +
      (courseCtx ? '\nHis subjects and course topics:\n' + courseCtx : '');
  }

  /* Returns { system, messages } for the one AI zone — history trimmed to last 8, question appended. */
  function buildMessages(course, history, question) {
    var msgs = [];
    (history || []).slice(-8).forEach(function (m) { msgs.push({ role: m.role, content: m.content }); });
    msgs.push({ role: 'user', content: String(question || '') });
    return { system: systemPrompt(course), messages: msgs };
  }

  function extractError(data, status) {
    var msg = data && data.error && (data.error.message || data.error.msg);
    if (!msg) msg = 'HTTP ' + status;
    return new Error(msg);
  }

  /* config: { key, kind?, model?, endpoint? }; payload from buildMessages; fetchImpl injectable for tests. */
  function chat(config, payload, fetchImpl) {
    var f = fetchImpl || (typeof fetch !== 'undefined' ? fetch : null);
    if (!f) return Promise.reject(new Error('fetch not available'));
    if (!config || !config.key) return Promise.reject(new Error('No API key configured'));
    var kind = config.kind === 'openai' ? 'openai' : 'anthropic';
    var dflt = DEFAULTS[kind];
    var endpoint = config.endpoint || dflt.endpoint;
    var model = config.model || dflt.model;
    var req;

    if (kind === 'anthropic') {
      req = f(endpoint + '/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': config.key, 'anthropic-version': '2023-06-01' },
        // thinking disabled: glm-4.6 defaults it on and short tutor answers do not need it (verified live)
        body: JSON.stringify({ model: model, max_tokens: 2000, thinking: { type: 'disabled' }, system: payload.system, messages: payload.messages })
      }).then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw extractError(data, res.status);
          var text = ((data && data.content) || [])
            .filter(function (b) { return b.type === 'text'; })
            .map(function (b) { return b.text; }).join('');
          if (!text) throw new Error('Empty reply from GLM');
          return text;
        });
      });
    } else {
      var msgs = [{ role: 'system', content: payload.system }].concat(payload.messages);
      req = f(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + config.key },
        body: JSON.stringify({ model: model, messages: msgs, temperature: 0.6, max_tokens: 600 })
      }).then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw extractError(data, res.status);
          var text = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
          if (!text) throw new Error('Empty reply from GLM');
          return text;
        });
      });
    }
    return req;
  }

  return {
    buildMessages: buildMessages,
    chat: chat,
    systemPrompt: systemPrompt,
    STARTERS: STARTERS,
    DEFAULTS: DEFAULTS
  };
});
