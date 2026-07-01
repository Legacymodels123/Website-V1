/**
 * LoopVisual v2 — vraag-rotatie + tool-build cyclus
 */
(function () {
  var QUESTIONS = [
    'Wat kost het?',
    'Kan ik reserveren?',
    'Hoe lang duurt het?',
    'Offerte graag',
    'Nog op voorraad?'
  ];

  var ROTATE_MS = 3800;
  var BUILD_MS = 4500;

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function renderQuestions(list) {
    var box = document.getElementById('lw-question-rotator');
    if (!box) return;
    box.innerHTML = list.map(function (q, i) {
      return '<p class="lw-flow__q' + (i === 0 ? ' is-active' : '') + '">' + escapeHtml(q) + '</p>';
    }).join('');
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function rotateQuestions() {
    var items = document.querySelectorAll('.lw-flow__q');
    if (!items.length) return;
    var idx = 0;
    items.forEach(function (el, i) {
      if (el.classList.contains('is-active')) idx = i;
    });
    items[idx].classList.remove('is-active');
    items[(idx + 1) % items.length].classList.add('is-active');
  }

  function runBuildCycle() {
    var fields = document.querySelectorAll('.lw-flow__field');
    var cta = document.querySelector('.lw-flow__tool-cta');
    var result = document.querySelector('.lw-flow__tool-result');
    if (!fields.length) return;

    fields.forEach(function (f) { f.classList.remove('is-lit'); });
    if (cta) cta.classList.remove('is-lit');
    if (result) result.classList.remove('is-visible');

    var step = 0;
    var max = fields.length + 2;

    function tick() {
      if (step < fields.length) {
        fields[step].classList.add('is-lit');
      } else if (step === fields.length && cta) {
        cta.classList.add('is-lit');
      } else if (step === fields.length + 1 && result) {
        result.classList.add('is-visible');
      }
      step++;
      if (step <= max) {
        setTimeout(tick, 700);
      } else {
        setTimeout(runBuildCycle, 2200);
      }
    }

    tick();
  }

  function initLoop(config) {
    var loop = (config && config.loop) || {};
    var questions = loop.questions && loop.questions.length ? loop.questions : QUESTIONS;
    renderQuestions(questions);

    if (prefersReduced()) return;

    setInterval(rotateQuestions, ROTATE_MS);
    setTimeout(runBuildCycle, 800);
  }

  window.LoopwerkHeroLoop = { init: initLoop };

  document.addEventListener('briqo:content-ready', function (e) {
    var hero = e.detail && e.detail.hero;
    if (hero && hero.atmosphere) initLoop(hero.atmosphere);
  });

  function boot() {
    var h = window.CONTENT && window.CONTENT.hero;
    if (h && h.atmosphere) initLoop(h.atmosphere);
    else initLoop({});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
