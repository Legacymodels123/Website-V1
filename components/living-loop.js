/**
 * LivingLoop — De levende loop
 * Labels op de baan, cursor-parallax, content-sync
 */
(function () {
  var QUESTIONS = [
    'Wat kost het?',
    'Kan ik reserveren?',
    'Welke optie past?',
    'Hoe snel kan dit?',
    'Offerte graag',
    'Nog op voorraad?'
  ];

  var OUTPUTS = ['Prijsindicatie', 'Intake', 'Scan', 'Lead', 'Advies'];

  var DELAYS = [0, -4.3, -8.6, -12.9, -17.2, -21.5];
  var DURS = [24, 26, 25, 27, 24, 26];

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  /** LoopLabel — routepunten op de SVG-ba */
  function renderLabels(list) {
    var wrap = document.getElementById('living-labels');
    if (!wrap) return;
    wrap.innerHTML = list.map(function (text, i) {
      var isOut = i >= list.length - 2;
      return (
        '<span class="living-label' + (isOut ? ' is-output' : '') + '" style="--ll-delay:' +
        DELAYS[i % DELAYS.length] + 's;--ll-dur:' + DURS[i % DURS.length] + 's">' +
        escapeHtml(isOut && OUTPUTS[i - 4] ? OUTPUTS[i - 4] : text) +
        '</span>'
      );
    }).join('');
  }

  /** Subtiele cursor-follow op looplagen */
  function bindParallax() {
    var scene = document.getElementById('cc-hero-living');
    var back = scene && scene.querySelector('.living-svg-wrap--back');
    var front = scene && scene.querySelector('.living-svg-wrap--front');
    if (!scene || prefersReduced()) return;

    scene.style.pointerEvents = 'auto';
    scene.addEventListener('mousemove', function (e) {
      var rect = scene.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      if (back) {
        back.style.transform = 'translate(' + (x * 18) + 'px, ' + (y * 12) + 'px)';
      }
      if (front) {
        front.style.transform = 'translate(' + (x * -10) + 'px, ' + (y * -8) + 'px)';
      }
    });

    scene.addEventListener('mouseleave', function () {
      if (back) back.style.transform = '';
      if (front) front.style.transform = '';
    });
  }

  /** Lichte scroll-parallax */
  function bindScrollParallax() {
    if (prefersReduced()) return;
    var back = document.querySelector('.living-svg-wrap--back');
    if (!back) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY * 0.08;
        back.style.marginTop = y + 'px';
        ticking = false;
      });
    }, { passive: true });
  }

  function initLoop(config) {
    var loop = (config && config.loop) || {};
    var questions = loop.questions && loop.questions.length ? loop.questions : QUESTIONS;
    if (questions.length < 6) {
      questions = QUESTIONS.slice();
    }
    renderLabels(questions.slice(0, 6));
    var stampEl = document.getElementById('cc-hero-stamp');
    if (stampEl && loop.stamp) {
      stampEl.innerHTML = String(loop.stamp).replace(/\\n/g, '<br>');
    }
    bindParallax();
    bindScrollParallax();
  }

  window.LoopwerkHeroLoop = { init: initLoop };

  document.addEventListener('briqo:content-ready', function (e) {
    var hero = e.detail && e.detail.hero;
    if (hero && hero.atmosphere) initLoop(hero.atmosphere);
  });

  function boot() {
    var h = window.CONTENT && window.CONTENT.hero;
    initLoop(h && h.atmosphere ? h.atmosphere : {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
