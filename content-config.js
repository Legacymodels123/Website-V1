// LOOPWERK CONTENT CONFIG — bewerk via /admin.html

const CONTENT = {

  hero: {
    pill: "Voor het MKB zonder IT-afdeling",
    h1: "De vraag die elke week terugkomt?\\nWij maken er een <em>werkende tool</em> van.",
    sub: "Loopwerk bouwt de tool die jouw meest gestelde vraag beantwoordt — zodat jij dat niet meer hoeft te doen.",
    ctaPrimary: "Bekijk demo",
    ctaSecondary: "Bekijk pakketten",
    ctaSecondaryLink: "/prijzen",
    proofText: "<strong>Sun Sauna & Poolworld</strong> gebruikt Loopwerk voor snellere prijsaanvragen",
    atmosphere: {
      loop: {
        questions: [
          "Wat kost het?",
          "Kan ik reserveren?",
          "Welke optie past?",
          "Hoe snel kan dit?",
          "Offerte graag",
          "Nog op voorraad?"
        ],
        weekLabel: "3",
        stamp: "Geen AI-praat.<br>Wel werkende tools."
      },
      floats: [
        { type: "tag", icon: "ti-bolt", text: "2–3 wkn richting live" },
        { type: "tag", icon: "ti-apps", text: "Calculator · Scan · Intake" },
        {
          type: "case",
          href: "https://sspw-offerte-calc.vercel.app/",
          logo: "https://sspw.nl/wp-content/uploads/2021/12/logo.png",
          text: "Demo live bij Sun Sauna & Poolworld"
        }
      ]
    }
  },

  team: {
    title: "Drie ondernemers, één missie",
    intro1: "Loopwerk is Levi Kempen, Shaquil Reyes en Gianni Geurtjens. We zagen steeds hetzelfde: goede bedrijven die online geen antwoord kunnen geven op vragen die elke week terugkomen.",
    intro2: "Geen groot IT-traject. Wel een tool die snel live kan — met een vaste prijs die je in één avond kunt beslissen.",
    linkText: "Lees ons volledige verhaal",
    linkUrl: "/over-ons",
    members: [
      {
        name: "Levi Kempen",
        role: "Bouw & product",
        initials: "LK",
        avatarClass: "team-avatar--1",
        photo: "/assets/team/levi-kempen.svg",
        bio: "Ik zet liever morgen iets live waar een klant mee kan werken, dan weken praten over wat er allemaal mogelijk is."
      },
      {
        name: "Shaquil Reyes",
        role: "Klant & commercie",
        initials: "SR",
        avatarClass: "team-avatar--2",
        photo: "/assets/team/shaquil-reyes.svg",
        bio: "Krijg je dezelfde vraag voor de vijfde keer? Dat is geen last. Dat is een signaal. Ik help scherp krijgen welke tool het meeste oplevert."
      },
      {
        name: "Gianni Geurtjens",
        role: "Inhoud & ervaring",
        initials: "GG",
        avatarClass: "team-avatar--3",
        photo: "/assets/team/gianni-geurtjens.svg",
        bio: "Tools falen zelden door de techniek. Meestal door onduidelijke vragen. Ik zorg dat flows logisch aanvoelen: helder en menselijk."
      }
    ],
    values: [
      { icon: "ti-bolt", title: "Snel live", desc: "Van idee naar werkende tool in 2–3 weken." },
      { icon: "ti-tool", title: "Vaste prijs", desc: "Geen offerte-traject. Prijs op de site = prijs op de factuur." },
      { icon: "ti-chart-bar", title: "Door te bouwen", desc: "Begin met één tool. Daarna verder op basis van echte data." }
    ]
  },

  pricing: {
    label: "Pakketten",
    title: "Vaste prijzen, geen verrassingen",
    sub: "Begin met één tool. Daarna bouwen we verder op wat de data laat zien.",
    launchOffer: "We zijn net gestart. De eerste drie klanten bouwen we tegen halve setupkosten — in ruil voor een eerlijke case.",
    card1: {
      title: "Loop Start",
      desc: "Eén tool op je website: calculator, scan of intake.",
      amount: "€1.950",
      amountSub: "eenmalig",
      monthly: "€99 per maand",
      features: [
        "Hosting, onderhoud en kleine aanpassingen",
        "Live in 2 weken",
        "Maandelijks opzegbaar"
      ],
      cta: "Kies Loop Start",
      formType: "gesprek"
    },
    card2: {
      badge: "Meest compleet",
      title: "Loop Compleet",
      desc: "Tool plus automatische opvolging en leaddashboard.",
      amount: "€2.950",
      amountSub: "eenmalig",
      monthly: "€179 per maand",
      features: [
        "Alles uit Loop Start",
        "Leaddashboard met status",
        "AI-samenvatting en opvolgmail",
        "Live in 3 weken"
      ],
      cta: "Kies Loop Compleet",
      formType: "gesprek"
    },
    card3: {
      title: "Loop Op Maat",
      desc: "Koppelingen, interne automatisering en agents.",
      amount: "vanaf €4.500",
      amountSub: "eenmalig",
      monthly: "vanaf €249 per maand",
      features: [
        "Alles uit Loop Compleet",
        "CRM- en boekhoudkoppelingen",
        "Interne automatisering op maat",
        "Prioriteit bij doorontwikkeling"
      ],
      cta: "Bespreek op maat",
      formType: "gesprek"
    }
  },

  branches: [
    { name: "Zwembad & Buitenleven", count: "Demo live", icon: "ti-pool", live: true, link: "https://sspw-offerte-calc.vercel.app/" },
    { name: "Installatie & Bouw", count: "Demo in voorbereiding", icon: "ti-tool", live: false, link: "" },
    { name: "Beauty & Wellness", count: "Demo in voorbereiding", icon: "ti-scissors", live: false, link: "" },
    { name: "Zakelijke Dienstverlening", count: "Op aanvraag", icon: "ti-briefcase", live: false, link: "" }
  ],

  cta: {
    h2: "Welke vraag komt bij jou\\nhet vaakst terug?",
    sub: "In 30 minuten bespreken we of er een tool voor is — en welk pakket past. Vaste prijs, geen verplichtingen.",
    note: "Gratis intake · Binnen 1 werkdag reactie",
    ctaPrimary: "Plan een gratis gesprek",
    ctaSecondary: "Bekijk pakketten",
    ctaSecondaryLink: "/prijzen",
    stats: [
      { static: "€1.950", label: "Instap vanaf" },
      { static: "2–3 wkn", label: "Richting live" },
      { static: "MKB", label: "1–15 medewerkers" }
    ]
  },

  impact: [
    { count: "30", suffix: "%", label: "minder handmatig opvolgwerk", detail: "Bij tools die terugkerende intake- en prijsvragen automatisch opvangen." },
    { count: "8", unit: "uur", label: "potentiële besparing per week", detail: "Door minder losse mails, telefoontjes en handmatige voorselectie." },
    { count: "45", suffix: "%", label: "completere aanvragen", detail: "Vaste flows zorgen voor minder missende info en betere intakekwaliteit." },
    { static: "24/7", label: "antwoord voor klanten", detail: "Ook buiten openingstijden krijgen bezoekers direct richting of een eerste uitkomst." }
  ],

  caseStats: [
    { count: "10", unit: "dgn", label: "Van brief naar live", detail: "SSPW prijscalculator" },
    { static: "24/7", label: "Zelfservice voor klanten", detail: "Altijd bereikbaar online" },
    { static: "↓", label: "Minder losse prijsvragen", detail: "Concretere gesprekken" }
  ]
};

(function () {
  if (typeof CONTENT === 'undefined') return;

  function setText(id, val, isHTML) {
    var el = document.getElementById(id);
    if (!el || val == null) return;
    if (isHTML) el.innerHTML = String(val);
    else el.textContent = String(val);
  }

  function renderImpactVal(s) {
    if (s.static) return '<span>' + s.static + '</span>';
    var prefix = s.prefix ? '<span class="impact-prefix">' + s.prefix + '</span>' : '';
    var count = '<span data-count-up="' + s.count + '" data-prefix="" data-suffix="' + (s.suffix || '') + '">0</span>';
    return prefix + count;
  }

  function renderImpactCard(s, i) {
    var unit = s.unit ? '<span class="impact-unit">' + s.unit + '</span>' : '';
    var detail = s.detail ? '<p class="impact-detail">' + s.detail + '</p>' : '';
    return '<article class="impact-card ix-reveal ix-stagger-' + ((i % 5) + 1) + '">' +
      '<div class="impact-val">' + renderImpactVal(s) + unit + '</div>' +
      '<div class="impact-lbl">' + s.label + '</div>' + detail + '</article>';
  }

  function renderImpactGrid(items) {
    return (items || []).map(function (s, i) { return renderImpactCard(s, i); }).join('');
  }

  function renderHeroFloat(f) {
    if (f.type === 'case') {
      return '<a class="hero-float hero-float--case" href="' + (f.href || '#') + '" target="_blank" rel="noopener noreferrer">' +
        '<img src="' + f.logo + '" alt="">' +
        '<span>' + f.text + '</span></a>';
    }
    return '<div class="hero-float hero-float--tag"><i class="ti ' + (f.icon || 'ti-sparkles') + '"></i> ' + f.text + '</div>';
  }

  function initAtmosphere(atmo) {
    var html = '';
    if (atmo && atmo.floats) html = atmo.floats.map(renderHeroFloat).join('');
    document.querySelectorAll('.cc-hero-floats-sync').forEach(function (el) {
      if (html) el.innerHTML = html;
    });
    if (window.LoopwerkHeroLoop) {
      window.LoopwerkHeroLoop.init(atmo || {});
    }
  }

  function renderPriceCard(card, featured) {
    var formType = card.formType || 'gesprek';
    var feats = (card.features || []).map(function (f) {
      return '<div class="pf"><i class="ti ti-check pf-check"></i>' + f + '</div>';
    }).join('');
    var badge = card.badge ? '<div class="price-badge">' + card.badge + '</div>' : '';
    var monthly = card.monthly ? '<div class="price-monthly">+ ' + card.monthly + '</div>' : '';
    var btnClass = featured ? 'btn btn-teal' : 'btn btn-outline';
    var arrow = featured ? ' <i class="ti ti-arrow-right"></i>' : '';
    return '<div class="price-card ix-card ix-tilt' + (featured ? ' featured' : '') + '">' +
      badge +
      '<div class="price-title">' + card.title + '</div>' +
      '<div class="price-desc">' + (card.desc || '') + '</div>' +
      '<div class="price-amount"><span>' + card.amount + '</span><sub> / ' + (card.amountSub || '') + '</sub></div>' +
      monthly +
      '<hr class="price-hr">' +
      '<div class="price-feats">' + feats + '</div>' +
      '<a href="#" onclick="openModal(\'' + formType + '\');return false;" class="' + btnClass + ' price-btn" style="font-size:15px;padding:13px 22px;">' + card.cta + arrow + '</a>' +
      '</div>';
  }

  function runApplyContent() {
  var h = CONTENT.hero;
  if (h) {
    setText('cc-hero-pill', h.pill);
    setText('cc-hero-h1', (h.h1 || '').replace(/\\n/g, '<br>'), true);
    setText('cc-hero-sub', h.sub);
    setText('cc-hero-cta1', h.ctaPrimary);
    var cta2 = document.getElementById('cc-hero-cta2');
    if (cta2) {
      cta2.textContent = h.ctaSecondary || cta2.textContent;
      if (h.ctaSecondaryLink) cta2.setAttribute('href', h.ctaSecondaryLink);
    }
    if (h.proofText) setText('cc-hero-proof', h.proofText, /<[a-z][\s\S]*>/i.test(String(h.proofText)));
    var stampEl = document.getElementById('cc-hero-stamp');
    if (stampEl && h.atmosphere && h.atmosphere.loop && h.atmosphere.loop.stamp) {
      stampEl.innerHTML = String(h.atmosphere.loop.stamp).replace(/\\n/g, '<br>');
    }
    if (h.atmosphere) initAtmosphere(h.atmosphere);
    else initAtmosphere({});
  }

  var t = CONTENT.team;
  if (t) {
    setText('cc-team-title', t.title);
    setText('cc-team-intro1', t.intro1);
    setText('cc-team-intro2', t.intro2);
    var link = document.getElementById('cc-team-link');
    if (link) {
      link.textContent = t.linkText || 'Lees meer';
      link.href = t.linkUrl || '/over-ons';
    }
    var grid = document.getElementById('cc-team-grid');
    if (grid && t.members) {
      grid.innerHTML = t.members.map(function(m) {
        var avatar = m.photo
          ? '<div class="team-photo"><img src="' + m.photo + '" alt="' + m.name + '" loading="lazy"></div>'
          : (m.initials ? '<div class="team-avatar ' + (m.avatarClass || '') + '">' + m.initials + '</div>' : '');
        return '<div class="team-card ix-card ix-tilt">' +
          avatar +
          '<div class="team-name">' + m.name + '</div>' +
          '<div class="team-role">' + m.role + '</div>' +
          '<div class="team-bio">' + m.bio + '</div>' +
          '</div>';
      }).join('');
    }
    var vals = document.getElementById('cc-team-values');
    if (vals && t.values) {
      vals.innerHTML = t.values.map(function(v) {
        return '<div class="av ix-card"><div class="av-icon"><i class="ti ' + v.icon + '"></i></div><div>' +
          '<div class="av-title">' + v.title + '</div>' +
          '<div class="av-desc">' + v.desc + '</div></div></div>';
      }).join('');
    }
  }

  var p = CONTENT.pricing;
  if (p) {
    setText('cc-pr-label', p.label);
    setText('cc-pr-title', p.title);
    setText('cc-pr-sub', p.sub);
    var launch = document.getElementById('cc-pr-launch');
    if (launch) {
      if (p.launchOffer) {
        launch.innerHTML = '<p>' + p.launchOffer + '</p>';
        launch.style.display = '';
      } else {
        launch.style.display = 'none';
      }
    }
    var cards = [p.card1, p.card2, p.card3].filter(function (c) { return c && c.title; });
    var prGrid = document.getElementById('cc-pricing-grid');
    if (prGrid && cards.length) {
      prGrid.className = 'pricing-grid' + (cards.length >= 3 ? ' pricing-grid--3' : '');
      prGrid.innerHTML = cards.map(function (card, i) { return renderPriceCard(card, i === 1); }).join('');
    }
  }

  var grid2 = document.getElementById('cc-branches-grid');
  if (grid2 && CONTENT.branches) {
    var branchHtml = CONTENT.branches.map(function(b) {
      var tag = b.link ? 'a' : 'div';
      var attrs = b.link ? ' href="' + b.link + '" target="_blank" rel="noopener"' : '';
      return '<' + tag + ' class="branch-card ix-card"' + attrs + '>' +
        (b.live ? '<div class="branch-live">Live</div>' : '') +
        '<div class="branch-card__icon"><i class="ti ' + (b.icon || 'ti-apps') + '"></i></div>' +
        '<div class="branch-name">' + b.name + '</div>' +
        '<div class="branch-count">' + b.count + '</div>' +
        '</' + tag + '>';
    }).join('');
    branchHtml += '<div class="branch-plus" onclick="openModal(\'idee\')">' +
      '<div class="branch-plus-icon"><i class="ti ti-plus"></i></div>' +
      '<div class="branch-plus-text">Jouw branche</div>' +
      '<div class="branch-plus-sub">Neem contact op</div></div>';
    grid2.innerHTML = branchHtml;
  }

  var c = CONTENT.cta;
  if (c) {
    setText('cc-cta-h2', (c.h2 || '').replace(/\\n/g, '<br>'), true);
    setText('cc-cta-sub', c.sub);
    setText('cc-cta-cta1', c.ctaPrimary);
    setText('cc-cta-cta2', c.ctaSecondary);
    setText('cc-cta-note', c.note);
    var cta2link = document.getElementById('cc-cta-cta2');
    if (cta2link && c.ctaSecondaryLink) cta2link.setAttribute('href', c.ctaSecondaryLink);
    var stats = document.getElementById('cc-cta-stats');
    if (stats && c.stats) {
      stats.innerHTML = renderImpactGrid(c.stats);
    }
  }

  var impactGrid = document.getElementById('cc-impact-stats');
  if (impactGrid && CONTENT.impact) {
    impactGrid.innerHTML = renderImpactGrid(CONTENT.impact);
  }

  var caseStats = document.getElementById('cc-case-stats');
  if (caseStats && CONTENT.caseStats) {
    caseStats.innerHTML = renderImpactGrid(CONTENT.caseStats);
  }

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      runApplyContent();
      document.dispatchEvent(new Event('briqo:content-ready'));
    });
  } else {
    runApplyContent();
    document.dispatchEvent(new Event('briqo:content-ready'));
  }
})();
