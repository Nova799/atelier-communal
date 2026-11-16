/**
 * Passe visuelle automatisée (Playwright/Chromium).
 *
 *   node scripts/screenshot.mjs            — contrôle fonctionnel sur les 176 pages (×5 viewports)
 *   node scripts/screenshot.mjs --shots    — idem + capture PNG de chaque direction au viewport desktop
 *
 * Pour chaque page et chaque viewport cible :
 *   - la largeur du document ne doit pas dépasser le viewport (aucun défilement horizontal) ;
 *   - aucune erreur console / pageerror ;
 *   - aucune réponse HTTP >= 400 ;
 *   - exactement un <h1> ;
 *   - toutes les images chargées (naturalWidth > 0).
 *
 * Sortie : résumé JSON + rapport sur la sortie standard ; code 1 si un échec est détecté.
 */
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { templateMeta } from "../src/templates/meta.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Le projet est volontairement sans dépendance : playwright-chromium est résolu
// depuis le module global si le module local est absent.
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright-chromium"));
} catch {
  const globalRoot = execFileSync("npm", ["root", "-g"]).toString().trim();
  ({ chromium } = require(join(globalRoot, "playwright-chromium")));
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const args = new Set(process.argv.slice(2));
const wantShots = args.has("--shots");

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablette", width: 768, height: 1024 },
  { name: "portable", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "large", width: 1920, height: 1080 },
];

const COMMUNES = ["cotonou", "porto-novo", "ouidah", "abomey", "parakou", "natitingou", "nikki", "so-ava"];
const PAGES = ["/", "/system.html", ...templateMeta.flatMap((t) => COMMUNES.map((c) => `/t/${t.slug}/${c}/`))];

if (wantShots) mkdirSync(join(root, "assets/previews/full"), { recursive: true });

const failures = [];
let checked = 0;

const browser = await chromium.launch({ headless: true });
const concurrency = 8;
let index = 0;

async function worker() {
  while (index < PAGES.length * VIEWPORTS.length) {
    const task = index++;
    const pagePath = PAGES[Math.floor(task / VIEWPORTS.length)];
    const viewport = VIEWPORTS[task % VIEWPORTS.length];
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, locale: "fr-FR" });
    const page = await context.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(e.message));
    const badResponses = [];
    page.on("response", (r) => r.status() >= 400 && badResponses.push(`${r.status()} ${r.url()}`));
    try {
      await page.goto(BASE + pagePath, { waitUntil: "load", timeout: 20000 });
      await page.waitForTimeout(250);
      const metrics = await page.evaluate(async () => {
        document.querySelectorAll("img").forEach((img) => { img.loading = "eager"; });
        document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
        await Promise.all([...document.images].map((img) => img.complete ? null : new Promise((done) => { img.onload = img.onerror = done; })));
        await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
        return {
          docWidth: document.documentElement.scrollWidth,
          viewportWidth: window.innerWidth,
          h1s: document.querySelectorAll("h1").length,
          brokenImages: [...document.images].filter((img) => img.naturalWidth === 0).map((img) => img.currentSrc.split("/").pop()),
        };
      });
      const problems = [];
      if (metrics.docWidth > metrics.viewportWidth + 1) problems.push(`défilement horizontal (${metrics.docWidth}px pour ${metrics.viewportWidth}px)`);
      if (metrics.h1s !== 1) problems.push(`${metrics.h1s} <h1>`);
      if (metrics.brokenImages.length) problems.push(`${metrics.brokenImages.length} image(s) non chargée(s) : ${metrics.brokenImages.slice(0, 3).join(", ")}`);
      for (const err of errors) problems.push(`console : ${err}`);
      for (const bad of badResponses) problems.push(`HTTP ${bad}`);
      if (problems.length) failures.push({ page: pagePath, viewport: viewport.name, problems });
      checked++;
      if (wantShots && viewport.name === "desktop" && pagePath.startsWith("/t/")) {
        const slug = pagePath.split("/")[2];
        const commune = pagePath.split("/")[3];
        await page.screenshot({ path: join(root, "assets/previews/full", `${slug}-${commune}.png`), fullPage: false });
      }
    } catch (error) {
      failures.push({ page: pagePath, viewport: viewport.name, problems: [`échec de chargement : ${error.message}`] });
      checked++;
    } finally {
      await context.close();
    }
  }
}

const workers = Array.from({ length: concurrency }, () => worker());
await Promise.all(workers);
await browser.close();

console.log(`${checked} chargements vérifiés (${PAGES.length} pages × ${VIEWPORTS.length} viewports)`);
const summary = { checked, failures: failures.length, details: failures };
writeFileSync(join(root, "qa-last-run.json"), JSON.stringify(summary, null, 2));
if (failures.length) {
  console.error(`\n${failures.length} échec(s) :`);
  for (const f of failures.slice(0, 30)) console.error(`  [${f.viewport}] ${f.page}`);
  for (const f of failures.slice(0, 10)) for (const p of f.problems) console.error(`      - ${p}`);
  process.exit(1);
}
console.log("✓ aucun défilement horizontal, aucune erreur, toutes les images chargent");
