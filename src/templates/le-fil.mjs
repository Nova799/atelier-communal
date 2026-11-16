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
  mapSection,
  mayorSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "le-fil");

const navItems = [
  { label: "Le fil", href: "#haut" },
  { label: "Chronologie", href: "#chronologie" },
  { label: "Carnet", href: "#actualites" },
  { label: "Nœuds", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Contact", href: "#contact" },
];

const knotLabels = ["Origines", "Récit", "Carnet", "Nœuds", "Territoire"];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t12" id="haut">
  <header class="t12-head" data-header>
    <div class="t12-head__rule" aria-hidden="true"></div>
    <div class="t12-head__inner">
      ${brand(commune, { sub: "Le Fil · carnet communal" })}
      <nav class="t12-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t12-head__cta" href="#chronologie">Suivre le fil ${icon("arrow-down", { size: 15 })}</a>
      ${navToggle()}
    </div>
    <div class="t12-head__meta">
      <span>Direction 12</span>
      <span>${esc(commune.department)} · ${esc(commune.region)}</span>
      <span>Carnet de démonstration</span>
    </div>
  </header>

  <main id="contenu">
    <section class="t12-hero" aria-labelledby="t12-title">
      <span class="t12-hero__index" aria-hidden="true">12</span>
      <svg class="t12-thread" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true" fill="none">
        <path d="M1010-40c60 130-130 172-58 292s-128 180-58 292-118 176-64 276" />
        <circle cx="952" cy="252" r="4" />
        <circle cx="894" cy="544" r="4" />
      </svg>
      <div class="t12-hero__grid">
        <div class="t12-hero__copy">
          <p class="t12-kicker"><span>12</span> Une histoire continue</p>
          <h1 id="t12-title"><span>${esc(commune.name.replace(/,$/, ""))},</span><em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t12-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t12-hero__actions">
            <a class="btn btn--solid" href="#chronologie">Tirer le fil ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Le guichet</a>
          </div>
          <dl class="t12-hero__card">
            <div><dt>Commune</dt><dd>${esc(commune.name)}</dd></div>
            <div><dt>Département</dt><dd>${esc(commune.department)}</dd></div>
            <div><dt>Arrondissements</dt><dd>${esc(commune.contacts.arrondissements)}</dd></div>
            <div><dt>Statut</dt><dd>Maquette de démonstration</dd></div>
          </dl>
        </div>

        <figure class="t12-hero__figure">
          <span class="t12-hero__spool" aria-hidden="true"><i></i><i></i><i></i></span>
          <div class="t12-hero__frame">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 42vw", loading: "eager", fetchpriority: "high" })}
          </div>
          <figcaption>
            <span>${esc(captionFor(commune.hero.image, commune.motto))}</span>
            <span>${esc(creditLine(commune.hero.image))}</span>
          </figcaption>
          <p class="t12-hero__caption"><span aria-hidden="true">↳</span> Un fil relie les époques, les nouvelles et les chantiers de la commune.</p>
        </figure>
      </div>
      <div class="t12-hero__foot">
        ${knotLabels.map((k, i) => `<a href="${["#chronologie", "#chronologie", "#actualites", "#projets", "#carte"][i]}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(k)}</a>`).join("")}
      </div>
    </section>

    <section class="t12-fil section" id="chronologie" aria-labelledby="chronologie-title">
      ${sectionHead({
        eyebrow: "Chronologie · le fil des origines",
        title: "Un fil, des époques",
        lead: "La mémoire de la commune se déroule comme un carnet : chaque date est un nœud, chaque récit un passage.",
        id: "chronologie",
      })}
      <div class="t12-fil__intro">
        <p>${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
      </div>
      <ol class="t12-timeline">
        ${commune.history
          .map(
            (h, i) => `<li class="t12-timeline__item" data-reveal style="--i:${i}">
              <span class="t12-timeline__knot" aria-hidden="true"></span>
              <div class="t12-timeline__card">
                <span class="t12-timeline__year">${esc(h.year)}</span>
                <h3>${esc(h.title)}</h3>
                <p>${esc(h.text)}</p>
              </div>
            </li>`,
          )
          .join("")}
      </ol>
      ${demoNote("Repères historiques simplifiés et reformulés pour la démonstration.")}
    </section>

    ${newsSection(commune, {
      variant: "stack",
      id: "actualites",
      eyebrow: "Carnet · notes récentes",
      title: "Ce que le fil retient",
      lead: "Les nouvelles de la commune, notées dans l'ordre du carnet.",
    })}

    ${projectsSection(commune, {
      variant: "dossier",
      id: "projets",
      eyebrow: "Nœuds · chantiers en cours",
      title: "Les nœuds du territoire",
      lead: "Des projets de démonstration, chacun attaché à un lieu et à un calendrier fictif.",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire · points de repère",
      title: "Le fil sur la carte",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "rows",
      id: "services",
      eyebrow: "Guichet · démarches",
      title: "Les démarches du carnet",
      lead: "Pièces, délais et coûts indicatifs, dans une démonstration sans dossier réel.",
      className: "t12-services",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t12-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
