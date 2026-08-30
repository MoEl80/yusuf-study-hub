/* Tutor core: prompt building + GLM chat call. Pure logic — no DOM. Testable in node.
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
    anthropic: { endpoint: 'https://open.bigmodel.cn/api/anthropic', model: 'glm-4.6' },
    openai: { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash' }
  };

  /* Each subject's tutor has a name and one-line personality, used in the UI and the system prompt. */
  var PERSONAS = {
    english:   { name: 'Quill', persona: 'You love words, stories and Shakespeare — playful with examples from books and films.' },
    science:   { name: 'Nova',  persona: 'You love experiments and real-world science — you use everyday examples and numbers when they help.' },
    pdhpe:     { name: 'Coach', persona: 'You are an encouraging sports coach — practical, positive, big on healthy habits and fair play.' },
    geography: { name: 'Atlas', persona: 'You see the world through maps and places — you connect ideas to real locations, especially in Australia.' }
  };
  function personaFor(subjectId) {
    return PERSONAS[subjectId] || { name: 'Tutor', persona: 'You are a friendly all-round study tutor.' };
  }

  function systemPrompt(subject, guide) {
    var p = personaFor(subject.id);
    var ctx = '';
    if (guide && guide.topics) {
      ctx = guide.topics.map(function (t) {
        return '## ' + t.title + '\n' + (t.keyKnowledge || []).map(function (k) { return '- ' + k; }).join('\n');
      }).join('\n\n');
      if (ctx.length > 6000) ctx = ctx.slice(0, 6000) + '\n…(truncated)';
    }
    return 'You are ' + p.name + ', a friendly, patient tutor for a Year 9 student (age 14-15) in NSW, Australia, ' +
      'studying ' + subject.name + ' at Amity College. The class teacher is ' + (subject.teacher || 'his teacher') + '. ' + p.persona + '\n' +
      'Rules:\n' +
      '- Keep answers short (under 150 words) and in simple English.\n' +
      '- Teach, do not just hand over finished essay answers: guide with steps, examples and questions.\n' +
      '- Stay aligned to the NSW syllabus topics listed below when relevant.\n' +
      '- End with one quick check question so the student proves they understood.\n' +
      '- If the student asks who you are, you are ' + p.name + ', the ' + subject.name + ' tutor.\n' +
      '- This is a school student: keep every answer age-appropriate and safe.\n' +
      (ctx ? '\nHis course topics:\n' + ctx : '');
  }

  /* Returns { system, messages } — history trimmed to last 8, question appended. */
  function buildMessages(subject, guide, history, question) {
    var msgs = [];
    (history || []).slice(-8).forEach(function (m) { msgs.push({ role: m.role, content: m.content }); });
    msgs.push({ role: 'user', content: String(question || '') });
    return { system: systemPrompt(subject, guide), messages: msgs };
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
    personaFor: personaFor,
    PERSONAS: PERSONAS,
    DEFAULTS: DEFAULTS
  };
});
