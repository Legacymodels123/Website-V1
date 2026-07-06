/* BRIQO — contextafhankelijke aanvraagformulieren */
(function () {
  // Lead-opslag via Supabase — config in supabase-config.js (window.LOOPWERK_SUPABASE)

  var BRANCHE_OPTIONS = [
    { value: '', label: 'Selecteer jouw branche...' },
    { value: 'zwembad-buitenleven', label: 'Zwembad & Buitenleven' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'installatie-bouw', label: 'Installatie & Bouw' },
    { value: 'beauty-wellness', label: 'Beauty & Wellness' },
    { value: 'retail', label: 'Retail' },
    { value: 'zakelijke-dienstverlening', label: 'Zakelijke Dienstverlening' },
    { value: 'horeca-recreatie', label: 'Horeca & Recreatie' },
    { value: 'anders', label: 'Anders' }
  ];

  var TOOL_OPTIONS = [
    { value: '', label: 'Weet ik nog niet' },
    { value: 'calculator', label: 'Calculator / prijsindicatie' },
    { value: 'scan', label: 'Scan / check' },
    { value: 'configurator', label: 'Configurator' },
    { value: 'intake', label: 'Intake / aanvraagflow' },
    { value: 'anders', label: 'Iets anders' }
  ];

  var VARIANTS = {
    demo: {
      label: 'Demo aanvragen',
      title: 'Zie wat er mogelijk is voor jouw bedrijf',
      sub: 'We laten zien welk type tool past bij jouw situatie. Geen verplichtingen.',
      note: 'Binnen 1 werkdag reactie · Vrijblijvende demo',
      submit: 'Demo aanvragen',
      successTitle: 'Demo-aanvraag ontvangen!',
      successText: 'We nemen binnen 1 werkdag contact op om een demo in te plannen.',
      fields: [
        { type: 'row', fields: [
          { name: 'naam', label: 'Naam', type: 'text', required: true, placeholder: 'Jan de Vries' },
          { name: 'bedrijf', label: 'Bedrijf', type: 'text', required: true, placeholder: 'Jouw BV' }
        ]},
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, placeholder: 'jan@jouwbedrijf.nl' },
        { name: 'tool_interesse', label: 'Waar ben je naar op zoek?', type: 'select', options: TOOL_OPTIONS },
        { name: 'demo_vraag', label: 'Wat wil je in de demo zien?', type: 'textarea', placeholder: 'Bijv: hoe een calculator op onze site zou werken...' }
      ]
    },
    gesprek: {
      label: 'Gratis gesprek',
      title: 'Laten we kort sparren',
      sub: 'Vertel wat er speelt. We reageren binnen 1 werkdag met een eerlijk antwoord.',
      note: 'Geen verplichtingen · Geen verkooppraatje',
      submit: 'Gesprek aanvragen',
      successTitle: 'Aanvraag ontvangen!',
      successText: 'We nemen binnen 1 werkdag contact op om een gesprek in te plannen.',
      fields: [
        { type: 'row', fields: [
          { name: 'naam', label: 'Naam', type: 'text', required: true, placeholder: 'Jan de Vries' },
          { name: 'bedrijf', label: 'Bedrijf', type: 'text', placeholder: 'Jouw BV' }
        ]},
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, placeholder: 'jan@jouwbedrijf.nl' },
        { name: 'gesprek_onderwerp', label: 'Waar gaat het over?', type: 'textarea', required: true, placeholder: 'Bijv: klanten bellen steeds voor dezelfde prijsindicatie...' },
        { name: 'contact_moment', label: 'Wanneer ben je het beste bereikbaar?', type: 'select', options: [
          { value: '', label: 'Maakt niet uit' },
          { value: 'ochtend', label: 'Ochtend' },
          { value: 'middag', label: 'Middag' },
          { value: 'avond', label: 'Avond' }
        ]}
      ]
    },
    idee: {
      label: 'Idee delen',
      title: 'Welk probleem wil je oplossen?',
      sub: 'Nog geen concreet plan? Geen probleem. Beschrijf de situatie en we denken mee.',
      note: 'Kort en praktisch · Geen uitgewerkte offerte nodig',
      submit: 'Idee versturen',
      successTitle: 'Bedankt voor je idee!',
      successText: 'We lezen je situatie door en komen binnen 1 werkdag terug met een eerlijke eerste gedachte.',
      fields: [
        { type: 'row', fields: [
          { name: 'naam', label: 'Naam', type: 'text', required: true, placeholder: 'Jan de Vries' },
          { name: 'bedrijf', label: 'Bedrijf', type: 'text', placeholder: 'Jouw BV' }
        ]},
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, placeholder: 'jan@jouwbedrijf.nl' },
        { name: 'tool_type', label: 'Welk type tool denk je aan?', type: 'select', options: TOOL_OPTIONS },
        { name: 'idee_beschrijving', label: 'Beschrijf de situatie', type: 'textarea', required: true, placeholder: 'Wat kost nu tijd, wat missen klanten online, wat zou versie 1 moeten doen?' }
      ]
    },
    intake: {
      label: 'Intake plannen',
      title: 'Start met een korte intake',
      sub: 'We brengen in kaart wat versie 1 moet kunnen, zonder meteen een groot traject.',
      note: 'Kort gesprek · Concreet advies',
      submit: 'Intake aanvragen',
      successTitle: 'Intake-aanvraag ontvangen!',
      successText: 'We plannen een korte intake om de eerste versie scherp te krijgen.',
      fields: [
        { type: 'row', fields: [
          { name: 'naam', label: 'Naam', type: 'text', required: true, placeholder: 'Jan de Vries' },
          { name: 'bedrijf', label: 'Bedrijf', type: 'text', required: true, placeholder: 'Jouw BV' }
        ]},
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, placeholder: 'jan@jouwbedrijf.nl' },
        { name: 'versie_een', label: 'Wat moet versie 1 kunnen?', type: 'textarea', required: true, placeholder: 'Welke invoer, welke uitkomst, voor wie is de tool bedoeld?' },
        { name: 'intake_timing', label: 'Wanneer past een gesprek?', type: 'select', options: [
          { value: '', label: 'Maakt niet uit' },
          { value: 'deze-week', label: 'Deze week' },
          { value: 'volgende-week', label: 'Volgende week' },
          { value: 'later', label: 'Later / nog oriënteren' }
        ]}
      ]
    },
    inschatting: {
      label: 'Eerste inschatting',
      title: 'Wat past bij jouw eerste fase?',
      sub: 'Geen uitgebreide offerte, wel een realistisch beeld van een compacte eerste versie.',
      note: 'Snel antwoord · Geen verplichtingen',
      submit: 'Inschatting aanvragen',
      successTitle: 'Aanvraag ontvangen!',
      successText: 'We kijken naar je situatie en geven een eerlijke eerste inschatting terug.',
      fields: [
        { type: 'row', fields: [
          { name: 'naam', label: 'Naam', type: 'text', required: true, placeholder: 'Jan de Vries' },
          { name: 'bedrijf', label: 'Bedrijf', type: 'text', required: true, placeholder: 'Jouw BV' }
        ]},
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, placeholder: 'jan@jouwbedrijf.nl' },
        { name: 'tool_type', label: 'Welk type tool heb je in gedachten?', type: 'select', options: TOOL_OPTIONS },
        { name: 'scope', label: 'Hoe compact moet de eerste versie zijn?', type: 'select', options: [
          { value: '', label: 'Weet ik nog niet' },
          { value: 'compact', label: 'Compact — één duidelijke flow' },
          { value: 'gemiddeld', label: 'Iets uitgebreider — meerdere stappen' },
          { value: 'maatwerk', label: 'Groter traject — eerst bespreken' }
        ]},
        { name: 'context', label: 'Extra context', type: 'textarea', placeholder: 'Optioneel: wat moet de tool oplossen of vervangen?' }
      ]
    }
  };

  var PAGE_CTA_DEFAULTS = {
    prijzen: 'gesprek',
    werkwijze: 'intake',
    branches: 'idee',
    cases: 'gesprek',
    'over-ons': 'gesprek',
    blog: 'gesprek'
  };

  var CONSENT_HTML =
    '<input type="text" name="website_url" tabindex="-1" autocomplete="off" aria-hidden="true" class="cf-hp">' +
    '<div class="form-consent" id="cf-consent-wrap">' +
      '<label class="consent-label"><input type="checkbox" id="cf-consent" name="consent" required> ' +
      '<span>Ik ga akkoord dat Loopwerk mijn gegevens gebruikt om contact met mij op te nemen naar aanleiding van deze aanvraag.</span></label>' +
    '</div>' +
    '<div class="form-error" id="cf-error" style="display:none">Er ging iets mis bij het versturen. Probeer het opnieuw of mail naar kempenlevi@gmail.com.</div>';

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderField(field) {
    if (field.type === 'row') {
      return '<div class="form-row">' + field.fields.map(function (f) {
        return '<div class="form-group" style="margin-bottom:0">' + renderField(f) + '</div>';
      }).join('') + '</div>';
    }

    var id = 'cf-' + field.name;
    var req = field.required ? ' required' : '';
    var label = '<label for="' + id + '">' + esc(field.label) + (field.required ? ' *' : '') + '</label>';

    if (field.type === 'textarea') {
      return label + '<textarea id="' + id + '" name="' + field.name + '" placeholder="' + esc(field.placeholder || '') + '"' + req + '></textarea>';
    }
    if (field.type === 'select') {
      var opts = (field.options || []).map(function (o) {
        return '<option value="' + esc(o.value) + '">' + esc(o.label) + '</option>';
      }).join('');
      return label + '<select id="' + id + '" name="' + field.name + '">' + opts + '</select>';
    }
    return label + '<input type="' + (field.type || 'text') + '" id="' + id + '" name="' + field.name + '" placeholder="' + esc(field.placeholder || '') + '"' + req + '>';
  }

  function renderFields(fields) {
    return fields.map(function (field) {
      if (field.type === 'row') return renderField(field);
      return '<div class="form-group">' + renderField(field) + '</div>';
    }).join('');
  }

  function resetModal() {
    var formWrap = document.getElementById('modalForm');
    var success = document.getElementById('modalSuccess');
    var form = document.getElementById('contactForm');
    if (formWrap) formWrap.style.display = '';
    if (success) success.style.display = 'none';
    if (form) form.reset();
    var btn = document.getElementById('submitBtn');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = (window.__briqoSubmitLabel || 'Verstuur aanvraag') + ' <i class="ti ti-arrow-right"></i>';
    }
  }

  function applyVariant(type, meta) {
    var variant = VARIANTS[type] || VARIANTS.gesprek;
    var labelEl = document.getElementById('modalLabel');
    var titleEl = document.getElementById('modalTitle');
    var subEl = document.getElementById('modalSub');
    var noteEl = document.getElementById('modalNote');
    var fieldsEl = document.getElementById('modalFields');
    var typeEl = document.getElementById('aanvraagType');
    var bronEl = document.getElementById('aanvraagBron');
    var btn = document.getElementById('submitBtn');
    var successTitle = document.getElementById('modalSuccessTitle');
    var successText = document.getElementById('modalSuccessText');

    if (labelEl) labelEl.textContent = variant.label;
    if (titleEl) titleEl.textContent = variant.title;
    if (subEl) subEl.textContent = variant.sub;
    if (noteEl) noteEl.textContent = variant.note;
    if (fieldsEl) fieldsEl.innerHTML = renderFields(variant.fields) + CONSENT_HTML;
    if (typeEl) typeEl.value = type;
    if (bronEl) bronEl.value = meta && meta.source ? meta.source : (location.pathname || '/');
    if (btn) {
      window.__briqoSubmitLabel = variant.submit;
      btn.innerHTML = variant.submit + ' <i class="ti ti-arrow-right"></i>';
    }
    if (successTitle) successTitle.textContent = variant.successTitle;
    if (successText) successText.textContent = variant.successText;
  }

  function openModal(type, meta) {
    type = type || 'demo';
    resetModal();
    applyVariant(type, meta || {});
    var modal = document.getElementById('demoModal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    var modal = document.getElementById('demoModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function bindModal() {
    var modal = document.getElementById('demoModal');
    var form = document.getElementById('contactForm');
    if (!modal || !form || form.dataset.bound) return;
    form.dataset.bound = '1';
    applyVariant('demo', { source: location.pathname || '/' });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = document.getElementById('submitBtn');
      if (!btn) return;

      // Honeypot: alleen bots vullen dit verborgen veld
      var trap = form.querySelector('[name="website_url"]');
      if (trap && trap.value) { return; }

      // AVG-toestemming verplicht
      var consent = document.getElementById('cf-consent');
      var wrap = document.getElementById('cf-consent-wrap');
      if (consent && !consent.checked) {
        if (wrap) wrap.classList.add('consent-error');
        consent.focus();
        return;
      }
      if (wrap) wrap.classList.remove('consent-error');
      var errEl = document.getElementById('cf-error');
      if (errEl) errEl.style.display = 'none';

      var fd = new FormData(form);
      var core = {
        aanvraag_type: fd.get('aanvraag_type') || 'demo',
        pagina_bron: fd.get('pagina_bron') || (location.pathname || '/'),
        naam: fd.get('naam') || null,
        bedrijf: fd.get('bedrijf') || null,
        email: fd.get('email') || null,
        tool_interesse: fd.get('tool_interesse') || fd.get('tool_type') || null,
        bericht: fd.get('demo_vraag') || fd.get('gesprek_onderwerp') || fd.get('idee_beschrijving') || fd.get('versie_een') || fd.get('context') || null
      };
      var skip = ['aanvraag_type','pagina_bron','naam','bedrijf','email','tool_interesse','tool_type','demo_vraag','gesprek_onderwerp','idee_beschrijving','versie_een','context','website_url','consent'];
      var extra = {};
      fd.forEach(function (v, k) { if (skip.indexOf(k) === -1 && v) extra[k] = v; });
      core.extra = extra;

      btn.disabled = true;
      btn.textContent = 'Versturen...';

      var cfg = window.LOOPWERK_SUPABASE || {};
      try {
        if (!cfg.url || !cfg.key) throw new Error('Supabase niet geconfigureerd');
        var res = await fetch(cfg.url.replace(/\/$/, '') + '/rest/v1/website_leads', {
          method: 'POST',
          headers: {
            'apikey': cfg.key,
            'Authorization': 'Bearer ' + cfg.key,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(core)
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        document.getElementById('modalForm').style.display = 'none';
        document.getElementById('modalSuccess').style.display = 'block';
      } catch (err) {
        btn.disabled = false;
        btn.innerHTML = (window.__briqoSubmitLabel || 'Verstuur aanvraag') + ' <i class="ti ti-arrow-right"></i>';
        if (errEl) errEl.style.display = 'block';
      }
    });
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
  window.BriqoForms = {
    open: openModal,
    close: closeModal,
    defaults: PAGE_CTA_DEFAULTS,
    variants: VARIANTS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindModal);
  } else {
    bindModal();
  }
})();
