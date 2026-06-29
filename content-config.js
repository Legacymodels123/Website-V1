// BRIQO CONTENT CONFIG — bewerk via /admin.html

const CONTENT = {

  hero: {
    pill: "Eerste live tool: SSPW Prijscalculator",
    h1: "Wij bouwen de\\ntool die jouw\\nbedrijf <em>mist</em>",
    sub: "Geen dikke slides over AI. Wel een calculator, scan of configurator die binnen twee weken op jouw site staat. En morgen al iets oplevert.",
    ctaPrimary: "Demo aanvragen",
    ctaSecondary: "Bekijk cases",
    proofText: "Sun Sauna & Poolworld werkt al met Briqo",
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4",
    bgPoster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
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
      cta: "Vraag offerte aan",
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
      { value: "3", label: "Oprichters" },
      { value: "< 2 wkn", label: "Richting eerste MVP" },
      { value: "NL MKB", label: "Onze focus" }
    ]
  },

};

(function applyContent() {
  if (typeof CONTENT === 'undefined') return;

  function setText(id, val, isHTML) {
    var el = document.getElementById(id);
    if (!el || val == null) return;
    if (isHTML) el.innerHTML = String(val);
    else el.textContent = String(val);
  }

  var h = CONTENT.hero;
  if (h) {
    setText('cc-hero-pill', h.pill);
    setText('cc-hero-h1', (h.h1 || '').replace(/\\n/g, '<br>'), true);
    setText('cc-hero-sub', h.sub);
    setText('cc-hero-cta1', h.ctaPrimary);
    setText('cc-hero-cta2', h.ctaSecondary);
    setText('cc-hero-proof', h.proofText);
    var vid = document.getElementById('cc-hero-video');
    var src = document.getElementById('cc-hero-video-src');
    if (h.bgVideo && src) src.setAttribute('src', h.bgVideo);
    if (h.bgPoster && vid) vid.setAttribute('poster', h.bgPoster);
    if (vid) {
      vid.addEventListener('error', function() {
        var media = document.getElementById('cc-hero-media');
        if (media) media.classList.add('no-video');
      });
      if (h.bgVideo) { try { vid.load(); } catch(e) {} }
    }
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
      stats.innerHTML = c.stats.map(function(s) {
        return '<div class="cs-stat2"><div class="cs-stat2-v">' + s.value + '</div><div class="cs-stat2-l">' + s.label + '</div></div>';
      }).join('');
    }
  }
})();
