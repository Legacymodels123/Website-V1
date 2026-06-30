// LOOPWERK — centrale merknaam & pay-off (bewerk hier bij rebranding)

const BRAND = {
  name: "Loopwerk",
  tagline: "Slimme tools voor werk dat steeds terugkomt",
  description: "Loopwerk bouwt praktische tools en automatiseringen voor Nederlandse MKB-bedrijven. Geen groot IT-traject — wel een concrete oplossing voor werk dat steeds terugkomt.",
  footerDesc: "Slimme tools voor werk dat steeds terugkomt. Van idee naar live tool in minder dan twee weken.",
  footerTag: "Gebouwd voor het Nederlandse MKB",
  siteUrl: "https://briqo.nl",
  ogImage: "https://briqo.nl/og-image.png",
  themeColor: "#101820"
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
