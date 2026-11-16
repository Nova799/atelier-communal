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
  statsBand,
  youthSection,
  mapSection,
  contactSection,
  sectionHead,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "village-global");

const navItems = [
  { label: "Communauté", href: "#communaute" },
  { label: "Démarches", href: "#services" },
  { label: "Actualités", href: "#actualites" },
  { label: "Jeunesse", href: "#jeunesse" },
  { label: "Carte", href: "#carte" },
  { label: "Contact", href: "#contact" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t14" id="haut">
  <header class="t14-head" data-header>
    <div class="t14-head__inner">
      ${brand(commune, { sub: "Village Global · portail communal" })}
      <nav class="t14-nav" aria-label="Navigation principale">
        ${navItems.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t14-head__cta" href="#services">Venir au guichet ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t14-hero" aria-labelledby="t14-title">
      <span class="t14-blob t14-blob--a" aria-hidden="true"></span>
      <span class="t14-blob t14-blob--b" aria-hidden="true"></span>
      <div class="t14-hero__grid">
        <div class="t14-hero__copy">
          <p class="t14-kicker"><span aria-hidden="true">●</span> Direction 14 · une commune reliée</p>
          <h1 id="t14-title"><span>${esc(commune.name.replace(/,$/, ""))},</span><em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t14-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t14-hero__actions">
            <a class="btn btn--solid" href="#communaute">Rencontrer la commune ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Trouver un service</a>
          </div>
          <ul class="t14-pills" aria-label="Repères de démonstration">
            <li><span>${esc(commune.department)}</span>Département</li>
            <li><span>${esc(commune.contacts.arrondissements)}</span>Arrondissements</li>
            <li><span>${esc(commune.contacts.quartiers)}</span>Quartiers</li>
          </ul>
        </div>

        <div class="t14-orbit">
          <figure class="t14-orbit__figure">
            <div class="t14-orbit__frame">
              ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 44vw", loading: "eager", fetchpriority: "high" })}
            </div>
            <figcaption>${esc(captionFor(commune.hero.image, commune.motto))} · ${esc(creditLine(commune.hero.image))}</figcaption>
          </figure>
          <svg class="t14-orbit__links" viewBox="0 0 520 560" aria-hidden="true" fill="none">
            <path d="M90 96c90-20 130 24 170 84M430 130c-54 12-84 40-96 86M88 432c78 10 122-18 158-64M420 428c-60 4-96-24-126-62" />
            <circle cx="90" cy="96" r="4" /><circle cx="430" cy="130" r="4" /><circle cx="88" cy="432" r="4" /><circle cx="420" cy="428" r="4" />
          </svg>
          <span class="t14-orbit__tag t14-orbit__tag--a">${icon("wave", { size: 14 })} Lac et berges</span>
          <span class="t14-orbit__tag t14-orbit__tag--b">${icon("users", { size: 14 })} Vie de quartier</span>
          <span class="t14-orbit__tag t14-orbit__tag--c">${icon("shop", { size: 14 })} Marchés locaux</span>
          <span class="t14-orbit__tag t14-orbit__tag--d">${icon("leaf", { size: 14 })} Milieux humides</span>
        </div>
      </div>
      <p class="t14-hero__note">${icon("alert", { size: 13 })} Identité, photographies et repères de démonstration. Aucun contenu officiel.</p>
    </section>

    <section class="t14-community section" id="communaute" aria-labelledby="communaute-title">
      ${sectionHead({
        eyebrow: "Communauté · ce qui relie",
        title: "Une commune à taille humaine",
        lead: "Trois manières de raconter le même lien : habiter, travailler, se retrouver.",
        id: "communaute",
      })}
      <div class="t14-community__grid">
        <article class="t14-card t14-card--intro" data-reveal style="--i:0">
          <span class="t14-card__tag">Habiter</span>
          <h3>${esc(commune.intro.title)}</h3>
          <p>${esc(commune.intro.text)}</p>
          <p class="t14-card__quote">« ${esc(commune.intro.pullquote)} »</p>
          <figure>${image(commune.intro.image, { sizes: "(max-width: 900px) 100vw, 34vw" })}<figcaption>${esc(commune.intro.caption)}</figcaption></figure>
        </article>
        <article class="t14-card t14-card--eco" data-reveal style="--i:1">
          <span class="t14-card__tag">Travailler</span>
          <h3>Ce qui fait vivre la commune</h3>
          <p>${esc(commune.economy.text)}</p>
          <ul class="t14-card__sectors">
            ${commune.economy.sectors.map((s) => `<li><span>${esc(s.name)}</span><strong>${s.share}%</strong></li>`).join("")}
          </ul>
        </article>
        <article class="t14-card t14-card--culture" data-reveal style="--i:2">
          <span class="t14-card__tag">Se retrouver</span>
          <h3>Une culture qui rassemble</h3>
          <p>${esc(commune.culture.text)}</p>
          <ul class="t14-card__tags">${commune.culture.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        </article>
      </div>
      ${statsBand(commune, { variant: "cards" })}
      ${demoNote("Textes, repères et répartitions de démonstration.")}
    </section>

    ${serviceExplorer(commune, {
      variant: "grid",
      id: "services",
      eyebrow: "Guichet · services de proximité",
      title: "Les démarches, sans détour",
      lead: "Des démarches de démonstration, reliées à leurs pièces et à leurs délais.",
      className: "t14-services",
    })}

    ${newsSection(commune, {
      variant: "cards",
      id: "actualites",
      eyebrow: "Actualités · la vie qui circule",
      title: "Des nouvelles du village",
      lead: "Un aperçu fictif de la vie communale, entre quartiers et rives.",
    })}

    ${youthSection(commune, {
      id: "jeunesse",
      eyebrow: "Jeunesse · transmission",
      title: "Une place pour les jeunes",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire · liens et distances",
      title: "La commune, en réseau",
      lead: "Carte schématique de démonstration. Les positions sont indicatives.",
    })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t14-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
