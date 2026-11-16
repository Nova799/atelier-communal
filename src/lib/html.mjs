import { imageLibrary } from "../data/index.mjs";
import { icon } from "./icons.mjs";

/** Échappement HTML systématique des chaînes de contenu. */
export function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Attributs à partir d'un objet, en ignorant les valeurs vides. */
export function attrs(obj = {}) {
  return Object.entries(obj)
    .filter(([, v]) => v !== false && v !== null && v !== undefined && v !== "")
    .map(([k, v]) => (v === true ? k : `${k}="${esc(v)}"`))
    .join(" ");
}

export function cls(...names) {
  return names.flat().filter(Boolean).join(" ");
}

export function classes(cond, name) {
  return cond ? name : "";
}

/**
 * Image responsive depuis la bibliothèque locale.
 * Charge la bonne taille, réserve les dimensions et affiche la teinte dominante.
 */
export function image(name, opts = {}) {
  const item = imageLibrary[name];
  if (!item) throw new Error(`Image inconnue: ${name}`);
  const {
    alt = item.alt,
    sizes = "(max-width: 720px) 100vw, 50vw",
    loading = "lazy",
    fetchpriority,
    className = "",
    width,
    height,
    decorative = false,
    style = "",
  } = opts;
  const sorted = [...item.sources].sort((a, b) => a.w - b.w);
  const fallback = sorted.find((s) => s.w >= 1280) || sorted[sorted.length - 1];
  const srcset = sorted.map((s) => `${s.file} ${s.w}w`).join(", ");
  const w = width || fallback.w;
  const h = height || Math.round((fallback.h / fallback.w) * w);
  return `<img src="${fallback.file}" srcset="${srcset}" sizes="${esc(sizes)}" width="${w}" height="${h}" alt="${decorative ? "" : esc(alt)}" ${decorative ? 'aria-hidden="true"' : ""} loading="${loading}" decoding="async" ${fetchpriority ? `fetchpriority="${fetchpriority}"` : ""} class="${esc(className)}" style="background-color:${item.tint};${style}">`;
}

export function imageData(name) {
  const item = imageLibrary[name];
  if (!item) throw new Error(`Image inconnue: ${name}`);
  const sorted = [...item.sources].sort((a, b) => a.w - b.w);
  const hero = sorted.find((s) => s.w >= 1280) || sorted[sorted.length - 1];
  return {
    ...item,
    src: hero.file,
    srcset: sorted.map((s) => `${s.file} ${s.w}w`).join(", "),
    width: hero.w,
    height: hero.h,
  };
}

export function creditLine(name) {
  const item = imageLibrary[name];
  if (!item) return "";
  const author = item.credit.replace(/\s+/g, " ").trim();
  return `${author} — ${item.license}`;
}

export function captionFor(name, fallback = "") {
  const item = imageLibrary[name];
  if (!item) return fallback;
  return item.caption || item.alt || fallback;
}

/** Emblème géométrique de démonstration, propre à chaque commune. */
export function emblem(commune, { size = 40, labelled = false } = {}) {
  const motifs = {
    waves: '<path d="M8 34c6-8 12 8 18 0s12 8 18 0" /><path d="M8 44c6-8 12 8 18 0s12 8 18 0" opacity=".55"/><circle cx="27" cy="17" r="5" fill="var(--c-accent,#e0a526)" stroke="none"/>',
    arch: '<path d="M14 48V26a13 13 0 0 1 26 0v22"/><path d="M21 48V28a6 6 0 0 1 12 0v20" opacity=".55"/><path d="M9 48h36" />',
    crossroads: '<path d="M27 8v38M8 27h38"/><circle cx="27" cy="27" r="7" fill="var(--c-accent,#c97b3c)" stroke="none"/><path d="m14 14 26 26M40 14 14 40" opacity=".35"/>',
    pyramid: '<path d="M8 48h38L27 10z"/><path d="M18 48l9-22 9 22" opacity=".55"/><path d="M8 48h38" /><circle cx="27" cy="20" r="2.6" fill="var(--c-accent,#c9a227)" stroke="none"/>',
    baobab: '<path d="M27 48V27M27 27 15 15M27 27l12-12M27 27l5-14M27 30l-9 4M27 30l10 3"/><circle cx="27" cy="27" r="4" fill="var(--c-accent,#e4b33c)" stroke="none"/><path d="M18 48h18"/>',
    mountains: '<path d="M6 46 20 16l9 19 6-9 13 20z"/><path d="m16 29 4-7 4 9" opacity=".55"/><circle cx="39" cy="15" r="4" fill="var(--c-accent,#3d6b4f)" stroke="none"/>',
    spear: '<path d="M27 48V14M18 22l9-12 9 12M21 30h12M21 38h12"/><circle cx="27" cy="43" r="3" fill="var(--c-accent,#e0b25a)" stroke="none"/>',
    pirogue: '<path d="M8 30c6 12 32 12 38 0-5 3-12 4-19 4s-14-1-19-4Z"/><path d="M27 8v22M27 8l9 8-9 6"/><path d="M6 40c7-3 14 3 21 0s14 3 21 0" opacity=".55"/>',
  };
  const art = motifs[commune.identity.motif] || motifs.waves;
  const label = labelled ? `role="img" aria-label="Emblème de démonstration de ${esc(commune.name)}"` : 'aria-hidden="true"';
  return `<svg class="emblem" width="${size}" height="${size}" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" ${label}>${art}</svg>`;
}

export function link(label, href, opts = {}) {
  const { className = "", iconName, ariaLabel, current = false } = opts;
  return `<a class="${esc(className)}" href="${esc(href)}"${ariaLabel ? ` aria-label="${esc(ariaLabel)}"` : ""}${current ? ' aria-current="page"' : ""}>${iconName ? icon(iconName, { size: 18 }) : ""}<span>${esc(label)}</span></a>`;
}

export function tag(label, tone = "") {
  return `<span class="tag${tone ? ` tag--${tone}` : ""}">${esc(label)}</span>`;
}

export function progress(value, label = "Avancement") {
  const v = Math.max(0, Math.min(100, Number(value)));
  return `<div class="progress" role="progressbar" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(label)}"><span class="progress__bar" style="--v:${v}%"></span></div>`;
}

export function truncate(text, n = 155) {
  const s = String(text).replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n - 1).replace(/[ ,;:.]+$/, "") + "…" : s;
}
