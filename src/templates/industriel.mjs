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
  mapSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "industriel");

const navItems = [
  { label: "Horizon", href: "#haut" },
  { label: "Repères", href: "#reperes" },
  { label: "Projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
  { label: "Carte", href: "#carte" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const statusTone = (s) => (s === "Livré" ? "success" : s === "En cours" ? "warning" : "neutral");

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t11" id="haut">
  <header class="t11-head" data-header>
    <div class="t11-head__inner">
      ${brand(commune, { sub: "Horizon · portail communal" })}
      <nav class="t11-nav" aria-label="Navigation principale">
        ${navItems.slice(1, 6).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="t11-head__cta" href="#services">Démarches ${icon("arrow-up-right", { size: 15 })}</a>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t11-hero" aria-labelledby="t11-title">
      <div class="t11-hero__media" aria-hidden="true">
        ${image(commune.hero.image, { sizes: "100vw", loading: "eager", fetchpriority: "high" })}
      </div>
      <div class="t11-hero__veil" aria-hidden="true"></div>
      <span class="t11-hero__frame" aria-hidden="true"></span>
      <div class="t11-hero__content">
        <p class="t11-hero__eyebrow"><span>11</span> Horizon · ${esc(commune.department)}</p>
        <h1 id="t11-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
        <p class="t11-hero__lead">${esc(commune.hero.lead)}</p>
        <div class="t11-hero__actions">
          <a class="t11-hero__scroll" href="#reperes"><span>Descendre</span> ${icon("arrow-down", { size: 18 })}</a>
          <a class="t11-hero__link" href="#services">Aller au guichet ${icon("arrow-up-right", { size: 15 })}</a>
        </div>
      </div>
      <div class="t11-hero__foot">
        <span>${esc(captionFor(commune.hero.image, commune.motto))} · ${esc(creditLine(commune.hero.image))}</span>
        <span>${esc(commune.motto)}</span>
      </div>
    </section>

    <section class="t11-breath" id="reperes" aria-labelledby="reperes-title">
      <p class="t11-overline">Repères · respiration</p>
      <h2 id="reperes-title">${esc(commune.intro.title)}</h2>
      <p class="t11-breath__lead">${esc(commune.intro.text)}</p>
      <blockquote>${esc(commune.intro.pullquote)}</blockquote>
      ${demoNote("Récit et repères de démonstration.")}
      <div class="t11-stats" role="group" aria-label="Repères de démonstration">
        ${commune.stats
          .map(
            (s, i) => `<div class="t11-stat" data-reveal style="--i:${i}">
              <span class="t11-stat__n">${String(i + 1).padStart(2, "0")}</span>
              <strong>${esc(s.value)}${esc(s.suffix || "")}</strong>
              <span class="t11-stat__label">${esc(s.label)}</span>
              <span class="t11-stat__note">${esc(s.note)}</span>
            </div>`,
          )
          .join("")}
      </div>
    </section>

    <figure class="t11-panel">
      ${image(commune.intro.image, { sizes: "100vw" })}
      <div class="t11-panel__veil" aria-hidden="true"></div>
      <figcaption>
        <p>${esc(commune.intro.pullquote)}</p>
        <span>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</span>
      </figcaption>
    </figure>

    <section class="t11-projects" id="projets" aria-labelledby="projets-title">
      <header class="t11-projects__head">
        <div>
          <p class="t11-overline">Projets · traversée</p>
          <h2 id="projets-title">Ce que la commune ouvre</h2>
        </div>
        <p>Chantiers, budgets et avancements de démonstration. Les montants ne sont pas contractuels.</p>
      </header>
      <div class="t11-projects__list">
        ${commune.projects
          .map(
            (p, i) => `<article class="t11-project">
              <figure class="t11-project__media">
                ${image(p.image, { sizes: "(max-width: 900px) 100vw, 56vw" })}
              </figure>
              <div class="t11-project__body">
                <div class="t11-project__meta"><span class="t11-project__n">${String(i + 1).padStart(2, "0")}</span><span>${esc(p.sector)}</span><span class="tag tag--${statusTone(p.status)}">${esc(p.status)}</span></div>
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.description)}</p>
                <dl class="t11-project__facts">
                  <div><dt>Budget</dt><dd>${esc(p.budget)}</dd></div>
                  <div><dt>Lieu</dt><dd>${esc(p.quarter)}</dd></div>
                  <div><dt>Avancement</dt><dd>${p.progress} %</dd></div>
                </dl>
                <div class="t11-project__bar" role="progressbar" aria-valuenow="${p.progress}" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement : ${esc(p.title)}"><span style="--v:${p.progress}%"></span></div>
              </div>
            </article>`,
          )
          .join("")}
      </div>
      ${demoNote("Projets, budgets et avancements fictifs.")}
    </section>

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "Actualités · horizon",
      title: "Ce qui advient",
      lead: "La vie de la commune, sans urgence artificielle.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire",
      title: "La commune, à hauteur de regard",
      lead: "Carte schématique de démonstration. Aucun fond de carte officiel.",
    })}

    ${serviceExplorer(commune, {
      variant: "compact",
      id: "services",
      eyebrow: "Guichet",
      title: "Ce que vous pouvez faire",
      lead: "Des démarches de démonstration, avec leurs pièces et leurs délais.",
      className: "t11-services",
    })}

    ${mayorSection(commune, { variant: "quote", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t11-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
