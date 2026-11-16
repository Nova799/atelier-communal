import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { communes, site } from "../src/data/index.mjs";
import { loadTemplates } from "../src/templates/registry.mjs";
import { communePage, documentShell } from "../src/lib/page.mjs";
import { renderGallery } from "../src/pages/gallery.mjs";
import { renderSystem } from "../src/pages/system.mjs";
import { icon } from "../src/lib/icons.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const args = new Set(process.argv.slice(2));
const partial = args.has("--partial");

const t0 = performance.now();
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(path.join(dist, "t"), { recursive: true });
await fs.mkdir(path.join(dist, "assets", "styles", "templates"), { recursive: true });
await fs.mkdir(path.join(dist, "assets", "img"), { recursive: true });
await fs.mkdir(path.join(dist, "assets", "fonts"), { recursive: true });
await fs.mkdir(path.join(dist, "assets", "previews"), { recursive: true });

const templates = await loadTemplates({ strict: !partial });

/* --- vérifications de cohérence ---------------------------------------- */
const slugs = new Set();
for (const t of templates) {
  if (slugs.has(t.slug)) throw new Error(`Direction en double : ${t.slug}`);
  slugs.add(t.slug);
  if (!t.number || !t.family) throw new Error(`Métadonnées incomplètes : ${t.slug}`);
}
console.log(`→ ${templates.length} direction(s), ${communes.length} communes, ${templates.length * communes.length} pages`);

/* --- pages -------------------------------------------------------------- */
const sizes = [];
for (const template of templates) {
  for (const commune of communes) {
    const html = communePage({
      commune,
      template,
      body: template.render(commune, { templates, communes }),
      navItems: [],
    });
    const dir = path.join(dist, "t", template.slug, commune.slug);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, "index.html"), html);
    sizes.push({ template: template.slug, commune: commune.slug, bytes: Buffer.byteLength(html) });
  }
}
const totalPages = sizes.length;
const avgKb = (sizes.reduce((n, s) => n + s.bytes, 0) / sizes.length / 1024).toFixed(1);

/* --- assets ------------------------------------------------------------- */
const imgDir = path.join(root, "assets", "img");
for (const file of await fs.readdir(imgDir)) {
  if (file.endsWith(".webp")) await fs.copyFile(path.join(imgDir, file), path.join(dist, "assets", "img", file));
}
for (const file of await fs.readdir(path.join(root, "assets", "fonts"))) {
  if (file.endsWith(".woff2") || file.endsWith(".css")) await fs.copyFile(path.join(root, "assets", "fonts", file), path.join(dist, "assets", "fonts", file));
}
await fs.cp(path.join(root, "src", "styles"), path.join(dist, "assets", "styles"), { recursive: true });
await fs.copyFile(path.join(root, "src", "client", "app.js"), path.join(dist, "assets", "app.js"));
await fs.copyFile(path.join(root, "src", "client", "reflets-scene.js"), path.join(dist, "assets", "reflets-scene.js"));
/* Direction 21 — Reflets : PixiJS vendorisé en local (aucune CDN) */
await fs.mkdir(path.join(dist, "assets", "vendor"), { recursive: true });
for (const file of ["pixi.min.mjs", "pixijs-3d.min.mjs", "pixijs-3d-webgl.min.mjs"]) {
  await fs.copyFile(path.join(root, "assets", "vendor", file), path.join(dist, "assets", "vendor", file));
}
/* Direction 22 — Relief : diorama GLB généré par Blender headless */
await fs.mkdir(path.join(dist, "assets", "models"), { recursive: true });
await fs.copyFile(path.join(root, "assets", "models", "atakora-diorama.glb"), path.join(dist, "assets", "models", "atakora-diorama.glb"));
await fs.copyFile(path.join(root, "src", "client", "relief-scene.js"), path.join(dist, "assets", "relief-scene.js"));

const previewsDir = path.join(root, "assets", "previews");
let previews = new Set();
try {
  for (const f of await fs.readdir(previewsDir)) {
    if (f.endsWith(".jpg") || f.endsWith(".png") || f.endsWith(".webp")) {
      await fs.copyFile(path.join(previewsDir, f), path.join(dist, "assets", "previews", f));
      previews.add(path.parse(f).name);
    }
  }
} catch {
  previews = new Set();
}

/* --- favicon, image sociale -------------------------------------------- */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#151816"/><path d="M16 46V22l16-8 16 8v24M24 46V30h16v16" fill="none" stroke="#e9dfce" stroke-width="2.4"/><circle cx="32" cy="36" r="3.4" fill="#d6a06a"/></svg>`;
await fs.writeFile(path.join(dist, "assets", "favicon.svg"), faviconSvg);
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#151816"/><path d="M90 510V210l170-90 170 90v300M190 510V300h140v210" fill="none" stroke="#efe8d9" stroke-width="5"/><circle cx="260" cy="360" r="16" fill="#d6a06a"/><text x="520" y="290" font-family="Georgia,serif" font-size="76" fill="#f1ece2">Vingt façons de</text><text x="520" y="380" font-family="Georgia,serif" font-size="76" font-style="italic" fill="#d6a06a">raconter une commune.</text><text x="524" y="470" font-family="monospace" font-size="20" letter-spacing="3" fill="#9c9587">ATELIER COMMUNAL · BÉNIN · DÉMONSTRATION</text></svg>`;
await fs.writeFile(path.join(dist, "assets", "og-default.svg"), ogSvg);

/* --- galerie ------------------------------------------------------------ */
await fs.writeFile(path.join(dist, "index.html"), renderGallery({ templates, previews }));

/* --- design system ------------------------------------------------------ */
await fs.writeFile(path.join(dist, "system.html"), renderSystem({ templates, communes }));

/* --- 404 ---------------------------------------------------------------- */
const notFound = documentShell({
  title: "Page introuvable · Atelier communal",
  description: "Cette page n'existe pas dans la démonstration.",
  canonical: `${site.baseUrl}/404.html`,
  bodyClass: "page page--system",
  fonts: ["instrument-sans", "fraunces", "jetbrains-mono"],
  headExtra: `<link rel="stylesheet" href="/assets/styles/pages.css">`,
  noindex: true,
  themeColor: "#151816",
  body: `<div class="page-system"><main id="contenu" class="sys-404">
    <p class="gal-eyebrow"><span></span>Erreur 404</p>
    <h1>Cette page<br><em>n'existe pas.</em></h1>
    <p>Le lien est peut-être incomplet, ou la page a été déplacée. La démonstration reste accessible depuis la galerie.</p>
    <div class="sys-404__actions">
      <a class="btn btn--solid" href="/">Retour à la galerie ${icon("arrow-right", { size: 18 })}</a>
      <a class="btn btn--ghost" href="/system.html">Voir le design system</a>
    </div>
  </main></div>`,
});
await fs.writeFile(path.join(dist, "404.html"), notFound);

/* --- SEO ---------------------------------------------------------------- */
await fs.writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /t/\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`,
);
await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site.baseUrl}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>${site.baseUrl}/system.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>\n`,
);

/* --- manifeste de build ------------------------------------------------- */
const manifest = {
  generatedAt: new Date().toISOString(),
  baseUrl: site.baseUrl,
  communes: communes.map((c) => c.slug),
  templates: templates.map((t) => ({ slug: t.slug, number: t.number, name: t.name, family: t.family })),
  pages: totalPages,
  previews: [...previews],
  averagePageKb: Number(avgKb),
};
await fs.writeFile(path.join(dist, "build-manifest.json"), JSON.stringify(manifest, null, 2));

const ms = Math.round(performance.now() - t0);
console.log(`✓ build terminé en ${ms} ms`);
console.log(`  ${totalPages} pages HTML · ${avgKb} Ko en moyenne · ${previews.size} aperçus`);
console.log(`  gallery / · system /system.html · 404 /404.html`);
if (partial) console.log(`  ⚠ build partiel : ${20 - templates.length} direction(s) manquante(s)`);
