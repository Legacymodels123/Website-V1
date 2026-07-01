(function () {
  var DEFAULT_QUESTIONS = [
    'Wat kost het?',
    'Kan ik reserveren?',
    'Hoe lang duurt het?',
    'Offerte graag',
    'Nog op voorraad?'
  ];

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function renderChips(questions) {
    var orbit = document.getElementById('cc-hero-loop-orbit');
    if (!orbit) return;
    orbit.innerHTML = questions.map(function (q) {
      return '<div class="loop-chip">' + q + '</div>';
    }).join('');
  }

  function bindParallax() {
    var wrap = document.getElementById('cc-hero-loop');
    var stage = wrap && wrap.querySelector('.loop-stage');
    if (!wrap || !stage || prefersReduced()) return;

    wrap.classList.add('is-tilt');
    wrap.addEventListener('mousemove', function (e) {
      var rect = wrap.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty('--tilt-y', (x * 10) + 'deg');
      stage.style.setProperty('--tilt-x', (-y * 8) + 'deg');
    });

    wrap.addEventListener('mouseleave', function () {
      stage.style.setProperty('--tilt-x', '0deg');
      stage.style.setProperty('--tilt-y', '0deg');
    });
  }

  function initLoop(config) {
    var loop = (config && config.loop) || {};
    var questions = loop.questions && loop.questions.length ? loop.questions : DEFAULT_QUESTIONS;
    renderChips(questions);

    var weekEl = document.getElementById('cc-hero-loop-week');
    if (weekEl && loop.weekLabel) weekEl.textContent = loop.weekLabel;

    var stamp = document.getElementById('cc-hero-loop-stamp');
    if (stamp && loop.stamp) stamp.textContent = loop.stamp;

    bindParallax();
  }

  window.LoopwerkHeroLoop = { init: initLoop };

  document.addEventListener('briqo:content-ready', function (e) {
    var hero = e.detail && e.detail.hero;
    if (hero && hero.atmosphere) initLoop(hero.atmosphere);
  });

  if (document.readyState !== 'loading') {
    var h = window.CONTENT && window.CONTENT.hero;
    if (h && h.atmosphere) initLoop(h.atmosphere);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      var h = window.CONTENT && window.CONTENT.hero;
      if (h && h.atmosphere) initLoop(h.atmosphere);
    });
  }
})();
