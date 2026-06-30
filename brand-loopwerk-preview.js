(function () {
  var root = document.documentElement;
  var STORAGE = 'lw-preview-variant';

  function setVariant(v) {
    root.classList.add('lw-preview');
    root.classList.remove('lw-preview-v1', 'lw-preview-v2');
    root.classList.add('lw-preview-' + v);
    try { localStorage.setItem(STORAGE, v); } catch (e) {}
    document.querySelectorAll('.lw-preview-variant').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.variant === v);
    });
  }

  function init() {
    var saved = 'v1';
    try { saved = localStorage.getItem(STORAGE) || 'v1'; } catch (e) {}
    if (root.classList.contains('lw-preview')) setVariant(saved);

    document.querySelectorAll('.lw-preview-variant').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setVariant(btn.dataset.variant);
      });
    });

    var off = document.getElementById('lwPreviewOff');
    if (off) {
      off.addEventListener('click', function () {
        root.classList.remove('lw-preview', 'lw-preview-v1', 'lw-preview-v2');
        var bar = document.getElementById('lwPreviewBar');
        if (bar) bar.remove();
        document.body.style.paddingTop = '';
        var restore = document.createElement('button');
        restore.type = 'button';
        restore.className = 'lw-preview-restore';
        restore.textContent = 'Loopwerk-kleuren';
        restore.addEventListener('click', function () {
          restore.remove();
          root.classList.add('lw-preview');
          setVariant(saved);
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
