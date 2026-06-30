// BRIQO CONTENT CONFIG — bewerk via /admin.html

const CONTENT = {

  hero: {
    pill: "Terugkerende klantvraag? Bouw er een tool voor.",
    h1: "Wij bouwen de\\ntool die jouw\\nbedrijf <em>mist</em>",
    sub: "Geen AI-verhaal omheen. Wel een calculator, scan of intake die snel live staat en direct antwoord geeft op de vragen die jouw team nu nog handmatig opvangt.",
    ctaPrimary: "Demo aanvragen",
    ctaSecondary: "Bekijk cases",
    proofText: "Sun Sauna & Poolworld werkt al met Briqo",
    workbench: [
      {
        source: "SSPW · website",
        question: "\"Wat kost een zwembad van 8×4 meter met verwarming?\"",
        type: "Prijscalculator",
        typeIcon: "ti-calculator",
        typeDesc: "Klant configureert zelf, jij krijgt gekwalificeerde leads",
        url: "sspw.nl/prijs",
        live: true,
        fields: [
          { label: "Afmeting", value: "8 × 4 m" },
          { label: "Verwarming", value: "Ja" }
        ],
        outcome: "€42.500",
        outcomeLabel: "Indicatie direct zichtbaar"
      },
      {
        source: "Installatiebedrijf · telefoon",
        question: "\"Kunnen jullie een offerte sturen voor zonnepanelen op een plat dak?\"",
        type: "Intake-tool",
        typeIcon: "ti-file-invoice",
        typeDesc: "Gestructureerde aanvraag, klaar om te versturen",
        url: "jouwsite.nl/intake",
        live: false,
        fields: [
          { label: "Daktype", value: "Plat" },
          { label: "Oppervlak", value: "120 m²" }
        ],
        outcome: "Offerteklaar",
        outcomeLabel: "Alle info in één overzicht"
      },
      {
        source: "Adviesbureau · contactformulier",
        question: "\"Past jullie dienst bij een bedrijf van 8 man?\"",
        type: "Snelle scan",
        typeIcon: "ti-sparkles",
        typeDesc: "Acht vragen, drie concrete verbeterkansen",
        url: "jouwsite.nl/scan",
        live: false,
        fields: [
          { label: "Teamgrootte", value: "8 FTE" },
          { label: "Sector", value: "Dienstverlening" }
        ],
        outcome: "3 kansen",
        outcomeLabel: "Direct inzicht voor bezoeker"
      }
    ]
  },

  team: {
    title: "Drie ondernemers, één missie",
    intro1: "Briqo is Levi Kempen, Shaquil Reyes en Gianni Geurtjens. We zagen steeds hetzelfde: goede bedrijven die online geen antwoord kunnen geven op vragen die elke week terugkomen.",
    intro2: "Geen groot IT-traject. Wel een tool die snel live kan en direct iets oplevert.",
    linkText: "Lees ons volledige verhaal",
    linkUrl: "/over-ons",
    members: [
      {
        name: "Levi Kempen",
        role: "Bouw & product",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
        bio: "Ik zet liever morgen iets live waar een klant mee kan werken, dan weken praten over wat er allemaal mogelijk is."
      },
      {
        name: "Shaquil Reyes",
        role: "Klant & commercie",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85",
        bio: "Krijg je dezelfde vraag voor de vijfde keer? Dat is geen last. Dat is een signaal. Ik help scherp krijgen welke tool het meeste oplevert."
      },
      {
        name: "Gianni Geurtjens",
        role: "Inhoud & ervaring",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
        bio: "Tools falen zelden door de techniek. Meestal door onduidelijke vragen. Ik zorg dat flows logisch aanvoelen: helder en menselijk."
      }
    ],
    values: [
      { icon: "ti-bolt", title: "Snel live", desc: "Van idee naar werkende tool in minder dan twee weken." },
      { icon: "ti-tool", title: "Direct bruikbaar", desc: "Teksten en logica aanpasbaar zonder developer." },
      { icon: "ti-chart-bar", title: "Data in jouw hand", desc: "Leads en inzendingen in een helder dashboard." }
    ]
  },

  pricing: {
    card1: {
      title: "Opzet",
      desc: "Eenmalig: van brief tot live MVP op jouw eigen domein.",
      amount: "Op maat",
      amountSub: "eenmalig",
      features: [
        "Intakegesprek & scope",
        "Ontwerp & volledige bouw",
        "Live op Vercel + eigen domein",
        "Admin dashboard voor leads",
        "Supabase database"
      ],
      cta: "Bespreek eerste fase",
    },
    card2: {
      badge: "Maandelijks opzegbaar",
      title: "Abonnement",
      desc: "Maandelijks: wij houden het draaiend en bouwen door.",
      amount: "Op maat",
      amountSub: "",
      features: [
        "Hosting & technisch onderhoud",
        "Updates & bugfixes",
        "Doorontwikkeling op aanvraag",
        "Lead-dashboardtoegang",
        "Prioriteits-support"
      ],
      cta: "Start met demo",
    }
  },

  branches: [
    { name: "Zwembad & Buitenleven", count: "1 tool beschikbaar", img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=500&q=80", live: true, link: "https://sspw-offerte-calc.vercel.app/" },
    { name: "Automotive", count: "3 tools beschikbaar", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
    { name: "Installatie & Bouw", count: "2 tools beschikbaar", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
    { name: "Beauty & Wellness", count: "2 tools beschikbaar", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
    { name: "Retail", count: "2 tools beschikbaar", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
    { name: "Zakelijke Dienstverlening", count: "2 tools beschikbaar", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
    { name: "Horeca & Recreatie", count: "2 tools beschikbaar", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80", live: false, link: "" },
  ],

  cta: {
    h2: "Vertel ons wat jouw\\nbedrijf mist",
    sub: "In een gesprek van 30 minuten bepalen we samen of en hoe we kunnen helpen. Geen verplichtingen, geen verkooppraatje.",
    note: "Binnen 1 werkdag reactie · Geen verplichtingen",
    ctaPrimary: "Vraag een gratis gesprek aan",
    ctaSecondary: "Bekijk cases",
    stats: [
      { prefix: "< ", count: "2", unit: "wkn", label: "Richting live" },
      { count: "30", suffix: "%", label: "snellere opvolging" },
      { count: "8", unit: "uur", label: "besparing per week" }
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

  function renderWorkbenchFields(fields) {
    var container = document.querySelector('.workbench-tool-fields');
    if (!container || !fields) return;
    container.innerHTML = fields.map(function (f) {
      return '<div class="workbench-field"><span class="workbench-field-lbl">' + f.label + '</span><span class="workbench-field-val">' + f.value + '</span></div>';
    }).join('');
  }

  function applyWorkbenchScenario(s, idx) {
    setText('cc-wb-source', s.source);
    setText('cc-wb-question', s.question);
    setText('cc-wb-type', s.type);
    setText('cc-wb-type-desc', s.typeDesc);
    setText('cc-wb-url', s.url);
    setText('cc-wb-outcome', s.outcome);
    setText('cc-wb-outcome-label', s.outcomeLabel);
    var icon = document.getElementById('cc-wb-type-icon');
    if (icon && s.typeIcon) icon.innerHTML = '<i class="ti ' + s.typeIcon + '"></i>';
    var live = document.getElementById('cc-wb-live');
    if (live) live.classList.toggle('is-hidden', !s.live);
    renderWorkbenchFields(s.fields);
    var wb = document.getElementById('cc-hero-workbench');
    if (wb) {
      wb.classList.remove('is-step-1', 'is-step-2', 'is-step-3');
      wb.classList.add('is-step-' + ((idx % 3) + 1));
    }
    document.querySelectorAll('.workbench-dot').forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === idx);
      dot.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
  }

  function initWorkbench(scenarios) {
    if (!scenarios || !scenarios.length) return;
    var wb = document.getElementById('cc-hero-workbench');
    if (!wb) return;
    if (wb._workbenchTimer) {
      clearInterval(wb._workbenchTimer);
      wb._workbenchTimer = null;
    }

    var dots = document.getElementById('cc-wb-dots');
    if (dots) {
      dots.innerHTML = scenarios.map(function (_, i) {
        return '<button type="button" class="workbench-dot' + (i === 0 ? ' is-active' : '') + '" role="tab" aria-label="Scenario ' + (i + 1) + '" aria-selected="' + (i === 0 ? 'true' : 'false') + '" data-wb-idx="' + i + '"></button>';
      }).join('');
    }

    var current = 0;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var timer;

    function goTo(idx, animate) {
      idx = ((idx % scenarios.length) + scenarios.length) % scenarios.length;
      if (animate && !reduced) {
        wb.querySelectorAll('.workbench-step').forEach(function (el) { el.classList.add('is-fading'); });
        setTimeout(function () {
          applyWorkbenchScenario(scenarios[idx], idx);
          wb.querySelectorAll('.workbench-step').forEach(function (el) { el.classList.remove('is-fading'); });
        }, 220);
      } else {
        applyWorkbenchScenario(scenarios[idx], idx);
      }
      current = idx;
    }

    applyWorkbenchScenario(scenarios[0], 0);

    if (dots) {
      dots.addEventListener('click', function (e) {
        var btn = e.target.closest('.workbench-dot');
        if (!btn) return;
        var idx = parseInt(btn.dataset.wbIdx, 10);
        if (!isNaN(idx)) {
          clearInterval(timer);
          goTo(idx, true);
          if (!reduced) {
            timer = setInterval(function () { goTo(current + 1, true); }, 7000);
            wb._workbenchTimer = timer;
          }
        }
      });
    }

    wb.querySelectorAll('.workbench-step').forEach(function (step) {
      step.addEventListener('mouseenter', function () {
        if (reduced) return;
        var n = parseInt(step.dataset.wbStep, 10);
        if (!isNaN(n)) {
          wb.classList.remove('is-step-1', 'is-step-2', 'is-step-3');
          wb.classList.add('is-step-' + n);
        }
      });
    });

    if (!reduced && scenarios.length > 1) {
      timer = setInterval(function () { goTo(current + 1, true); }, 7000);
      wb._workbenchTimer = timer;
    }

    window.BriqoWorkbench = { goTo: goTo };
  }

  function runApplyContent() {
  var h = CONTENT.hero;
  if (h) {
    setText('cc-hero-pill', h.pill);
    setText('cc-hero-h1', (h.h1 || '').replace(/\\n/g, '<br>'), true);
    setText('cc-hero-sub', h.sub);
    setText('cc-hero-cta1', h.ctaPrimary);
    setText('cc-hero-cta2', h.ctaSecondary);
    setText('cc-hero-proof', h.proofText);
    if (h.workbench) initWorkbench(h.workbench);
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
        return '<div class="team-card ix-card ix-tilt">' +
          '<div class="team-photo"><img src="' + m.photo + '" alt="' + m.name + '" loading="lazy"></div>' +
          '<div class="team-body">' +
          '<div class="team-name">' + m.name + '</div>' +
          '<div class="team-role">' + m.role + '</div>' +
          '<div class="team-bio">' + m.bio + '</div>' +
          '</div></div>';
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
    var c1 = p.card1 || {}, c2 = p.card2 || {};
    setText('cc-p1-title', c1.title); setText('cc-p1-desc', c1.desc);
    setText('cc-p1-amount', c1.amount); setText('cc-p1-sub', c1.amountSub);
    var el = document.getElementById('cc-p1-feats');
    if (el && c1.features) el.innerHTML = c1.features.map(function(f) { return '<div class="pf"><i class="ti ti-check pf-check"></i>' + f + '</div>'; }).join('');
    setText('cc-p1-cta', c1.cta);
    setText('cc-p2-badge', c2.badge); setText('cc-p2-title', c2.title);
    setText('cc-p2-desc', c2.desc); setText('cc-p2-amount', c2.amount); setText('cc-p2-sub', c2.amountSub || 'maand');
    el = document.getElementById('cc-p2-feats');
    if (el && c2.features) el.innerHTML = c2.features.map(function(f) { return '<div class="pf"><i class="ti ti-check pf-check"></i>' + f + '</div>'; }).join('');
    setText('cc-p2-cta', c2.cta);
  }

  var grid2 = document.getElementById('cc-branches-grid');
  if (grid2 && CONTENT.branches) {
    grid2.innerHTML = CONTENT.branches.map(function(b) {
      var onclick = b.link ? ' onclick="window.open(\'' + b.link + '\',\'_blank\')" style="cursor:pointer"' : '';
      return '<div class="branch-card ix-card"' + onclick + '>' +
        (b.live ? '<div class="branch-live">Live</div>' : '') +
        '<img src="' + b.img + '" alt="' + b.name + '" loading="lazy">' +
        '<div class="branch-overlay"></div>' +
        '<div class="branch-content"><div class="branch-name">' + b.name + '</div><div class="branch-tools">' + b.count + '</div></div>' +
        '</div>';
    }).join('');
  }

  var c = CONTENT.cta;
  if (c) {
    setText('cc-cta-h2', (c.h2 || '').replace(/\\n/g, '<br>'), true);
    setText('cc-cta-sub', c.sub);
    setText('cc-cta-cta1', c.ctaPrimary);
    setText('cc-cta-cta2', c.ctaSecondary);
    setText('cc-cta-note', c.note);
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
