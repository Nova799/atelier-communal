import { esc, image, creditLine, captionFor } from "../lib/html.mjs";
import { icon } from "../lib/icons.mjs";
import { templateMeta } from "./meta.mjs";
import {
  brand,
  navToggle,
  mobileNav,
  demoBar,
  footer,
  communeRail,
  serviceExplorer,
  reportDialog,
  newsSection,
  projectsSection,
  statsBand,
  historySection,
  mapSection,
  mayorSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "monolithe");

const navItems = [
  { label: "Bloc", href: "#haut" },
  { label: "Repères", href: "#reperes" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Histoire", href: "#histoire" },
  { label: "Carte", href: "#carte" },
  { label: "Guichet", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const indexItems = [
  ["01", "Bloc", "#bloc"],
  ["02", "Repères", "#reperes"],
  ["03", "Projets", "#projets"],
  ["04", "Actualités", "#actualites"],
  ["05", "Histoire", "#histoire"],
  ["06", "Carte", "#carte"],
  ["07", "Guichet", "#services"],
  ["08", "Contact", "#contact"],
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t15" id="haut">
  <header class="t15-head" data-header>
    <div class="t15-head__strip">
      <span>Direction 15 · Monolithe</span>
      <span>${esc(commune.name)} / ${esc(commune.department)}</span>
      <span>Service public · démonstration</span>
    </div>
    <div class="t15-head__inner">
      ${brand(commune, { sub: "Monolithe · portail communal" })}
      <nav class="t15-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 7).map((n, i) => `<a href="${esc(n.href)}"><span>${String(i + 2).padStart(2, "0")}</span>${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t15-head__cta" href="#services">Le guichet ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t15-hero" aria-labelledby="t15-title">
      <div class="t15-hero__block">
        <span class="t15-hero__num" aria-hidden="true">15</span>
        <p class="t15-kicker"><span aria-hidden="true"></span> La force d'un service public</p>
        <h1 id="t15-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
        <p class="t15-hero__lead">${esc(commune.hero.lead)}</p>
        <div class="t15-hero__actions">
          <a class="btn btn--solid" href="#bloc">Entrer dans le bloc ${icon("arrow-down", { size: 17 })}</a>
          <a class="btn btn--ghost" href="#carte">Voir la commune</a>
        </div>
        <dl class="t15-hero__facts">
          <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
          <div><dt>Région</dt><dd>${esc(commune.region)}</dd></div>
          <div><dt>Arrondissements</dt><dd>${esc(commune.contacts.arrondissements)}</dd></div>
        </dl>
      </div>
      <figure class="t15-hero__figure">
        ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 46vw", loading: "eager", fetchpriority: "high" })}
        <figcaption>
          <span class="t15-hero__figtag">Bloc 15 · démonstration</span>
          <span>${esc(captionFor(commune.hero.image, commune.motto))}</span>
          <span>${esc(creditLine(commune.hero.image))}</span>
        </figcaption>
      </figure>
    </section>

    <div class="t15-body">
      <aside class="t15-index" aria-label="Sommaire de la page">
        <p class="t15-index__title">Index</p>
        <nav>
          ${indexItems.map(([n, label, href]) => `<a href="${esc(href)}"><span>${n}</span>${esc(label)}</a>`).join("")}
        </nav>
        <p class="t15-index__note">${icon("alert", { size: 12 })} Maquette<br>de démonstration</p>
      </aside>

      <div class="t15-main">
        <section class="t15-bloc" id="bloc" aria-labelledby="bloc-title">
          <div class="t15-bloc__head">
            <span class="t15-blockn" aria-hidden="true">01</span>
            <div>
              <p class="t15-label">Bloc · notice communale</p>
              <h2 id="bloc-title">${esc(commune.intro.title)}</h2>
            </div>
          </div>
          <div class="t15-bloc__grid">
            <div class="t15-bloc__text">
              <p>${esc(commune.intro.text)}</p>
              <blockquote>${esc(commune.intro.pullquote)}</blockquote>
              ${demoNote("Notice et citation de démonstration.")}
            </div>
            <figure class="t15-bloc__figure">
              ${image(commune.intro.image, { sizes: "(max-width: 960px) 100vw, 36vw" })}
              <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
            </figure>
          </div>
        </section>

        <section class="t15-reperes" id="reperes" aria-labelledby="reperes-title">
          <div class="t15-reperes__head">
            <span class="t15-blockn t15-blockn--light" aria-hidden="true">02</span>
            <div>
              <p class="t15-label">Repères · chiffres de démonstration</p>
              <h2 id="reperes-title">La commune en blocs</h2>
            </div>
          </div>
          ${statsBand(commune, { variant: "blocks" })}
        </section>

        ${projectsSection(commune, {
          variant: "board",
          id: "projets",
          eyebrow: "03 · Projets",
          title: "Ce qui se construit",
          lead: "Des opérations de démonstration, présentées comme des blocs de chantier.",
        })}

        ${newsSection(commune, {
          variant: "feed",
          id: "actualites",
          eyebrow: "04 · Actualités",
          title: "Les faits du mois",
          lead: "Une sélection fictive pour montrer la hiérarchie de l'information.",
        })}

        ${historySection(commune, {
          variant: "timeline",
          id: "histoire",
          eyebrow: "05 · Histoire",
          title: "Ce qui nous précède",
          lead: "Repères historiques simplifiés pour la démonstration.",
        })}

        ${mapSection(commune, {
          id: "carte",
          eyebrow: "06 · Territoire",
          title: "La commune, à plat",
          lead: "Carte schématique de démonstration. Aucun fond officiel.",
        })}

        ${mayorSection(commune, { variant: "quote", id: "maire" })}

        ${serviceExplorer(commune, {
          variant: "rows",
          id: "services",
          eyebrow: "07 · Guichet",
          title: "Les démarches, sans détour",
          lead: "Démarches de démonstration avec pièces, délais et coûts indicatifs.",
          className: "t15-services",
        })}

        ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

        <div class="t15-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
      </div>
    </div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
