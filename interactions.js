/* BRIQO — scroll reveal, hover/touch interactions, mobile nav */
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
    '.impact-card',
    '.img-text',
    '.logo-entry'
  ].join(',');

  const TILT_SEL = '.ix-tilt, .team-card.ix-card, .case-card.ix-card, .article-card.ix-card, .p-card.ix-card, .price-card.ix-card, .build-tile.ix-card';
  const CARD_SEL = '.ix-card, .content-card, .team-card, .case-card, .article-card, .price-card, .p-card, .build-tile, .branch-card, .av, .cs-stat, .cs-stat2';

  let observer;

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function isTouchUI() {
    return window.matchMedia('(hover: none)').matches;
  }

  function prepReveal(el, i) {
    if (!el.classList.contains('ix-reveal')) el.classList.add('ix-reveal');
    if (!el.closest('.page-intro') && !el.classList.contains('content-card') && !el.classList.contains('ix-card')) {
      el.classList.add('ix-card');
    }
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
    if (prefersReduced() || btn.dataset.ixMag || isTouchUI()) return;
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
    if (prefersReduced() || el.dataset.ixTilt || isTouchUI()) return;
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

  function clearTouchFocus(except) {
    document.querySelectorAll('.ix-focus').forEach(function (el) {
      if (el !== except) el.classList.remove('ix-focus');
    });
  }

  function bindTouchFocusGroup(container, itemSel) {
    if (!isTouchUI()) return;
    container.querySelectorAll(itemSel).forEach(function (item) {
      if (item.dataset.ixTouch) return;
      item.dataset.ixTouch = '1';
      item.addEventListener('click', function (e) {
        if (e.target.closest('a, button, .price-btn')) return;
        const wasFocused = item.classList.contains('ix-focus');
        clearTouchFocus();
        if (!wasFocused) item.classList.add('ix-focus');
      });
    });
  }

  function bindTouchInteractions() {
    if (!isTouchUI()) return;

    document.querySelectorAll('.pricing-grid').forEach(function (grid) {
      bindTouchFocusGroup(grid, '.price-card');
    });
    document.querySelectorAll('.process-steps').forEach(function (grid) {
      bindTouchFocusGroup(grid, '.p-step');
    });
    document.querySelectorAll('.branch-card.ix-spotlight').forEach(function (card) {
      if (card.dataset.ixTouch) return;
      card.dataset.ixTouch = '1';
      card.addEventListener('click', function () {
        const wasFocused = card.classList.contains('ix-focus');
        clearTouchFocus();
        if (!wasFocused) {
          card.classList.add('ix-focus');
          card.style.setProperty('--ix-spot-x', '50%');
          card.style.setProperty('--ix-spot-y', '40%');
        }
      });
    });

    document.querySelectorAll('.img-text.ix-card').forEach(function (block) {
      if (block.dataset.ixTouch) return;
      block.dataset.ixTouch = '1';
      block.addEventListener('click', function (e) {
        if (e.target.closest('a, button')) return;
        const wasFocused = block.classList.contains('ix-focus');
        clearTouchFocus();
        if (!wasFocused) block.classList.add('ix-focus');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('.pricing-grid, .process-steps, .img-text.ix-card, .branch-card')) return;
      clearTouchFocus();
    }, true);
  }

  function bindMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links || toggle.dataset.ixNav) return;
    toggle.dataset.ixNav = '1';

    function closeNav() {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
      document.body.classList.remove('nav-open');
    }

    function openNav() {
      links.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Menu sluiten');
      document.body.classList.add('nav-open');
    }

    toggle.addEventListener('click', function () {
      if (links.classList.contains('is-open')) closeNav();
      else openNav();
    });

    links.querySelectorAll('a, button').forEach(function (link) {
      link.addEventListener('click', function () {
        if (link.classList.contains('nav-link-cta-mobile') || link.getAttribute('href')) {
          closeNav();
        }
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  function bindImpactCards() {
    document.querySelectorAll('.impact-card').forEach(function (card) {
      if (card.dataset.ixImpact) return;
      card.dataset.ixImpact = '1';
      card.classList.add('ix-spotlight');

      card.addEventListener('mousemove', function (e) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--ix-spot-x', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        card.style.setProperty('--ix-spot-y', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });

      if (isTouchUI()) {
        card.addEventListener('click', function () {
          const was = card.classList.contains('is-active');
          document.querySelectorAll('.impact-card.is-active').forEach(function (c) {
            c.classList.remove('is-active');
          });
          if (!was) card.classList.add('is-active');
        });
      }
    });
  }

  function bindCountUp() {
    if (prefersReduced()) {
      document.querySelectorAll('[data-count-up]').forEach(function (el) {
        el.textContent = (el.dataset.prefix || '') + el.dataset.countUp + (el.dataset.suffix || '');
      });
      return;
    }

    const counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.target.dataset.countDone) return;
        const el = entry.target;
        el.dataset.countDone = '1';
        const end = parseFloat(el.dataset.countUp);
        if (isNaN(end)) return;
        const duration = 1400;
        const startTime = performance.now();
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';

        function tick(now) {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-count-up]').forEach(function (el) {
      if (!el.dataset.countBound) {
        el.dataset.countBound = '1';
        counterObs.observe(el);
      }
    });
  }

  function observeReveal() {
    if (prefersReduced()) {
      document.querySelectorAll('.ix-reveal').forEach(function (el) {
        el.classList.add('ix-visible');
      });
      return;
    }

    const mobile = window.innerWidth <= 768;
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('ix-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: mobile ? 0.08 : 0.12,
        rootMargin: mobile ? '0px 0px -20px 0px' : '0px 0px -40px 0px'
      });
    }

    document.querySelectorAll(REVEAL_SEL).forEach(function (el, i) {
      if (el.dataset.ixBound) return;
      el.dataset.ixBound = '1';
      prepReveal(el, i);
      observer.observe(el);
    });
  }

  function bindAtmosphere() {
    var wrap = document.getElementById('cc-hero-atmosphere');
    if (!wrap || wrap.dataset.ixAtmo) return;
    wrap.dataset.ixAtmo = '1';
    if (prefersReduced()) return;

    var video = wrap.querySelector('.hero-portal-video');
    if (!video) return;

    wrap.addEventListener('mousemove', function (e) {
      var rect = wrap.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      video.style.transform = 'scale(1.08) translate(' + (x * 14) + 'px, ' + (y * 10) + 'px)';
    });

    wrap.addEventListener('mouseleave', function () {
      video.style.transform = 'scale(1.08)';
    });
  }

  function bindCards() {
    document.querySelectorAll(CARD_SEL).forEach(function (el) {
      if (el.closest('.page-intro') || el.classList.contains('content-card')) return;
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
    bindTouchInteractions();
    bindMobileNav();
    bindImpactCards();
    bindCountUp();
    bindAtmosphere();
  }

  function refresh() {
    bindCards();
    observeReveal();
    bindImpactCards();
    bindCountUp();
  }

  function initAfterContent() {
    refresh();
  }

  window.BriqoInteractions = { refresh: refresh, initAfterContent: initAfterContent };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      refresh();
      document.addEventListener('briqo:content-ready', refresh);
    });
  } else {
    refresh();
    document.addEventListener('briqo:content-ready', refresh);
  }
})();
