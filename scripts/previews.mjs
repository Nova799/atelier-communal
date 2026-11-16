/**
 * Génère les aperçus de la galerie : une image 1440×1000 par direction,
 * capturée sur la commune par défaut, dans assets/previews/<slug>.jpg.
 * Usage : node scripts/previews.mjs  (nécessite le serveur : npm run serve)
 */
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { templateMeta } from "../src/templates/meta.mjs";
import { mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

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
mkdirSync(join(root, "assets/previews"), { recursive: true });

const browser = await chromium.launch({ headless: true });
for (const meta of templateMeta) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto(`${BASE}/t/${meta.slug}/${meta.defaultCommune}/`, { waitUntil: "load", timeout: 30000 });
  await page.evaluate(async () => {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
    document.querySelectorAll(".demobar, .skip").forEach((el) => (el.style.visibility = "hidden"));
    document.querySelectorAll("img").forEach((img) => (img.loading = "eager"));
    await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: join(root, "assets", "previews", `${meta.slug}.jpg`), type: "jpeg", quality: 82 });
  console.log(`preview ${meta.slug}`);
  await page.close();
}
await browser.close();
console.log(`✓ ${templateMeta.length} aperçus écrits dans assets/previews/`);
