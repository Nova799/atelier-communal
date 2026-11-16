import { esc, cls, image, emblem, tag, progress, truncate, creditLine } from "./html.mjs";
import { icon } from "./icons.mjs";
import { mapBlock } from "./map.mjs";
import { getServices } from "../data/index.mjs";

const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function brand(commune, { href = "#haut", sub = "Portail communal" } = {}) {
  return `<a class="brand" href="${esc(href)}" aria-label="${esc(commune.name)} — retour en haut de page">
    <span class="brand__mark">${emblem(commune, { size: 38 })}</span>
    <span class="brand__text">
      <span class="brand__name">${esc(commune.name)}</span>
      <span class="brand__sub">${esc(sub)}</span>
    </span>
  </a>`;
}

export function navToggle(label = "Ouvrir le menu") {
  return `<button class="navtoggle" type="button" data-nav-open aria-haspopup="dialog" aria-controls="nav-sheet">
    <span class="navtoggle__label">Menu</span>${icon("menu", { size: 22 })}
  </button>`;
}

export function mobileNav(commune, items, { template, contactHref = "#contact" } = {}) {
  const links = items
    .map((item, i) => `<a href="${esc(item.href)}" data-nav-link><span class="navsheet__n">${String(i + 1).padStart(2, "0")}</span><span>${esc(item.label)}</span>${icon("arrow-up-right", { size: 18 })}</a>`)
    .join("");
  return `<dialog class="navsheet" id="nav-sheet" aria-labelledby="nav-sheet-title">
    <div class="navsheet__inner">
      <div class="navsheet__head">
        ${brand(commune, { href: "#haut" })}
        <button class="navsheet__close" type="button" data-nav-close aria-label="Fermer le menu">${icon("close", { size: 24 })}</button>
      </div>
      <p class="navsheet__title" id="nav-sheet-title">Sommaire</p>
      <nav class="navsheet__links" aria-label="Sommaire du site">${links}</nav>
      <div class="navsheet__foot">
        <p><strong>${esc(commune.name)}</strong><br>${esc(commune.department)} · ${esc(commune.region)}</p>
        <a class="btn btn--solid" href="${esc(contactHref)}">Nous contacter ${icon("arrow-right", { size: 18 })}</a>
        <p class="navsheet__note">Site de démonstration. Découvrez les 22 directions et les 8 communes dans la galerie.</p>
        <a class="navsheet__gallery" href="/">Galerie des 22 directions ${icon("arrow-up-right", { size: 16 })}</a>
      </div>
    </div>
  </dialog>`;
}

export function demoBar(commune, template, templates, communes) {
  return `<div class="demobar" data-demo-bar>
    <div class="demobar__inner">
      <span class="demobar__tag"><span class="demobar__dot" aria-hidden="true"></span>Démonstration</span>
      <span class="demobar__facts"><span>Contenus fictifs</span><span class="demobar__sep" aria-hidden="true">/</span><span>${String(template.number).padStart(2, "0")} · ${esc(template.name)}</span><span class="demobar__sep demobar__sep--wide" aria-hidden="true">/</span><span class="demobar__commune">${esc(commune.name)}</span></span>
      <span class="demobar__actions">
        <a href="/">Galerie</a>
        <a href="/system.html">Système</a>
        <button type="button" data-dialog-open="demo-dialog">Changer ${icon("grid", { size: 15 })}</button>
      </span>
    </div>
    ${demoDialog(commune, template, templates, communes)}
  </div>`;
}

export function demoDialog(commune, template, templates, communes) {
  const communesHtml = communes
    .map(
      (c) => `<a class="demo-pick${c.slug === commune.slug ? " is-current" : ""}" href="/t/${esc(template.slug)}/${esc(c.slug)}/"${c.slug === commune.slug ? ' aria-current="page"' : ""}>
        <span class="demo-pick__swatch" style="--s:${c.identity.primary};--a:${c.identity.accent}">${emblem(c, { size: 22 })}</span>
        <span class="demo-pick__text"><strong>${esc(c.name)}</strong><span>${esc(c.department)}</span></span>
        <span class="demo-pick__motto">${esc(c.motto)}</span>
      </a>`,
    )
    .join("");
  const templatesHtml = templates
    .map(
      (t) => `<a class="demo-pick demo-pick--template${t.slug === template.slug ? " is-current" : ""}" href="/t/${esc(t.slug)}/${esc(commune.slug)}/"${t.slug === template.slug ? ' aria-current="page"' : ""}>
        <span class="demo-pick__num">${String(t.number).padStart(2, "0")}</span>
        <span class="demo-pick__text"><strong>${esc(t.name)}</strong><span>${esc(t.tagline)}</span></span>
        <span class="demo-pick__family">${esc(t.family)}</span>
      </a>`,
    )
    .join("");
  return `<dialog class="demo-dialog" id="demo-dialog" aria-labelledby="demo-dialog-title">
    <div class="demo-dialog__inner">
      <div class="demo-dialog__head">
        <div>
          <p class="eyebrow">Galerie de démonstration</p>
          <h2 id="demo-dialog-title">Explorer les 22 directions</h2>
          <p>Même commune, autre écriture. Même architecture, autre commune.</p>
        </div>
        <button class="demo-dialog__close" type="button" data-dialog-close aria-label="Fermer">${icon("close", { size: 24 })}</button>
      </div>
      <div class="demo-dialog__cols">
        <section aria-labelledby="demo-communes-title">
          <h3 id="demo-communes-title">Les 8 communes</h3>
          <div class="demo-dialog__list">${communesHtml}</div>
        </section>
        <section aria-labelledby="demo-templates-title">
          <h3 id="demo-templates-title">Les 22 directions</h3>
          <div class="demo-dialog__list demo-dialog__list--templates">${templatesHtml}</div>
        </section>
      </div>
      <p class="demo-dialog__note">${icon("alert", { size: 16 })} Tous les contenus sont fictifs. Aucune donnée officielle, aucun logo officiel, aucun portrait réel.</p>
    </div>
  </dialog>`;
}

export function sectionHead({ eyebrow, title, lead, id, action, tone = "" }) {
  return `<header class="sec-head${tone ? ` sec-head--${tone}` : ""}">
    <div class="sec-head__main">
      ${eyebrow ? `<p class="eyebrow"><span class="eyebrow__mark" aria-hidden="true"></span>${esc(eyebrow)}</p>` : ""}
      <h2 id="${esc(id)}-title">${title}</h2>
      ${lead ? `<p class="sec-head__lead">${esc(lead)}</p>` : ""}
    </div>
    ${action || ""}
  </header>`;
}

export function demoNote(text = "Données et contenus de démonstration, sans valeur officielle.") {
  return `<p class="demonote">${icon("alert", { size: 14 })} ${esc(text)}</p>`;
}

export function statsBand(commune, { variant = "row", id = "reperes" } = {}) {
  const items = commune.stats
    .map((s, i) => {
      const numeric = /^[\d\s.,]+$/.test(s.value) && Number(s.value.replace(/\s/g, "").replace(",", ".")) > 0;
      const value = numeric
        ? `<span class="stat__value" data-count="${Number(s.value.replace(/\s/g, "").replace(",", "."))}" data-count-suffix="${esc(s.suffix || "")}">${esc(s.value)}${esc(s.suffix || "")}</span>`
        : `<span class="stat__value">${esc(s.value)}</span>`;
      return `<div class="stat" data-reveal style="--i:${i}">
        ${value}
        <span class="stat__label">${esc(s.label)}</span>
        <span class="stat__note">${esc(s.note)}</span>
      </div>`;
    })
    .join("");
  return `<div class="stats stats--${esc(variant)}" role="group" aria-label="Repères de démonstration">
    ${items}
    <p class="stats__note">${icon("alert", { size: 13 })} Repères de démonstration</p>
  </div>`;
}

export function serviceExplorer(commune, { variant = "grid", id = "services", title = "Démarches", lead, showHead = true, eyebrow = "Guichet numérique", className = "" } = {}) {
  const list = getServices(commune);
  const categories = [...new Set(list.map((s) => s.category))];
  const cards = list
    .map(
      (s, i) => `<details class="svc" data-service-card data-name="${esc(s.name.toLowerCase())}" data-category="${esc(slugify(s.category))}" data-keywords="${esc((s.short + " " + s.docs.join(" ") + " " + s.category).toLowerCase())}">
        <summary class="svc__summary">
          <span class="svc__icon">${icon(s.icon, { size: 22 })}</span>
          <span class="svc__body">
            <span class="svc__cat">${esc(s.category)}</span>
            <span class="svc__name">${esc(s.name)}</span>
            <span class="svc__short">${esc(s.short)}</span>
          </span>
          <span class="svc__side">
            ${s.online ? `<span class="svc__online">En ligne</span>` : `<span class="svc__offline">Au guichet</span>`}
            <span class="svc__plus" aria-hidden="true"></span>
          </span>
        </summary>
        <div class="svc__panel">
          <dl class="svc__facts">
            <div><dt>Délai</dt><dd>${esc(s.time)}</dd></div>
            <div><dt>Coût</dt><dd>${esc(s.cost)}</dd></div>
          </dl>
          <div class="svc__docs"><p>Pièces à prévoir</p><ul>${s.docs.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
          <p class="svc__demo">${icon("alert", { size: 13 })} Démarche de démonstration : aucune demande réelle n'est enregistrée ni transmise.</p>
        </div>
      </details>`,
    )
    .join("");

  return `<section class="section svc-section ${esc(className)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${showHead ? sectionHead({ eyebrow, title, lead: lead || `Huit démarches essentielles, leurs pièces et leurs délais. ${commune.serviceNote}`, id }) : ""}
    <div class="svc-explorer svc-explorer--${esc(variant)}" data-service-explorer>
    <div class="svc-tools">
      <label class="svc-search">
        <span class="visually-hidden">Rechercher une démarche</span>
        ${icon("search", { size: 19 })}
        <input type="search" name="q" placeholder="Rechercher : acte, permis, marché…" autocomplete="off" data-service-search>
        <button type="button" class="svc-search__clear" data-service-reset aria-label="Effacer la recherche">${icon("close", { size: 16 })}</button>
      </label>
      <div class="svc-filters" role="group" aria-label="Filtrer par domaine">
        <button type="button" class="svc-chip is-active" data-service-filter="all" aria-pressed="true">Tout</button>
        ${categories.map((c) => `<button type="button" class="svc-chip" data-service-filter="${esc(slugify(c))}" aria-pressed="false">${esc(c)}</button>`).join("")}
      </div>
    </div>
    <p class="svc-count" data-service-count aria-live="polite">${list.length} démarches affichées</p>
    <div class="svc-grid">${cards}</div>
    <p class="svc-empty" data-service-empty hidden>Aucune démarche ne correspond. Essayez « état civil », « permis » ou « social ».</p>
    <noscript><p class="svc-noscript">La recherche interactive nécessite JavaScript. Toutes les fiches restent consultables ci-dessus.</p></noscript>
    </div>
  </section>`;
}

export function reportDialog(commune) {
  const types = [
    ["voirie", "Voirie", "road"],
    ["eclairage", "Éclairage public", "lamp"],
    ["dechets", "Déchets", "trash"],
    ["eau", "Eau et assainissement", "droplet"],
    ["espaces", "Espaces publics", "tree"],
    ["autre", "Autre", "alert"],
  ];
  return `<dialog class="report" id="report-dialog" aria-labelledby="report-title">
    <div class="report__inner">
      <div class="report__head">
        <div>
          <p class="eyebrow">Signalement citoyen · démo</p>
          <h2 id="report-title">Signaler un problème</h2>
          <p>Un parcours en trois étapes pour montrer comment une commune peut organiser le signalement. Aucune donnée n'est envoyée.</p>
        </div>
        <button type="button" class="report__close" data-report-close aria-label="Fermer">${icon("close", { size: 24 })}</button>
      </div>
      <div class="report__bar" aria-hidden="true"><span data-report-bar style="--v:33%"></span></div>
      <p class="report__step-label" data-report-label aria-live="polite">Étape 1 sur 3</p>
      <form class="report__form" data-report-form novalidate>
        <fieldset class="report__step" data-report-step="1">
          <legend>Quel est le problème ?</legend>
          <div class="report__types">
            ${types
              .map(
                ([value, label, ico]) => `<label class="report__type"><input type="radio" name="type" value="${value}" required><span>${icon(ico, { size: 20 })}<b>${label}</b></span></label>`,
              )
              .join("")}
          </div>
        </fieldset>
        <fieldset class="report__step" data-report-step="2">
          <legend>Où se situe-t-il ?</legend>
          <label class="field"><span>Quartier ou arrondissement</span><input type="text" name="quartier" required placeholder="Ex. quartier central"></label>
          <label class="field"><span>Point de repère</span><textarea name="repere" rows="3" required placeholder="Décrivez l'emplacement, sans donnée personnelle sensible."></textarea></label>
          <label class="field"><span>Urgence</span>
            <select name="urgence"><option>Normale</option><option>À traiter cette semaine</option><option>Danger immédiat</option></select>
          </label>
        </fieldset>
        <fieldset class="report__step" data-report-step="3">
          <legend>Comment vous recontacter ?</legend>
          <p class="report__hint">Champs facultatifs dans cette démonstration. N'indiquez aucune donnée personnelle réelle.</p>
          <label class="field"><span>Nom (facultatif)</span><input type="text" name="nom" autocomplete="off" placeholder="Votre nom"></label>
          <label class="field"><span>Courriel (facultatif)</span><input type="email" name="email" autocomplete="off" placeholder="vous@example.org"></label>
          <label class="report__consent"><input type="checkbox" name="consent"> <span>J'ai compris qu'il s'agit d'une démonstration et qu'aucune donnée n'est transmise.</span></label>
        </fieldset>
        <div class="report__nav">
          <button type="button" class="btn btn--ghost" data-report-prev hidden>${icon("arrow-right", { size: 18, cls: "ic--flip" })} Précédent</button>
          <button type="button" class="btn btn--solid" data-report-next>Continuer ${icon("arrow-right", { size: 18 })}</button>
          <button type="submit" class="btn btn--solid" data-report-submit hidden>Envoyer (démo) ${icon("check", { size: 18 })}</button>
        </div>
      </form>
      <div class="report__success" data-report-success hidden tabindex="-1">
        <span class="report__success-icon">${icon("check", { size: 30 })}</span>
        <h3>Signalement simulé</h3>
        <p>Dans un vrai service, votre signalement serait enregistré et un accusé de réception vous serait adressé. Ici, rien n'a été transmis.</p>
        <button type="button" class="btn btn--solid" data-report-close>Fermer</button>
      </div>
      <p class="report__demo">${icon("alert", { size: 14 })} Formulaire de démonstration — aucune donnée n'est enregistrée, envoyée ou conservée.</p>
    </div>
  </dialog>`;
}

function newsCard(n, { lead = false, sizes = "(max-width: 720px) 100vw, 45vw" } = {}) {
  return `<article class="news-card${lead ? " news-card--lead" : ""}" id="news-${esc(n.id)}">
    <div class="news-card__media">${image(n.image, { sizes, loading: lead ? "eager" : "lazy", fetchpriority: lead ? "high" : undefined })}</div>
    <div class="news-card__body">
      <div class="news-card__meta"><span class="news-card__cat">${esc(n.category)}</span><time datetime="${esc(n.dateISO)}">${esc(n.date)}</time></div>
      <h3 class="news-card__title">${esc(n.title)}</h3>
      <p class="news-card__excerpt">${esc(n.excerpt)}</p>
    </div>
  </article>`;
}

export function newsSection(commune, { variant = "editorial", id = "actualites", eyebrow = "Actualités", title = "La vie de la commune", lead } = {}) {
  const featured = commune.news.find((n) => n.featured) || commune.news[0];
  const rest = commune.news.filter((n) => n !== featured);
  const leadCard = newsCard(featured, { lead: true, sizes: variant === "headline" ? "100vw" : "(max-width: 900px) 100vw, 58vw" });
  const list = rest
    .map(
      (n) => `<article class="news-item" id="news-${esc(n.id)}">
        <div class="news-item__meta"><span>${esc(n.category)}</span><time datetime="${esc(n.dateISO)}">${esc(n.date)}</time></div>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.excerpt)}</p>
      </article>`,
    )
    .join("");

  if (variant === "cards" || variant === "mosaic") {
    return `<section class="section news-section news-section--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
      ${sectionHead({ eyebrow, title, lead, id })}
      <div class="news-mosaic">${newsCard(featured, { lead: true, sizes: "(max-width: 900px) 100vw, 60vw" })}${rest.map((n) => newsCard(n, { sizes: "(max-width: 720px) 100vw, 30vw" })).join("")}</div>
      ${demoNote("Actualités fictives rédigées pour la démonstration.")}
    </section>`;
  }

  if (variant === "feed" || variant === "archive" || variant === "stack") {
    const all = [featured, ...rest];
    return `<section class="section news-section news-section--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
      ${sectionHead({ eyebrow, title, lead, id })}
      <div class="news-stack">
        ${all
          .map(
            (n, i) => `<article class="news-row" id="news-${esc(n.id)}">
              <span class="news-row__n">${String(i + 1).padStart(2, "0")}</span>
              <div class="news-row__meta"><span>${esc(n.category)}</span><time datetime="${esc(n.dateISO)}">${esc(n.date)}</time></div>
              <div class="news-row__main"><h3>${esc(n.title)}</h3><p>${esc(n.excerpt)}</p></div>
              ${i === 0 ? `<div class="news-row__media">${image(n.image, { sizes: "220px" })}</div>` : ""}
            </article>`,
          )
          .join("")}
      </div>
      ${demoNote("Actualités fictives rédigées pour la démonstration.")}
    </section>`;
  }

  if (variant === "headline") {
    return `<section class="section news-section news-section--headline" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
      <div class="news-headline">
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h2 id="${esc(id)}-title">${esc(featured.title)}</h2>
        <p class="news-headline__lead">${esc(featured.excerpt)}</p>
        <p class="news-headline__meta"><span>${esc(featured.category)}</span> · <time datetime="${esc(featured.dateISO)}">${esc(featured.date)}</time></p>
        <div class="news-headline__media">${image(featured.image, { sizes: "100vw", loading: "lazy" })}</div>
      </div>
      <div class="news-headline__list">${list}</div>
      ${demoNote("Actualités fictives rédigées pour la démonstration.")}
    </section>`;
  }

  return `<section class="section news-section news-section--editorial" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="news-editorial">
      ${leadCard}
      <div class="news-editorial__list">${list}</div>
    </div>
    ${demoNote("Actualités fictives rédigées pour la démonstration.")}
  </section>`;
}

export function eventsSection(commune, { variant = "agenda", id = "agenda", eyebrow = "Agenda", title = "Les prochains rendez-vous", lead } = {}) {
  const events = commune.events
    .map((e, i) => {
      const d = e.dateISO ? new Date(e.dateISO + "T12:00:00") : null;
      const day = d ? String(d.getDate()).padStart(2, "0") : "—";
      const month = d ? d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "") : "";
      return `<article class="event" data-reveal style="--i:${i}">
        <div class="event__date"><span class="event__day">${day}</span><span class="event__month">${esc(month)}</span></div>
        <div class="event__body">
          <div class="event__meta"><span>${esc(e.category)}</span>${e.free ? `<span class="event__free">Entrée libre</span>` : ""}</div>
          <h3>${esc(e.title)}</h3>
          <p>${esc(e.description)}</p>
          <ul class="event__facts">
            <li>${icon("calendar", { size: 15 })} ${esc(e.date)} · ${esc(e.time)}</li>
            <li>${icon("map-pin", { size: 15 })} ${esc(e.place)}</li>
          </ul>
        </div>
      </article>`;
    })
    .join("");
  return `<section class="section events events--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="events__list">${events}</div>
    ${demoNote("Programme fictif de démonstration ; les dates ne correspondent à aucun événement réel.")}
  </section>`;
}

export function projectsSection(commune, { variant = "cards", id = "projets", eyebrow = "Investir", title = "Projets et chantiers", lead, limit } = {}) {
  const projects = limit ? commune.projects.slice(0, limit) : commune.projects;
  const statusTone = (s) => (s === "Livré" ? "success" : s === "En cours" ? "warning" : "neutral");
  if (variant === "table") {
    return `<section class="section projects projects--table" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
      ${sectionHead({ eyebrow, title, lead, id })}
      <div class="table-wrap">
        <table class="table">
          <caption class="visually-hidden">Projets communaux de démonstration</caption>
          <thead><tr><th scope="col">Projet</th><th scope="col">Secteur</th><th scope="col">Quartier</th><th scope="col">Budget</th><th scope="col">Avancement</th><th scope="col">Statut</th></tr></thead>
          <tbody>${projects
            .map(
              (p) => `<tr><th scope="row">${esc(p.title)}</th><td>${esc(p.sector)}</td><td>${esc(p.quarter)}</td><td class="num">${esc(p.budget)}</td><td><div class="table__progress">${progress(p.progress, `Avancement : ${p.title}`)}<span>${p.progress}%</span></div></td><td>${tag(p.status, statusTone(p.status))}</td></tr>`,
            )
            .join("")}</tbody>
        </table>
      </div>
      ${demoNote("Projets, budgets et avancements fictifs.")}
    </section>`;
  }
  if (variant === "dossier" || variant === "board") {
    return `<section class="section projects projects--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
      ${sectionHead({ eyebrow, title, lead, id })}
      <div class="projects__rows">
        ${projects
          .map(
            (p, i) => `<article class="project-row" data-reveal style="--i:${i}">
              <span class="project-row__n">${String(i + 1).padStart(2, "0")}</span>
              <div class="project-row__main">
                <div class="project-row__top"><span class="project-row__sector">${esc(p.sector)}</span>${tag(p.status, statusTone(p.status))}</div>
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.description)}</p>
                <p class="project-row__place">${icon("map-pin", { size: 14 })} ${esc(p.quarter)}</p>
              </div>
              <div class="project-row__data">
                <span class="project-row__budget">${esc(p.budget)}</span>
                <span class="project-row__pct">${p.progress}%</span>
                ${progress(p.progress, `Avancement : ${p.title}`)}
              </div>
            </article>`,
          )
          .join("")}
      </div>
      ${demoNote("Projets, budgets et avancements fictifs.")}
    </section>`;
  }
  return `<section class="section projects projects--cards" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="projects__grid">
      ${projects
        .map(
          (p, i) => `<article class="project" data-reveal style="--i:${i}">
            <div class="project__media">${image(p.image, { sizes: "(max-width: 720px) 100vw, 45vw" })}</div>
            <div class="project__body">
              <div class="project__meta"><span>${esc(p.sector)}</span>${tag(p.status, statusTone(p.status))}</div>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.description)}</p>
              <dl class="project__facts"><div><dt>Budget</dt><dd>${esc(p.budget)}</dd></div><div><dt>Lieu</dt><dd>${esc(p.quarter)}</dd></div></dl>
              <div class="project__progress">${progress(p.progress, `Avancement : ${p.title}`)}<span>${p.progress}%</span></div>
            </div>
          </article>`,
        )
        .join("")}
    </div>
    ${demoNote("Projets, budgets et avancements fictifs.")}
  </section>`;
}

export function budgetSection(commune, { variant = "bars", id = "budget", eyebrow = "Finances", title = "Budget communal", lead } = {}) {
  const b = commune.budget;
  const rows = b.breakdown
    .map(
      (r, i) => `<li class="budget-row" data-reveal style="--i:${i}">
        <span class="budget-row__label">${esc(r.label)}</span>
        <span class="budget-row__bar"><span style="--pct:${r.pct}%"></span></span>
        <span class="budget-row__val">${String(r.value).replace(".", ",")} <small>Md</small></span>
        <span class="budget-row__pct">${r.pct}%</span>
      </li>`,
    )
    .join("");
  return `<section class="section budget budget--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="budget__panel">
      <div class="budget__totals">
        <div class="budget__total"><span class="budget__total-label">Budget ${esc(b.year)}</span><strong>${esc(b.total)}</strong><span>${esc(b.unit)}</span></div>
        <div class="budget__split">
          <div><span>Fonctionnement</span><strong>${esc(b.operating)}</strong></div>
          <div><span>Investissement</span><strong>${esc(b.investment)}</strong></div>
        </div>
      </div>
      <ul class="budget__rows">${rows}</ul>
    </div>
    ${demoNote(b.note)}
  </section>`;
}

export function transparencySection(commune, { variant = "table", id = "transparence", eyebrow = "Transparence", title = "Marchés et documents", lead } = {}) {
  const markets = commune.markets
    .map(
      (m) => `<tr><td class="mono">${esc(m.ref)}</td><th scope="row">${esc(m.title)}</th><td>${esc(m.type)}</td><td class="num">${esc(m.amount)}</td><td class="mono">${esc(m.date)}</td><td>${tag(m.status, m.status === "Attribué" ? "success" : "warning")}</td></tr>`,
    )
    .join("");
  const docs = commune.documents
    .map(
      (d, i) => `<li class="doc"><span class="doc__n">${String(i + 1).padStart(2, "0")}</span><span class="doc__icon">${icon("file", { size: 20 })}</span><span class="doc__main"><strong>${esc(d.title)}</strong><span>${esc(d.type)} · ${esc(d.size)} · ${esc(d.date)}</span></span><span class="doc__badge">Démo</span></li>`,
    )
    .join("");
  return `<section class="section transparence transparence--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="transparence__grid">
      <div class="transparence__markets">
        <div class="table-wrap">
          <table class="table">
            <caption>Marchés de démonstration</caption>
            <thead><tr><th scope="col">Réf.</th><th scope="col">Objet</th><th scope="col">Type</th><th scope="col">Montant</th><th scope="col">Date</th><th scope="col">Statut</th></tr></thead>
            <tbody>${markets}</tbody>
          </table>
        </div>
      </div>
      <div class="transparence__docs">
        <h3>Documents publics</h3>
        <ul class="docs">${docs}</ul>
        <p class="transparence__note">${icon("alert", { size: 14 })} Les documents ne sont pas téléchargeables : la démonstration ne contient aucun fichier administratif officiel.</p>
      </div>
    </div>
    ${demoNote("Références de marchés et documents fictifs, sans valeur contractuelle.")}
  </section>`;
}

export function historySection(commune, { variant = "timeline", id = "histoire", eyebrow = "Histoire", title = "Une histoire longue", lead } = {}) {
  return `<section class="section history history--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <ol class="history__list">
      ${commune.history
        .map(
          (h, i) => `<li class="history__item" data-reveal style="--i:${i}">
            <span class="history__year">${esc(h.year)}</span>
            <span class="history__dot" aria-hidden="true"></span>
            <div class="history__body"><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div>
          </li>`,
        )
        .join("")}
    </ol>
    ${demoNote("Repères historiques simplifiés et reformulés pour la démonstration ; ils ne remplacent pas un travail d'historiens.")}
  </section>`;
}

export function mapSection(commune, { id = "carte", eyebrow = "Géographie", title = "La commune en un regard", lead, compact = false } = {}) {
  return `<section class="section mapsection" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    ${mapBlock(commune, { compact })}
  </section>`;
}

export function mayorSection(commune, { variant = "quote", id = "maire" } = {}) {
  return `<section class="section mayor mayor--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    <div class="mayor__inner">
      <div class="mayor__mark">${icon("quote", { size: 42 })}</div>
      <div class="mayor__main">
        <p class="eyebrow">Le mot du maire</p>
        <h2 id="${esc(id)}-title" class="mayor__quote">${esc(commune.mayor.quote)}</h2>
        <p class="mayor__text">${esc(commune.mayor.text)}</p>
        <p class="mayor__signature">${esc(commune.mayor.signature)}</p>
        <p class="mayor__note">${icon("alert", { size: 13 })} ${esc(commune.mayor.note)}</p>
      </div>
      <div class="mayor__emblem" aria-hidden="true">${emblem(commune, { size: 120 })}</div>
    </div>
  </section>`;
}

export function contactSection(commune, { variant = "panel", id = "contact", mapHref = "#carte" } = {}) {
  return `<section class="section contact contact--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    <div class="contact__inner">
      <div class="contact__main">
        <p class="eyebrow">Nous joindre</p>
        <h2 id="${esc(id)}-title">Une question, une démarche, une idée ?</h2>
        <p class="contact__lead">Les coordonnées ci-dessous sont fictives et servent uniquement à montrer l'organisation d'un portail communal.</p>
        <div class="contact__actions">
          <button class="btn btn--solid" type="button" data-report-open>Signaler un problème ${icon("arrow-right", { size: 18 })}</button>
          <a class="btn btn--ghost" href="${esc(mapHref)}">Voir la carte ${icon("map-pin", { size: 18 })}</a>
        </div>
      </div>
      <div class="contact__details">
        <dl>
          <div><dt>${icon("map-pin", { size: 17 })} Adresse</dt><dd>${esc(commune.contacts.address)}<span class="demo-inline">Démo</span></dd></div>
          <div><dt>${icon("phone", { size: 17 })} Téléphone</dt><dd>${esc(commune.contacts.phone)}</dd></div>
          <div><dt>${icon("mail", { size: 17 })} Courriel</dt><dd>${esc(commune.contacts.email)}</dd></div>
          <div><dt>${icon("clock", { size: 17 })} Horaires</dt><dd>${esc(commune.contacts.hours)}</dd></div>
          <div><dt>${icon("building", { size: 17 })} Organisation</dt><dd>${esc(commune.contacts.arrondissements)} · ${esc(commune.contacts.quartiers)}</dd></div>
        </dl>
      </div>
    </div>
    ${demoNote("Coordonnées, adresse électronique et numéro de téléphone de démonstration.")}
  </section>`;
}

export function faqSection(commune, { id = "faq", eyebrow = "Questions fréquentes", title = "Vous vous demandez…" } = {}) {
  return `<section class="section faq" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, id })}
    <div class="faq__list">
      ${commune.faq
        .map(
          (f, i) => `<details class="faq__item"${i === 0 ? " open" : ""}><summary>${esc(f.q)}<span class="faq__plus" aria-hidden="true"></span></summary><div class="faq__a"><p>${esc(f.a)}</p></div></details>`,
        )
        .join("")}
    </div>
  </section>`;
}

export function attractionsSection(commune, { variant = "cards", id = "tourisme", eyebrow = "Découvrir", title = "Lieux et patrimoine", lead } = {}) {
  return `<section class="section attractions attractions--${esc(variant)}" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, lead, id })}
    <div class="attractions__grid">
      ${commune.attractions
        .map(
          (a, i) => `<article class="attraction" data-reveal style="--i:${i}">
            <div class="attraction__media">${image(a.image, { sizes: "(max-width: 720px) 100vw, 45vw" })}</div>
            <div class="attraction__body">
              <div class="attraction__meta"><span>${esc(a.type)}</span><span>${esc(a.duration)}</span></div>
              <h3>${esc(a.name)}</h3>
              <p>${esc(a.text)}</p>
              <p class="attraction__place">${icon("map-pin", { size: 14 })} ${esc(a.distance)}</p>
            </div>
          </article>`,
        )
        .join("")}
    </div>
    ${demoNote("Lieux réels, descriptions et informations pratiques de démonstration.")}
  </section>`;
}

export function economySection(commune, { id = "economie", eyebrow = "Économie", title = "Ce qui fait vivre la commune" } = {}) {
  return `<section class="section economy" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, id })}
    <div class="economy__inner">
      <p class="economy__text">${esc(commune.economy.text)}</p>
      <ul class="economy__sectors" aria-label="Secteurs d'activité de démonstration">
        ${commune.economy.sectors
          .map(
            (s, i) => `<li data-reveal style="--i:${i}"><span class="economy__label">${esc(s.name)}</span><span class="economy__track"><span style="--pct:${s.share}%"></span></span><span class="economy__val">${s.share}%</span></li>`,
          )
          .join("")}
      </ul>
    </div>
    ${demoNote("Répartition indicative de démonstration, sans valeur statistique.")}
  </section>`;
}

export function cultureSection(commune, { id = "culture", eyebrow = "Culture", title = "Une culture vivante" } = {}) {
  return `<section class="section culture" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    <div class="culture__inner">
      <div class="culture__main">
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h2 id="${esc(id)}-title">${esc(title)}</h2>
        <p>${esc(commune.culture.text)}</p>
      </div>
      <ul class="culture__tags" aria-label="Éléments culturels">
        ${commune.culture.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
      </ul>
    </div>
    ${demoNote("Contenus culturels de démonstration, à valider avec les acteurs et institutions concernés.")}
  </section>`;
}

export function youthSection(commune, { id = "jeunesse", eyebrow = "Jeunesse", title = "Une place pour les jeunes" } = {}) {
  return `<section class="section youth" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, id })}
    <div class="youth__inner">
      <p>${esc(commune.youth.text)}</p>
      <ul>${commune.youth.programs.map((p, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span>${esc(p)}</li>`).join("")}</ul>
    </div>
    ${demoNote("Programmes de démonstration, sans inscription réelle.")}
  </section>`;
}

export function gastronomySection(commune, { id = "gastronomie", eyebrow = "À table", title = "Saveurs locales" } = {}) {
  return `<section class="section gastronomy" id="${esc(id)}" aria-labelledby="${esc(id)}-title">
    ${sectionHead({ eyebrow, title, id })}
    <ul class="gastronomy__list">
      ${commune.gastronomy
        .map((g, i) => `<li data-reveal style="--i:${i}"><span class="gastronomy__n">${String(i + 1).padStart(2, "0")}</span><div><h3>${esc(g.name)}</h3><p>${esc(g.text)}</p></div></li>`)
        .join("")}
    </ul>
    <p class="gastronomy__note">${icon("alert", { size: 13 })} Sélection culinaire de démonstration.</p>
  </section>`;
}

export function communeRail(commune, templateSlug, communes) {
  return `<nav class="commune-rail" aria-label="Voir la même direction pour une autre commune">
    <span class="commune-rail__label">${icon("grid", { size: 14 })} Une direction, huit communes</span>
    <div class="commune-rail__list">
      ${communes
        .map(
          (c) => `<a href="/t/${esc(templateSlug)}/${esc(c.slug)}/" class="commune-rail__item${c.slug === commune.slug ? " is-current" : ""}"${c.slug === commune.slug ? ' aria-current="page"' : ""}><span class="commune-rail__dot" style="--d:${c.identity.primary};--a:${c.identity.accent}"></span>${esc(c.name)}</a>`,
        )
        .join("")}
    </div>
  </nav>`;
}

export function footer(commune, template, { navItems = [] } = {}) {
  const nav = navItems.map((i) => `<a href="${esc(i.href)}">${esc(i.label)}</a>`).join("");
  return `<footer class="footer" id="pied">
    <div class="footer__top">
      <div class="footer__brand">
        <span class="footer__mark">${emblem(commune, { size: 48 })}</span>
        <p class="footer__name">${esc(commune.name)}</p>
        <p class="footer__meta">${esc(commune.department)} · ${esc(commune.region)}</p>
        <p class="footer__motto">${esc(commune.motto)}</p>
      </div>
      <div class="footer__col">
        <h2>Contact</h2>
        <p>${esc(commune.contacts.address)}</p>
        <p>${esc(commune.contacts.phone)}<br>${esc(commune.contacts.email)}</p>
        <p class="footer__hours">${esc(commune.contacts.hours)}</p>
      </div>
      <div class="footer__col">
        <h2>Le site</h2>
        <nav class="footer__nav" aria-label="Liens de pied de page">${nav}</nav>
      </div>
      <div class="footer__col footer__col--demo">
        <h2>Démonstration</h2>
        <p>${esc(commune.name)} est ici une <strong>commune de démonstration</strong>. Les textes, chiffres, coordonnées, projets et identités visuelles sont fictifs.</p>
        <p>Aucun logo officiel, aucun portrait réel, aucune donnée administrative authentique n'est utilisé.</p>
        <p class="footer__links"><a href="/">Les 22 directions</a><a href="/system.html">Design system</a><a href="/system.html#credits">Crédits photo</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>Maquette de démonstration · ${esc(template.name)} · ${new Date().getFullYear()}</p>
      <p>${icon("alert", { size: 13 })} Contenus fictifs — ne pas utiliser comme source officielle.</p>
      <a class="footer__top-link" href="#haut">Haut de page ${icon("arrow-right", { size: 15, cls: "ic--up" })}</a>
    </div>
  </footer>`;
}

export function photoCredits(images) {
  return `<ul class="credits-list">${Object.entries(images)
    .sort((a, b) => a[1].credit.localeCompare(b[1].credit))
    .map(
      ([key, v]) => `<li><span class="credits-list__title">${esc(v.caption || key)}</span><span class="credits-list__credit">${esc(creditLine(key))}</span>${v.source ? `<a href="${esc(v.source)}" rel="noopener">Source</a>` : ""}</li>`,
    )
    .join("")}</ul>`;
}

export const helpers = { slugify, image, emblem, tag, progress, truncate };
