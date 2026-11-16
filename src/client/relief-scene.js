/**
 * Direction 22 — Relief · scène 3D temps réel (@pixi/3d + PixiJS).
 *
 * Un diorama Tata Somba généré par Blender headless (scripts/blender_atakora.py),
 * chargé en GLB et éclairé en WebGL : soleil chaud bas, ombres longues,
 * brouillard d'Atacora. Caméra à dérive lente, parallaxe pointeur et
 * « glisser pour regarder » — volontairement modeste.
 *
 * Aucune dépendance CDN : pixi.js et @pixi/3d sont vendorisés dans
 * /assets/vendor/ et importés en dynamique. Sans WebGL ou avec
 * prefers-reduced-motion, la photo de secours reste visible.
 */

const host = document.querySelector("#relief-scene");
const hero = document.querySelector("#relief-hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Parallaxe et inclinaison : rien si l'utilisateur préfère moins de mouvement */
(() => {
  if (!hero || reduceMotion) return;
  const hint = hero.querySelector(".t22-hint");
  if (!hint) return;
  const hide = () => hero.classList.add("relief-hero--looked");
  hero.addEventListener("pointerdown", hide, { once: true });
})();

if (host && hero) {
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  const webglOK = (() => {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
    } catch {
      return false;
    }
  })();
  if (!reduceMotion && !saveData && webglOK) boot();
}

async function boot() {
  const { Application, Assets } = await import("pixi.js");
  await import("@pixi/3d/webgl");
  const { View3D, Model3D, DirectionalLight } = await import("@pixi/3d");

  hero.classList.add("relief-hero--live");

  const isSoftware = (() => {
    try {
      const probe = document.createElement("canvas");
      const gl = probe.getContext("webgl2") || probe.getContext("webgl");
      if (!gl) return true;
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      const name = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
      return /swiftshader|llvmpipe|softpipe|software/i.test(name);
    } catch {
      return false;
    }
  })();

  const startResolution = isSoftware ? 0.3 : Math.min(window.devicePixelRatio || 1, 1.75);
  const app = new Application();
  await app.init({
    resizeTo: host,
    background: 0x1d1620,
    antialias: !isSoftware,
    autoDensity: true,
    resolution: startResolution,
    powerPreference: "high-performance",
  });
  if (isSoftware) app.ticker.maxFPS = 30;
  host.appendChild(app.canvas);
  app.canvas.setAttribute("aria-hidden", "true");
  /* Conserve style.width/height posés par autoDensity (pixels logiques) :
     on ne touche qu'à la position, jamais aux dimensions. */
  Object.assign(app.canvas.style, { position: "absolute", inset: "0", display: "block" });

  /* --- atmosphère de fin de journée -------------------------------------- */
  const dome = { skyColor: 0x2c2333, groundColor: 0x553a2c, intensity: 1.05 };
  const fog = { type: "exp2", color: 0x3f2d2c, density: 0.026 };
  const view = new View3D({
    autoResize: true,
    shadowQuality: isSoftware ? "low" : "medium",
    environment: dome,
    background: dome,
    fog,
    toneMapping: "aces",
    exposure: 1.14,
  });
  app.stage.addChild(view);

  const sun = new DirectionalLight({ color: 0xffc287, intensity: 3.15, castShadow: !isSoftware, position: { x: 7.6, y: 5.6, z: 3.1 } });
  sun.lookAt({ x: 0, y: 0.4, z: 0 });
  view.root.addChild(sun);

  const source = await Assets.load("/assets/models/atakora-diorama.glb");
  const model = new Model3D({ source });
  view.root.addChild(model);

  /* --- caméra : dérive lente + pointeur + glisser ------------------------- */
  const camera = view.camera;
  camera.fov = 40;

  const target = { x: 0.4, y: 1.05, z: 0 };
  let radius = 17.6;
  let camHeight = 4.9;
  const baseYaw = 0.78;

  const layoutCamera = () => {
    const aspect = app.screen.width / Math.max(1, app.screen.height);
    if (aspect >= 1.1) {
      camera.fov = 40;
      radius = 17.6;
      camHeight = 4.9;
    } else if (aspect >= 0.78) {
      camera.fov = 48;
      radius = 16.6;
      camHeight = 5.4;
    } else {
      camera.fov = 50;
      radius = 17.8;
      camHeight = 7.6;
    }
  };

  app.renderer.on("resize", () => layoutCamera());
  layoutCamera();

  let parX = 0, parY = 0, targetParX = 0, targetParY = 0;
  let dragYaw = 0, dragPitch = 0, dragYawTarget = 0, dragPitchTarget = 0;
  let dragging = false, lastX = 0, lastY = 0;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    targetParX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    targetParY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    if (dragging) {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      dragYawTarget = Math.max(-0.46, Math.min(0.46, dragYawTarget + dx * 0.0046));
      dragPitchTarget = Math.max(-0.16, Math.min(0.2, dragPitchTarget + dy * 0.003));
    }
  });
  hero.addEventListener("pointerdown", (event) => {
    if (event.target.closest("a, button")) return;
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    host.setPointerCapture?.(event.pointerId);
  });
  const endDrag = () => { dragging = false; };
  hero.addEventListener("pointerup", endDrag);
  hero.addEventListener("pointercancel", endDrag);
  hero.addEventListener("pointerleave", endDrag);

  let tSec = 0;

  /* Qualité adaptative : descend d'abord la résolution interne,
     puis bascule sur la photo statique si le GPU est trop faible */
  let perfFrames = 0, perfElapsed = 0, perfScale = 1, perfCooldown = 0, lowStreak = 0, staticFallback = false;
  const fallbackToStatic = () => {
    staticFallback = true;
    hero.classList.remove("relief-hero--live");
    try {
      app.ticker.stop();
      app.destroy({ removeView: true }, { children: true });
    } catch {
      app.canvas.remove();
    }
  };
  const adaptQuality = (deltaMS) => {
    if (staticFallback) return;
    perfFrames += 1;
    perfElapsed += deltaMS;
    perfCooldown = Math.max(0, perfCooldown - 1);
    if (perfFrames < 70 || perfCooldown > 0) {
      if (perfFrames >= 70) { perfFrames = 0; perfElapsed = 0; }
      return;
    }
    const avgFps = 70000 / Math.max(1, perfElapsed);
    perfFrames = 0;
    perfElapsed = 0;
    if (avgFps < 26 && perfScale > 0.45) {
      perfScale = Math.max(0.45, perfScale * 0.7);
      perfCooldown = 100;
      app.renderer.resolution = startResolution * perfScale;
      app.renderer.resize(app.screen.width, app.screen.height, app.renderer.resolution);
      app.queueResize();
    } else if (avgFps < 14) {
      lowStreak += 1;
      if (lowStreak >= 2) fallbackToStatic();
    } else {
      lowStreak = 0;
    }
  };

  app.ticker.add((ticker) => {
    const dt = Math.min(ticker.deltaMS, 50) / 1000;
    tSec += dt;
    adaptQuality(ticker.deltaMS);

    parX += (targetParX - parX) * 0.055;
    parY += (targetParY - parY) * 0.055;
    dragYaw += (dragYawTarget - dragYaw) * 0.09;
    dragPitch += (dragPitchTarget - dragPitch) * 0.09;

    const yaw = baseYaw + Math.sin(tSec * 0.1) * 0.05 + parX * 0.14 + dragYaw;
    const height = camHeight + parY * 0.7 + dragPitch * 3.4;

    camera.position.set(
      target.x + Math.sin(yaw) * radius,
      Math.max(1.4, height),
      target.z + Math.cos(yaw) * radius,
    );
    camera.lookAt(target);
  });

  hero.classList.add("relief-hero--ready");
}
