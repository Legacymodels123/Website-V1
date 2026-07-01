/**
 * LoopVisual — vraagkaartjes op de loop + parallax
 * Component-logica voor De Loop hero (vanilla JS)
 */
(function () {
  var DEFAULT_QUESTIONS = [
    'Wat kost het?',
    'Kan ik reserveren?',
    'Hoe lang duurt het?',
    'Offerte graag',
    'Nog op voorraad?'
  ];

  var TRAVEL_DURATIONS = [20, 22, 24, 21, 23];
  var TRAVEL_DELAYS = [0, -4.4, -8.8, -13.2, -17.6];

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  /** Render QuestionCard elementen op de motion-path */
  function renderTravelers(questions) {
    var el = document.getElementById('cc-hero-loop-travelers');
    if (!el) return;
    el.innerHTML = questions.map(function (q, i) {
      return (
        '<div class="loop-question" style="--travel-dur:' + TRAVEL_DURATIONS[i % 5] + 's;--travel-delay:' +
        TRAVEL_DELAYS[i % 5] + 's" role="presentation">' + escapeHtml(q) + '</div>'
      );
    }).join('');
  }

  /** Subtiele 2.5D parallax op hover */
  function bindParallax() {
    var wrap = document.getElementById('cc-hero-loop');
    var stage = wrap && wrap.querySelector('.loop-visual__stage');
    if (!wrap || !stage || prefersReduced()) return;

    wrap.classList.add('is-tilt');
    wrap.addEventListener('mousemove', function (e) {
      var rect = wrap.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty('--tilt-y', (-10 + x * 8) + 'deg');
      stage.style.setProperty('--tilt-x', (6 + -y * 6) + 'deg');
    });

    wrap.addEventListener('mouseleave', function () {
      stage.style.setProperty('--tilt-x', '6deg');
      stage.style.setProperty('--tilt-y', '-10deg');
    });
  }

  function initLoop(config) {
    var loop = (config && config.loop) || {};
    var questions = loop.questions && loop.questions.length ? loop.questions : DEFAULT_QUESTIONS;
    renderTravelers(questions);
    bindParallax();
  }

  window.LoopwerkHeroLoop = { init: initLoop, renderTravelers: renderTravelers };

  document.addEventListener('briqo:content-ready', function (e) {
    var hero = e.detail && e.detail.hero;
    if (hero && hero.atmosphere) initLoop(hero.atmosphere);
  });

  function boot() {
    var h = window.CONTENT && window.CONTENT.hero;
    if (h && h.atmosphere) initLoop(h.atmosphere);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
