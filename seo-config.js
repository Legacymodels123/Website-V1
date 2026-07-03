// LOOPWERK SEO CONFIG — bewerk via /admin.html of brand-config.js

const SEO = {
  siteName: typeof BRAND !== "undefined" ? BRAND.name : "Loopwerk",
  siteUrl: typeof BRAND !== "undefined" ? BRAND.siteUrl : "https://briqo.nl",
  title: (typeof BRAND !== "undefined" ? BRAND.name : "Loopwerk") + " | De tool voor jouw meest gestelde vraag",
  description: typeof BRAND !== "undefined" ? BRAND.description : "Loopwerk bouwt de tool die jouw meest gestelde vraag beantwoordt — zodat jij dat niet meer hoeft te doen.",
  ogImage: typeof BRAND !== "undefined" ? BRAND.ogImage : "https://briqo.nl/og-image.png",
  twitterHandle: "",
  canonical: typeof BRAND !== "undefined" ? BRAND.siteUrl : "https://briqo.nl",
  robots: "index, follow",
  locale: "nl_NL",
  themeColor: typeof BRAND !== "undefined" ? BRAND.themeColor : "#1E2A26",
};

(function () {
  var set = function(sel, attr, val) { var el = document.querySelector(sel); if (el && val) el.setAttribute(attr, val); };
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
