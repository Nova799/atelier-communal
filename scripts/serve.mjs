import http from "node:http";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
};

function resolveSafe(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const file = path.join(root, normalized);
  return file.startsWith(root) ? file : null;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let file = resolveSafe(url.pathname);
    if (!file) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    let stat;
    try {
      stat = await fsp.stat(file);
    } catch {
      // URL sans slash final : redirection si un dossier du même nom existe.
      if (!url.pathname.endsWith("/")) {
        try {
          const alt = await fsp.stat(file + ".html");
          if (alt.isFile()) {
            res.writeHead(301, { Location: url.pathname + ".html" }).end();
            return;
          }
        } catch {}
        try {
          const alt = await fsp.stat(path.join(file, "index.html"));
          if (alt.isFile()) {
            res.writeHead(301, { Location: url.pathname + "/" }).end();
            return;
          }
        } catch {}
      }
      const nf = path.join(root, "404.html");
      res.writeHead(404, { "content-type": types[".html"] });
      fs.createReadStream(nf).pipe(res);
      return;
    }
    if (stat.isDirectory()) {
      file = path.join(file, "index.html");
      try {
        stat = await fsp.stat(file);
      } catch {
        res.writeHead(404).end("Not found");
        return;
      }
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, {
      "content-type": types[ext] || "application/octet-stream",
      "cache-control": ext === ".html" ? "no-cache" : "public, max-age=3600",
      "x-content-type-options": "nosniff",
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    fs.createReadStream(file).pipe(res);
  } catch (err) {
    console.error(err);
    res.writeHead(500).end("Server error");
  }
});

server.listen(port, host, () => {
  console.log(`Atelier communal → http://${host}:${port}`);
  console.log(`Galerie          → http://${host}:${port}/`);
  console.log(`Design system    → http://${host}:${port}/system.html`);
});
