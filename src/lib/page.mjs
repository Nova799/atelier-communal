import { esc, attrs, imageData, emblem } from "./html.mjs";
import { site, imageLibrary } from "../data/index.mjs";

export function favicon(commune) {
  const initial = commune.name.replace(/^Sô-/, "S").charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${commune.identity.deep}"/><circle cx="32" cy="32" r="21" fill="none" stroke="${commune.identity.accent}" stroke-width="2"/><text x="32" y="41" font-family="Georgia,serif" font-size="28" text-anchor="middle" fill="#fff">${initial}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function documentShell({
  title,
  description,
  canonical,
  body,
  bodyClass = "",
  template = null,
  commune = null,
  headExtra = "",
  scripts = "",
  jsonLd = null,
  noindex = false,
  themeColor = "#1f2a25",
  fonts = null,
}) {
  const fontList = fonts || template?.fonts || ["instrument-sans", "fraunces"];
  const fontLinks = fontList.map((f) => `<link rel="stylesheet" href="/assets/fonts/${esc(f)}.css">`).join("");
  const hero = commune ? imageLibrary[commune.hero.image] : null;
  const heroData = hero ? imageData(commune.hero.image) : null;
  const preload = heroData && template?.preloadHero !== false
    ? `<link rel="preload" as="image" href="${esc(heroData.src)}" imagesrcset="${esc(heroData.srcset)}" imagesizes="100vw" fetchpriority="high">`
    : "";
  const tokens = commune
    ? `<style>:root{--c-primary:${commune.identity.primary};--c-deep:${commune.identity.deep};--c-accent:${commune.identity.accent};--c-soft:${commune.identity.soft};--c-paper:${commune.identity.paper};--c-ink:${commune.identity.ink};}</style>`
    : "";
  const ld = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll("<", "\\u003c")}</script>`
    : "";
  return `<!doctype html>
<html lang="fr"${commune ? ` data-commune="${esc(commune.slug)}"` : ""}${template ? ` data-template="${esc(template.slug)}"` : ""}>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}">
  <link rel="canonical" href="${esc(canonical)}">
  <meta name="generator" content="Atelier communal — générateur statique">
  <meta name="theme-color" content="${esc(themeColor)}">
  <meta name="color-scheme" content="light">
  <script>document.documentElement.classList.add("js");</script>
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_BJ">
  <meta property="og:site_name" content="Atelier communal — démonstration">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  ${heroData ? `<meta property="og:image" content="${esc(site.baseUrl + heroData.src)}"><meta property="og:image:width" content="${heroData.width}"><meta property="og:image:height" content="${heroData.height}"><meta property="og:image:alt" content="${esc(hero.alt)}">` : `<meta property="og:image" content="${esc(site.baseUrl + "/assets/og-default.svg")}">`}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  ${commune ? `<link rel="icon" href="${favicon(commune)}" type="image/svg+xml">` : `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">`}
  ${preload}
  ${fontLinks}
  <link rel="stylesheet" href="/assets/styles/base.css">
  ${template?.slug ? `<link rel="stylesheet" href="/assets/styles/templates/${esc(template.slug)}.css">` : ""}
  ${tokens}
  ${headExtra}
  ${ld}
</head>
<body class="${esc(bodyClass)}"${commune ? ` data-commune="${esc(commune.slug)}"` : ""}${template ? ` data-template="${esc(template.slug)}"` : ""}>
  <a class="skip" href="#contenu">Aller au contenu principal</a>
  ${body}
  <script type="module" src="/assets/app.js"></script>
  ${scripts}
</body>
</html>`;
}

function organizationLd(commune) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": `${site.baseUrl}/t/`,
        name: `Commune de ${commune.name} — démonstration`,
        alternateName: `${commune.name} (maquette)`,
        description: `Site communal de démonstration pour ${commune.name}, ${commune.department}. ${site.disclaimer}`,
        disambiguatingDescription: site.disclaimer,
        address: {
          "@type": "PostalAddress",
          addressLocality: commune.name,
          addressRegion: commune.department,
          addressCountry: "BJ",
        },
        areaServed: { "@type": "AdministrativeArea", name: `Commune de ${commune.name} (démonstration)` },
        url: `${site.baseUrl}/t/`,
      },
      {
        "@type": "WebSite",
        name: `${commune.name} — maquette communale`,
        url: `${site.baseUrl}/`,
        inLanguage: "fr",
        description: site.disclaimer,
      },
    ],
  };
}

export function communePage({ commune, template, body, navItems, galleryPath = "/" }) {
  const canonical = `${site.baseUrl}/t/${template.slug}/${commune.slug}/`;
  const title = `${commune.name} — ${template.name} · maquette communale`;
  const description = `${commune.seo.description} Direction « ${template.name} », contenu de démonstration.`;
  return documentShell({
    title,
    description,
    canonical,
    body,
    bodyClass: `tpl tpl--${template.slug} commune--${commune.slug}`,
    template,
    commune,
    noindex: true,
    themeColor: commune.identity.deep,
    jsonLd: organizationLd(commune),
    headExtra: `<meta name="demo-template" content="${esc(template.slug)}"><meta name="demo-commune" content="${esc(commune.slug)}">`,
  });
}
