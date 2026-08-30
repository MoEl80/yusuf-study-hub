/* Ask the Tutor: GLM-powered chat, one per subject (guide content injected as context).
   Family-only: key comes from data/tutor-key.js (home PC) or localStorage (any device, family choice). */
(function () {
  'use strict';

  function config() {
    var fileCfg = window.YSH_TUTOR_KEY || {};
    var key = fileCfg.key || localStorage.getItem('ysh.tutorKey') || '';
    // kind defaults to 'anthropic' inside tutor-core (GLM Coding Plan subscription)
    return { key: key, kind: fileCfg.kind, model: fileCfg.model, endpoint: fileCfg.endpoint };
  }

  function render(main, subject) {
    var app = window.YSH.app;
    var tutor = window.YSH.tutor;
    var persona = tutor.personaFor(subject.id);
    main.appendChild(app.el('h1', { text: '🤖 ' + persona.name + ' — your ' + subject.name + ' tutor' }));
    var cfg = config();
    if (!cfg.key) return renderSetup(main, app);

    var guide = app.part(subject.id, 'guide');
    var history = [];
    var panel = app.el('section', { class: 'card' });
    var log = app.el('div', { class: 'tutor-log' });
    var pending = false;

    function bubble(role, text) {
      var cls = role === 'user' ? 'tutor-me' : 'tutor-ai';
      var b = app.el('div', { class: 'bubble ' + cls });
      b.appendChild(app.el('div', { html: app.fmtBody(text) }));
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
    }

    function send() {
      if (pending) return;
      var ta = document.getElementById('tutor-input');
      var q = ta.value.trim();
      if (!q) return;
      ta.value = '';
      bubble('user', q);
      pending = true;
      var btn = document.getElementById('tutor-ask');
      btn.disabled = true;
      btn.textContent = 'Thinking…';
      tutor.chat(cfg, tutor.buildMessages(subject, guide, history, q))
        .then(function (answer) {
          history.push({ role: 'user', content: q }, { role: 'assistant', content: answer });
          bubble('assistant', answer);
        })
        .catch(function (e) {
          bubble('assistant', '**Could not reach the tutor:** ' + e.message + '\n\nCheck the key in data/tutor-key.js (or tell Pi the error).');
        })
        .then(function () {
          pending = false;
          btn.disabled = false;
          btn.textContent = 'Ask';
        });
    }

    bubble('assistant', "Hi Yusuf! I'm **" + persona.name + '** 👋 Ask me anything about **' + subject.name + '** — a concept you did not get, a quiz question you got wrong, or "test me on ' + (guide && guide.topics && guide.topics[0] ? guide.topics[0].title : 'a topic') + '".');
    panel.appendChild(log);
    var ta = app.el('textarea', { id: 'tutor-input', class: 'answer', placeholder: 'Type your question… (Enter to send, Shift+Enter for a new line)' });
    ta.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); send(); }
    });
    var ask = app.el('button', { id: 'tutor-ask', class: 'button', text: 'Ask' });
    ask.addEventListener('click', send);
    panel.appendChild(ta);
    panel.appendChild(ask);
    main.appendChild(panel);
    ta.focus();
  }

  function renderSetup(main, app) {
    var w = app.el('div', { class: 'warning' },
      app.el('strong', { text: 'The tutor is not switched on yet.' }));
    w.appendChild(app.el('div', { text: 'It needs a GLM API key (a free one works). One-time setup:' }));
    w.appendChild(app.el('div', { text: '1. Ask Pi to set up the tutor key — see TUTOR-SETUP.md next to this app.' }));
    w.appendChild(app.el('div', { text: '2. Or paste the family key here to use the tutor on this device:' }));
    var input = app.el('input', { type: 'password', class: 'tutor-key', placeholder: 'GLM API key' });
    var save = app.el('button', { class: 'button', text: 'Save' });
    save.addEventListener('click', function () {
      if (!input.value.trim()) return;
      localStorage.setItem('ysh.tutorKey', input.value.trim());
      location.reload();
    });
    w.appendChild(app.el('div', {}, input, save));
    w.appendChild(app.el('div', { class: 'muted', text: 'The key stays on this device only. Anyone with it can use the family GLM credits — do not share it.' }));
    main.appendChild(w);
  }

  window.YSH.ui = window.YSH.ui || {};
  window.YSH.ui.tutor = { render: render };
})();
