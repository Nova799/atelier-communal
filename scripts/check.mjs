/**
 * Audit statique du dossier dist/.
 *
 * Vérifie, pour chaque page HTML générée :
 *   - les liens et ressources internes (href, src, srcset) pointent vers des fichiers existants ;
 *   - les ancres (#section) ciblent un id présent dans la page ;
 *   - chaque <img> porte un attribut alt non vide (ou aria-hidden + alt="" pour un décor) ;
 *   - exactement un <h1> par page ;
 *   - aucun id dupliqué ;
 *   - <html lang="fr">, <title> non vide et meta description présents.
 *
 * Aucune page dist/ ne doit échouer pour être livrée.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");

if (!existsSync(distDir)) {
  console.error("dist/ introuvable — lancez `npm run build` d'abord.");
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
})(distDir);

const problems = [];
const add = (file, message) => problems.push(`${relative(distDir, file)} : ${message}`);

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  if (!match) return null;
  return match[2] ?? match[3] ?? match[4] ?? "";
};

const stripHash = (url) => (url.split("#")[0] || "").split("?")[0];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const baseDir = dirname(file);

  if (!/<html[^>]*lang="fr"/i.test(html)) add(file, "lang=\"fr\" absent sur <html>");
  const title = html.match(/<title>([^<]*)<\/title>/i);
  if (!title || !title[1].trim()) add(file, "<title> absent ou vide");
  if (!/<meta[^>]*name="description"[^>]*content="[^"]{20,}"/i.test(html)) add(file, "meta description absente ou trop courte");

  // Ancres et ids
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const idSet = new Set(ids);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) add(file, `id dupliqué : #${id}`);
    seen.add(id);
  }

  // Liens et ressources internes
  const urlAttrs = [...html.matchAll(/<(?:a|link|script|img|source|use)\b[^>]*>/g)].flatMap(([tag]) => {
    const tagName = tag.match(/^<([a-z0-9-]+)/i)[1].toLowerCase();
    const attrs = ["href", "src"].map((n) => attr(tag, n));
    const srcset = attr(tag, "srcset");
    if (tagName === "a") attrs[0] = attrs[0]; // traité plus bas pour les fragments internes
    const urls = attrs.filter((u) => u != null);
    if (srcset) for (const candidate of srcset.split(",")) { const u = candidate.trim().split(/\s+/)[0]; if (u) urls.push(u); }
    return urls.map((u) => ({ tag, tagName, u }));
  });

  for (const { tag, tagName, u } of urlAttrs) {
    if (!u || u.startsWith("data:") || u.startsWith("mailto:") || u.startsWith("tel:")) continue;
    if (u.startsWith("#")) {
      if (tagName === "a" && u.length > 1 && !idSet.has(u.slice(1))) add(file, `ancre sans cible : ${u}`);
      continue;
    }
    if (/^https?:\/\//i.test(u)) continue; // ressources externes (sources, crédits) : pas de requête réseau ici
    if (u.startsWith("//")) continue;
    const path = stripHash(u);
    if (!path) continue;
    const target = u.startsWith("/") ? join(distDir, path) : resolve(baseDir, path);
    if (!existsSync(target)) add(file, `ressource introuvable : ${u}`);
    else if (statSync(target).isDirectory() && !existsSync(join(target, "index.html"))) add(file, `répertoire sans index.html : ${u}`);
  }

  // ancres vers une autre page : vérification légère (page + fragment)
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#]*)#([^"]+)"/g)) {
    const targetPage = join(distDir, m[1], "index.html");
    if (!existsSync(targetPage)) continue;
    const targetHtml = readFileSync(targetPage, "utf8");
    if (!new RegExp(`\\sid="${m[2]}"`).test(targetHtml)) add(file, `ancre sans cible : ${m[1]}#${m[2]}`);
  }

  // Images : alt présent ; vide uniquement si décor (aria-hidden="true")
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const alt = attr(tag, "alt");
    const decorative = /aria-hidden="true"/.test(tag);
    if (alt == null) add(file, `<img> sans attribut alt : ${(attr(tag, "src") || "").slice(-60)}`);
    else if (alt.trim() === "" && !decorative) add(file, `alt vide sans aria-hidden : ${(attr(tag, "src") || "").slice(-60)}`);
    else if (alt.trim() !== "" && decorative) add(file, `alt non vide sur image décorative : ${(attr(tag, "alt") || "").slice(-60)}`);
  }

  // Un seul h1
  const h1s = [...html.matchAll(/<h1\b/gi)].length;
  if (h1s !== 1) add(file, `${h1s} <h1> sur la page (attendu : 1)`);
}

console.log(`${htmlFiles.length} pages auditées`);
if (problems.length) {
  console.error(`\n${problems.length} problème(s) :`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log("✓ aucun problème détecté");
