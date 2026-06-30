(function () {
  var root = document.documentElement;
  var STORAGE = 'lw-preview-variant';
  var VARIANTS = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

  var HINTS = {
    v1: 'Fel loopgroen — energiek, maar kan snel “app-groen” aanvoelen.',
    v2: 'Mos & strak — rustig, weinig kleur (navy + creme + oranje).',
    v3: 'Salie — creme + saliegroen accent + oranje CTA’s.',
    v4: 'Terracotta — warmer en menselijker, minder groen.',
    v5: 'Design B — lichte hero, scherpere cards, ander geheel gevoel.',
    v6: '★ Handgemaakt — zelfde kleuren als salie, maar laagdrempelig en menselijk. Geen blokkerige UI.'
  };

  function setVariant(v) {
    if (VARIANTS.indexOf(v) < 0) v = 'v6';
    root.classList.add('lw-preview');
    VARIANTS.forEach(function (id) { root.classList.remove('lw-preview-' + id); });
    root.classList.add('lw-preview-' + v);
    try { localStorage.setItem(STORAGE, v); } catch (e) {}
    document.querySelectorAll('.lw-preview-variant').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.variant === v);
    });
    var hint = document.getElementById('lwPreviewHint');
    if (hint && HINTS[v]) hint.textContent = HINTS[v];
  }

  function init() {
    var saved = 'v6';
    try { saved = localStorage.getItem(STORAGE) || 'v6'; } catch (e) {}
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
        var bar = document.getElementById('lwPreviewBar');
        if (bar) bar.remove();
        document.body.style.paddingTop = '';
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
