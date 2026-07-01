(function () {
  var root = document.documentElement;
  var STORAGE_COLOR = 'lw-preview-variant';
  var STORAGE_HERO = 'lw-preview-hero';
  var VARIANTS = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

  var COLOR_HINTS = {
    v1: 'Fel loopgroen — energiek, maar kan snel “app-groen” aanvoelen.',
    v2: 'Mos & strak — rustig, weinig kleur (navy + creme + oranje).',
    v3: 'Salie — creme + saliegroen accent + oranje CTA’s.',
    v4: 'Terracotta — warmer en menselijker, minder groen.',
    v5: 'Design B — lichte hero, scherpere cards, ander geheel gevoel.',
    v6: '★ Handgemaakt — salie + handgeschreven labels. Productie-richting.'
  };

  function updateHint() {
    var hint = document.getElementById('lwPreviewHint');
    if (!hint) return;
    var heroHints = window.LoopwerkHeroVariants && window.LoopwerkHeroVariants.HINTS;
    var hero = 'loop';
    try { hero = localStorage.getItem(STORAGE_HERO) || 'loop'; } catch (e) {}
    var color = 'v6';
    try { color = localStorage.getItem(STORAGE_COLOR) || 'v6'; } catch (e) {}
    var heroText = heroHints && heroHints[hero] ? heroHints[hero] : '';
    var colorText = COLOR_HINTS[color] || '';
    hint.textContent = heroText + (heroText && colorText ? ' · ' : '') + colorText;
  }

  function setVariant(v) {
    if (VARIANTS.indexOf(v) < 0) v = 'v6';
    root.classList.add('lw-preview');
    VARIANTS.forEach(function (id) { root.classList.remove('lw-preview-' + id); });
    root.classList.add('lw-preview-' + v);
    try { localStorage.setItem(STORAGE_COLOR, v); } catch (e) {}
    document.querySelectorAll('.lw-preview-variant').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.variant === v);
    });
    updateHint();
  }

  function init() {
    var saved = 'v6';
    try { saved = localStorage.getItem(STORAGE_COLOR) || 'v6'; } catch (e) {}
    if (root.classList.contains('lw-preview')) setVariant(saved);

    document.querySelectorAll('.lw-preview-variant').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setVariant(btn.dataset.variant);
      });
    });

    var off = document.getElementById('lwPreviewOff');
    if (off) {
      off.addEventListener('click', function () {
        VARIANTS.forEach(function (id) { root.classList.remove('lw-preview', 'lw-preview-' + id); });
        ['loop', 'portal'].forEach(function (id) { root.classList.remove('lw-hero-' + id); });
        root.classList.add('lw-hero-loop');
        var bar = document.getElementById('lwPreviewBar');
        if (bar) bar.remove();
        document.body.style.paddingTop = '';
        if (window.LoopwerkHeroVariants) window.LoopwerkHeroVariants.setHero('loop');
        var restore = document.createElement('button');
        restore.type = 'button';
        restore.className = 'lw-preview-restore';
        restore.textContent = 'Loopwerk-voorlegging';
        restore.addEventListener('click', function () {
          restore.remove();
          location.reload();
        });
        document.body.appendChild(restore);
      });
    }

    updateHint();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
