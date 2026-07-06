// LOOPWERK — centrale merknaam & pay-off (bewerk hier bij rebranding)

const BRAND = {
  name: "Loopwerk",
  tagline: "De tool voor jouw meest gestelde vraag",
  description: "Loopwerk bouwt de tool die jouw meest gestelde vraag beantwoordt — zodat jij dat niet meer hoeft te doen.",
  footerDesc: "De tool voor jouw meest gestelde vraag. Vaste prijzen, live in 2–3 weken.",
  footerTag: "Gebouwd voor het Nederlandse MKB",
  siteUrl: "https://loopwerkonline.nl",
  ogImage: "https://loopwerkonline.nl/og-image.png",
  themeColor: "#1E3B2E"
};

(function () {
  function applyBrand() {
    document.querySelectorAll(".nav-name, .footer-ln").forEach(function (el) {
      el.textContent = BRAND.name;
    });
    var copy = document.getElementById("footerCopy");
    if (copy) copy.textContent = "\u00a9 2026 " + BRAND.name + ". Alle rechten voorbehouden.";
    var desc = document.querySelector(".footer-desc");
    if (desc) desc.textContent = BRAND.footerDesc;
    var tag = document.getElementById("footerTag");
    if (tag) tag.textContent = BRAND.footerTag;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyBrand);
  } else {
    applyBrand();
  }
})();
