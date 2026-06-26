// ╔══════════════════════════════════════════════════════════════════╗
// ║  BRIQO SEO CONFIG                                               ║
// ║  Bewerk dit bestand via /admin — niet handmatig aanpassen       ║
// ╚══════════════════════════════════════════════════════════════════╝

const SEO = {
  siteName: "Briqo",
  siteUrl: "https://briqo.nl",

  title: "Briqo — Slimme AI-tools voor slim MKB",
  description: "Briqo bouwt praktische AI-tools voor Nederlandse MKB-bedrijven van 1–15 medewerkers. Van offertecalculatoren tot lead-capture tools — in dagen live, niet maanden.",

  ogImage: "https://briqo.nl/og-image.png",
  twitterHandle: "",

  canonical: "https://briqo.nl",
  robots: "index, follow",
  locale: "nl_NL",
  themeColor: "#0F172A",
};

// ── Automatisch meta tags bijwerken ─────────────────────────────────
(function () {
  const set = (sel, attr, val) => {
    const el = document.querySelector(sel);
    if (el && val) el.setAttribute(attr, val);
  };

  document.title = SEO.title;
  set('meta[name="description"]', "content", SEO.description);
  set('meta[name="robots"]', "content", SEO.robots);
  set('meta[name="theme-color"]', "content", SEO.themeColor);
  set('link[rel="canonical"]', "href", SEO.canonical);

  set('meta[property="og:title"]', "content", SEO.title);
  set('meta[property="og:description"]', "content", SEO.description);
  set('meta[property="og:image"]', "content", SEO.ogImage);
  set('meta[property="og:url"]', "content", SEO.canonical);
  set('meta[property="og:site_name"]', "content", SEO.siteName);
  set('meta[property="og:locale"]', "content", SEO.locale);

  set('meta[name="twitter:title"]', "content", SEO.title);
  set('meta[name="twitter:description"]', "content", SEO.description);
  set('meta[name="twitter:image"]', "content", SEO.ogImage);
  if (SEO.twitterHandle) set('meta[name="twitter:site"]', "content", SEO.twitterHandle);
})();
