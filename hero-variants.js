(function () {
  var root = document.documentElement;
  var STORAGE = 'lw-preview-hero';
  var HEROES = ['loop', 'portal'];

  var HINTS = {
    loop: '★ De Loop — vragen vloeien door de infinity-baan naar een werkende tool.',
    portal: 'Sfeervideo-portal — donkere hero met asymmetrische video (vorige richting).'
  };

  function loadPortalVideo() {
    var vid = document.getElementById('cc-hero-video');
    var src = document.getElementById('cc-hero-video-src');
    if (!vid || !src || vid.dataset.lwLoaded) return;

    fetch('/content/hero-media.json')
      .then(function (r) { return r.json(); })
      .then(function (hm) {
        var m = (hm && hm.home) || {};
        if (m.bgPoster) vid.setAttribute('poster', m.bgPoster);
        if (m.bgVideo) {
          src.setAttribute('src', m.bgVideo);
          vid.dataset.lwLoaded = '1';
          try { vid.load(); } catch (e) {}
          vid.play().catch(function () {});
        }
      })
      .catch(function () {});
  }

  function applyHeroLayout(hero) {
    var section = document.getElementById('cc-hero-section');
    var inner = document.getElementById('cc-hero-inner');
    if (!section || !inner) return;

    var isPortal = hero === 'portal';
    section.classList.toggle('hero--workshop', !isPortal);
    section.classList.toggle('hero--atmosphere', isPortal);
    inner.classList.toggle('hero-inner--workshop', !isPortal);
    inner.classList.toggle('hero-inner--atmosphere', isPortal);

    if (isPortal) loadPortalVideo();
  }

  function setHero(hero) {
    if (HEROES.indexOf(hero) < 0) hero = 'loop';
    HEROES.forEach(function (id) { root.classList.remove('lw-hero-' + id); });
    root.classList.add('lw-hero-' + hero);
    try { localStorage.setItem(STORAGE, hero); } catch (e) {}
    document.querySelectorAll('.lw-preview-hero').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.hero === hero);
    });
    applyHeroLayout(hero);
    return HINTS[hero] || '';
  }

  function init() {
    var saved = 'loop';
    try { saved = localStorage.getItem(STORAGE) || 'loop'; } catch (e) {}
    if (!root.classList.contains('lw-hero-loop') && !root.classList.contains('lw-hero-portal')) {
      root.classList.add('lw-hero-' + saved);
    }
    setHero(saved);

    document.querySelectorAll('.lw-preview-hero').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var hint = setHero(btn.dataset.hero);
        var el = document.getElementById('lwPreviewHint');
        if (el && hint) el.textContent = hint;
      });
    });
  }

  window.LoopwerkHeroVariants = { setHero: setHero, init: init, HINTS: HINTS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
