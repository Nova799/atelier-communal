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
  attractionsSection,
  cultureSection,
  mayorSection,
  contactSection,
  demoNote,
} from "../lib/components.mjs";

export const meta = templateMeta.find((t) => t.slug === "tissage");

const navItems = [
  { label: "Trame", href: "#haut" },
  { label: "Patrimoine", href: "#tourisme" },
  { label: "Culture", href: "#culture" },
  { label: "Actualités", href: "#actualites" },
  { label: "Projets", href: "#projets" },
  { label: "Carte", href: "#carte" },
  { label: "Démarches", href: "#services" },
];

const threads = [
  { label: "Mémoire", color: "var(--c-primary)" },
  { label: "Matières", color: "var(--c-accent)" },
  { label: "Gestes", color: "var(--c-deep)" },
  { label: "Transmission", color: "color-mix(in srgb, var(--c-accent) 55%, var(--c-primary))" },
];

export function render(commune, ctx) {
  return `${demoBar(commune, meta, ctx.templates, ctx.communes)}
<div class="t7" id="haut">
  <header class="t7-head" data-header>
    <div class="t7-head__weave" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="t7-head__inner">
      ${brand(commune, { sub: "Tissage · commune" })}
      <nav class="t7-nav" aria-label="Navigation principale">
        ${navItems.slice(1).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
      </nav>
      <span class="t7-head__edition">Trame 07 · ${esc(commune.department)}</span>
      ${navToggle()}
    </div>
  </header>

  <main id="contenu">
    <section class="t7-hero" aria-labelledby="t7-title">
      <div class="t7-hero__grid">
        <div class="t7-hero__copy">
          <p class="t7-kicker"><span aria-hidden="true"></span>Une commune se raconte fil par fil</p>
          <h1 id="t7-title">${esc(commune.name)}<em>${esc(commune.hero.titleAccent)}</em></h1>
          <p class="t7-hero__lead">${esc(commune.hero.lead)}</p>
          <div class="t7-hero__actions">
            <a class="btn btn--solid" href="#tourisme">Suivre la trame ${icon("arrow-down", { size: 17 })}</a>
            <a class="btn btn--ghost" href="#services">Aller au guichet</a>
          </div>
          <ul class="t7-legend" aria-label="Fils de la trame">
            ${threads.map((t) => `<li><span style="--thread:${t.color}"></span>${esc(t.label)}</li>`).join("")}
          </ul>
        </div>

        <div class="t7-loom">
          <span class="t7-loom__badge">Trame<br>07</span>
          <figure class="t7-loom__figure">
            ${image(commune.hero.image, { sizes: "(max-width: 900px) 100vw, 42vw", loading: "eager", fetchpriority: "high" })}
            <figcaption>${esc(captionFor(commune.hero.image, commune.motto))}<span>${esc(creditLine(commune.hero.image))}</span></figcaption>
          </figure>
          <div class="t7-loom__strips" aria-hidden="true">
            <span style="--s:var(--c-primary)"></span>
            <span style="--s:var(--c-accent)"></span>
            <span style="--s:var(--c-deep)"></span>
            <span style="--s:color-mix(in srgb, var(--c-accent) 45%, var(--c-primary))"></span>
            <span style="--s:var(--c-soft)"></span>
          </div>
        </div>
      </div>

      <div class="t7-hero__stats">
        ${commune.stats
          .map(
            (s, i) => `<div class="t7-stat" style="--tone:${i % 2 === 0 ? "var(--c-primary)" : "var(--c-accent)"}">
              <span class="t7-stat__n">Fil ${String(i + 1).padStart(2, "0")}</span>
              <strong>${esc(s.value)}${esc(s.suffix || "")}</strong>
              <span class="t7-stat__label">${esc(s.label)}</span>
            </div>`,
          )
          .join("")}
      </div>
    </section>

    <section class="t7-trame" aria-labelledby="trame-title">
      <div class="t7-trame__intro">
        <p class="t7-rubrique">La trame</p>
        <h2 id="trame-title">${esc(commune.intro.title)}</h2>
        <p>${esc(commune.intro.text)}</p>
        <blockquote>${esc(commune.intro.pullquote)}</blockquote>
        ${demoNote("Récit et repères de démonstration.")}
      </div>
      <div class="t7-trame__threads">
        <p class="t7-trame__label">Quatre fils pour lire la commune</p>
        <ol>
          ${threads
            .map(
              (t, i) => `<li style="--thread:${t.color}"><span class="t7-trame__n">${String(i + 1).padStart(2, "0")}</span><div><strong>${esc(t.label)}</strong><p>${esc(["Une histoire longue, transmise et débattue.", "Des matières, des savoir-faire et des lieux.", "Des gestes quotidiens qui font la ville.", "Ce qui se transmet aux générations suivantes."][i])}</p></div></li>`,
            )
            .join("")}
        </ol>
        <figure class="t7-trame__figure">
          ${image(commune.intro.image, { sizes: "(max-width: 800px) 100vw, 32vw" })}
          <figcaption>${esc(commune.intro.caption)} · ${esc(creditLine(commune.intro.image))}</figcaption>
        </figure>
      </div>
    </section>

    ${attractionsSection(commune, {
      variant: "woven",
      id: "tourisme",
      eyebrow: "Patrimoine · matières",
      title: "Des lieux qui se tissent",
      lead: "Lieux réels, descriptions et informations pratiques de démonstration.",
    })}

    ${cultureSection(commune, {
      id: "culture",
      eyebrow: "Culture · gestes",
      title: "Une culture qui se pratique",
    })}

    ${newsSection(commune, {
      variant: "editorial",
      id: "actualites",
      eyebrow: "La trame du mois",
      title: "Ce qui se noue",
      lead: "Les nouvelles de la commune, entre patrimoine, projets et vie quotidienne.",
    })}

    ${projectsSection(commune, {
      variant: "cards",
      id: "projets",
      eyebrow: "Projets · coutures",
      title: "Ce que la commune assemble",
      lead: "Chantiers, budgets et avancements de démonstration.",
    })}

    ${mapSection(commune, {
      id: "carte",
      eyebrow: "Territoire · trame",
      title: "La commune, en plan",
      lead: "Carte schématique de démonstration, sans fond officiel.",
    })}

    ${serviceExplorer(commune, {
      variant: "compact",
      id: "services",
      eyebrow: "Guichet · fils utiles",
      title: "Vos démarches",
      lead: "Démarches de démonstration, pièces et délais.",
      className: "t7-services",
    })}

    ${mayorSection(commune, { variant: "panel", id: "maire" })}

    ${contactSection(commune, { id: "contact", mapHref: "#carte" })}

    <div class="t7-rail">${communeRail(commune, meta.slug, ctx.communes)}</div>
  </main>

  ${footer(commune, meta, { navItems })}
</div>
${mobileNav(commune, navItems)}
${reportDialog(commune)}`;
}
