/* BRIQO — scroll reveal + subtle card tilt */
(function () {
  const REVEAL_SEL = [
    '.ix-reveal',
    '.content-card',
    '.team-card',
    '.case-card',
    '.article-card',
    '.price-card',
    '.p-card',
    '.build-tile',
    '.branch-card',
    '.av',
    '.cs-stat',
    '.cs-stat2',
    '.img-text',
    '.logo-entry'
  ].join(',');

  const TILT_SEL = '.ix-tilt, .team-card.ix-card, .case-card.ix-card, .article-card.ix-card, .p-card.ix-card, .price-card.ix-card, .build-tile.ix-card';
  const CARD_SEL = '.ix-card, .content-card, .team-card, .case-card, .article-card, .price-card, .p-card, .build-tile, .branch-card, .av, .cs-stat, .cs-stat2';

  let observer;

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function prepReveal(el, i) {
    if (!el.classList.contains('ix-reveal')) el.classList.add('ix-reveal');
    if (!el.classList.contains('ix-card')) el.classList.add('ix-card');
    const stagger = (i % 5) + 1;
    el.classList.add('ix-stagger-' + stagger);
  }

  function bindSpotlight(el) {
    if (prefersReduced() || el.dataset.ixSpot) return;
    el.dataset.ixSpot = '1';
    el.classList.add('ix-spotlight');
    el.addEventListener('mousemove', function (e) {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--ix-spot-x', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      el.style.setProperty('--ix-spot-y', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  }

  function bindMagnetic(btn) {
    if (prefersReduced() || btn.dataset.ixMag) return;
    btn.dataset.ixMag = '1';
    btn.classList.add('ix-magnetic');
    btn.addEventListener('mousemove', function (e) {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.14;
      const y = (e.clientY - r.top - r.height / 2) * 0.2;
      btn.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
    });
  }

  function bindTilt(el) {
    if (prefersReduced() || el.dataset.ixTilt) return;
    el.dataset.ixTilt = '1';
    if (!el.classList.contains('ix-tilt')) el.classList.add('ix-tilt');

    el.addEventListener('mousemove', function (e) {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ix-ry', (x * 7).toFixed(2) + 'deg');
      el.style.setProperty('--ix-rx', (-y * 5).toFixed(2) + 'deg');
    });
    el.addEventListener('mouseleave', function () {
      el.style.setProperty('--ix-ry', '0deg');
      el.style.setProperty('--ix-rx', '0deg');
      el.style.setProperty('--ix-ty', '0px');
    });
  }

  function observeReveal() {
    if (prefersReduced()) {
      document.querySelectorAll('.ix-reveal').forEach(function (el) {
        el.classList.add('ix-visible');
      });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('ix-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }

    document.querySelectorAll(REVEAL_SEL).forEach(function (el, i) {
      if (el.dataset.ixBound) return;
      el.dataset.ixBound = '1';
      prepReveal(el, i);
      observer.observe(el);
    });
  }

  function bindCards() {
    document.querySelectorAll(CARD_SEL).forEach(function (el) {
      if (!el.classList.contains('ix-card')) el.classList.add('ix-card');
    });
    document.querySelectorAll(TILT_SEL).forEach(bindTilt);
    document.querySelectorAll('.branch-card').forEach(bindSpotlight);
    document.querySelectorAll('.btn-teal, .nav-cta, .price-btn, .img-text-cta').forEach(function (btn) {
      btn.classList.add('ix-shine');
      bindMagnetic(btn);
    });
    document.querySelectorAll('.p-step, .branch-plus, .case-quote').forEach(function (el, i) {
      if (!el.classList.contains('ix-reveal')) {
        el.classList.add('ix-reveal', 'ix-stagger-' + ((i % 5) + 1));
      }
    });
  }

  function refresh() {
    bindCards();
    observeReveal();
  }

  window.BriqoInteractions = { refresh: refresh };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh);
  } else {
    refresh();
  }
})();
