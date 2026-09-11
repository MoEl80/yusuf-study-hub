/* Subject registry — mirrors Yusuf's Google Classroom classes (verified live 2026-09-11 via the CDP sync).
   Add a subject by adding an entry here + generating its 4 data files + resource folder.
   Geography: no separate Classroom course exists — Year 9 HSIE rotates History/Geography in one course. */
(function (root) {
  root.YSH_SUBJECTS = [
    { id: 'english', name: 'English', icon: '📖', colour: '#2563eb', className: '9A English 2026', teacher: 'Ms Rendell' },
    { id: 'science', name: 'Science', icon: '🔬', colour: '#7c3aed', className: '9A Science', teacher: 'Ms Straub' },
    { id: 'pdhpe',   name: 'PDHPE',   icon: '🏃', colour: '#059669', className: '9A PDHPE', teacher: 'Mr Shephard' },
    { id: 'geography', name: 'Geography', icon: '🌏', colour: '#b45309', className: '2026 Year 9 Geography', teacher: 'Amity College' },
    { id: 'history', name: 'History', icon: '🏛️', colour: '#b91c1c', className: '9A History (2026)', teacher: 'Tugba Atak' },
    { id: 'maths', name: 'Maths', icon: '➗', colour: '#0e7490', className: '', teacher: 'Tutor (book pending scan)' }
  ];
})(typeof self !== 'undefined' ? self : globalThis);
