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
  projectsSection,
  mapSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "marche");

const navItems = [
  { label: "Étal", href: "#haut" },
  { label: "Annonces", href: "#annonces" },
  { label: "Agenda", href: "#agenda" },
  { label: "Projets", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const ticker = ["État civil", "Permis de construire", "Marchés", "Déchets", "Transport", "Culture", "Jeunesse", "Taxes locales"];

export function render(commune, ctx) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t10" id="haut">
  <header class="t10-head" data-header>
    <div class="t10-head__strip">
      <span>${icon("shop", { size: 13 })} Marché communal · édition de démonstration</span>
      <span>${esc(date)}</span>
      <span>${esc(commune.department)} · ${esc(commune.region)}</span>
    </div>
    <div class="t10-head__inner">
      ${brand(commune, { sub: "Marché · la place communale" })}
      <nav class="t10-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n, i) => `<a href="${esc(n.href)}"><span>${String(i + 2).padStart(2, "0")}</span>${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t10-head__cta" href="#services">Prendre un ticket ${icon("arrow-up-right", { size: 14 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t10-hero" aria-labelledby="t10-title">
      <span class="t10-hero__tag" aria-hidden="true">Édition<br>N° 10</span>
      <div class="t10-hero__grid">
        <div class="t10-hero__copy">
          <p class="t10-kicker"><span aria-hidden="true">●</span> Tout ce qui circule, se trouve et se dit</p>
          <h1 id="t10-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t10-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t10-hero__actions">
            <a class="btn btn--solid" href="#annonces">Lire les annonces ${icon("arrow-down", { size: 18 })}</a>
            <a class="btn btn--ghost" href="#services">Trouver un service</a>
          </div>
          <p class="t10-hero__note">${esc(commune.positioning)}</p>
        </div>

        <div class="t10-stall">
          <figure class="t10-stall__poster">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 40vw", loading: "eager", fetchpriority: "high" })}
            <figcaption>${esc(captionFor(commune.hero.image, commune.motto))}<span>${esc(creditLine(commune.hero.image))}</span></figcaption>
          </figure>
          <span class="t10-stall__tape" aria-hidden="true">PHOTO DE DÉMONSTRATION</span>
          <div class="t10-ticket t10-stall__ticket">
            <p class="t10-ticket__head">Le marché en chiffres</p>
            <ul>
              ${commune.stats.slice(0, 3).map((s) => `<li><strong>${esc(s.value)}${esc(s.suffix || "")}</strong><span>${esc(s.label)}</span></li>`).join("")}
            </ul>
            <p class="t10-ticket__foot">Repères fictifs · ticket N° 0042</p>
          </div>
          <span class="t10-stall__sticker" aria-hidden="true">Ouvert<br>à tous</span>
          <span class="t10-stall__barcode" aria-hidden="true"></span>
        </div>
      </div>

      <div class="t10-marquee" aria-hidden="true">
        <div class="t10-marquee__track">
          ${[0, 1].map(() => ticker.map((t) => `<span>${esc(t)}</span><i>✳</i>`).join("")).join("")}
        </div>
      </div>
    </section>

    <section class="t10-edito" aria-labelledby="t10-edito-title">
      <div class="t10-edito__aside">
        <span class="t10-edito__n">01</span>
        <p>Le mot de la place</p>
        <span class="t10-edito__line" aria-hidden="true"></span>
      </div>
      <div class="t10-edito__body">
        <h2 id="t10-edito-title">${esc(commune.intro.title)}</h2>
        <p>${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
        ${demoNote("Éditorial et repères de démonstration.")}
      </div>
      <figure class="t10-edito__figure">
        ${image(commune.intro.image, { sizes: "(max-width: 860px) 100vw, 28vw" })}
        <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
      </figure>
    </section>

    <section class="t10-annonces" id="annonces" aria-labelledby="annonces-title">
      <div class="t10-annonces__head">
        <div>
          <p class="t10-label">02 · Annonces classées</p>
          <h2 id="annonces-title">Ce qui se dit sur la place</h2>
        </div>
        <p>Les nouvelles de la commune, classées comme des annonces. Tout est fictif, rien n'est à vendre.</p>
      </div>
      <div class="t10-annonces__grid">
        ${commune.news
          .map(
            (n, i) => `<article class="t10-ad${i === 0 ? " t10-ad--lead" : ""}">
              <div class="t10-ad__top">
                <span class="t10-ad__cat">${esc(n.category)}</span>
                <span class="t10-ad__ref">Réf. ${String(i + 1).padStart(2, "0")}-${esc(commune.slug.slice(0, 3).toUpperCase())}</span>
              </div>
              <h3>${esc(n.title)}</h3>
              <p>${esc(n.excerpt)}</p>
              <div class="t10-ad__foot">
                <time datetime="${esc(n.dateISO)}">${esc(n.date)}</time>
                <span class="t10-ad__price">Info ${icon("arrow-up-right", { size: 13 })}</span>
              </div>
            </article>`,
          )
          .join("")}
      </div>
      ${demoNote("Annonces fictives rédigées pour la démonstration.")}
    </section>

    <section class="t10-agenda" id="agenda" aria-labelledby="agenda-title">
      <div class="t10-agenda__head">
        <p class="t10-label">03 · Agenda</p>
        <h2 id="agenda-title">Les tickets à garder</h2>
        <p>Programme de démonstration. Dates, lieux et tarifs sont fictifs.</p>
      </div>
      <div class="t10-agenda__list">
        ${commune.events
          .map((e) => {
            const d = e.dateISO ? new Date(e.dateISO + "T12:00:00") : null;
            const day = d ? String(d.getDate()).padStart(2, "0") : "—";
            const month = d ? d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "") : "";
            return `<article class="t10-event">
              <div class="t10-event__date"><span>${day}</span><em>${esc(month)}</em></div>
              <div class="t10-event__cut" aria-hidden="true"></div>
              <div class="t10-event__body">
                <p class="t10-event__cat">${esc(e.category)}${e.free ? " · entrée libre" : ""}</p>
                <h3>${esc(e.title)}</h3>
                <p>${esc(e.description)}</p>
                <ul><li>${icon("clock", { size: 14 })} ${esc(e.time)}</li><li>${icon("map-pin", { size: 14 })} ${esc(e.place)}</li></ul>
              </div>
              <span class="t10-event__stub" aria-hidden="true">DÉMO</span>
            </article>`;
          })
          .join("")}
      </div>
      ${demoNote("Programme fictif de démonstration.")}
    </section>

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "04 · Étals de projets",
      title: "Ce que la commune construit",
      lead: "Chantiers, budgets et avancements affichés comme sur un étal.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "05 · Plan de la place",
      title: "Où trouver quoi",
      lead: "Carte schématique de démonstration. Positions indicatives.",
    })}

    ${serviceExplorer(commune, {
      variant: "compact",
      id: "services",
      eyebrow: "06 · Guichet",
      title: "Prendre un ticket",
      lead: "Démarches de démonstration : pièces, délais et coûts.",
      className: "t10-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t10-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
