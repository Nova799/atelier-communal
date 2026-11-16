/**
 * Direction 21 — Reflets · scène WebGL (PixiJS).
 *
 * Ciel et eau procéduraux (deux matériaux shader GLSL300), silhouettes de
 * collines et de village sur pilotis en Graphics, pirogues vectorielles en
 * dérive, vols d'oiseaux, parallaxe pointeur et heure pilotée à l'écran.
 *
 * Aucune dépendance CDN : /assets/vendor/pixi.min.mjs est importé en dynamique,
 * uniquement quand WebGL est disponible et que l'utilisateur n'a pas demandé
 * la réduction des animations. Sinon, l'image de secours reste visible.
 */

const host = document.querySelector("#r21-scene");
const hero = document.querySelector("#r21-hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Inclinaison 3D du carnet de traversée (2D + perspective) — DOM uniquement */
(() => {
  if (!hero) return;
  const panel = hero.querySelector(".t21-carnet__inner");
  if (!panel) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let px = 0, py = 0, raf = null;
  const apply = () => {
    raf = null;
    panel.style.transform = `perspective(1100px) rotateX(${(-py * 9).toFixed(2)}deg) rotateY(${(px * 13).toFixed(2)}deg) translateZ(0)`;
  };
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    px = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    py = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  hero.addEventListener("pointerleave", () => {
    px = 0; py = 0;
    if (!raf) raf = requestAnimationFrame(apply);
  });
})();

  if (!host || !hero) {
    // rien à animer : le contenu reste en lecture seule
  } else {
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
  const PIXI = await import("/assets/vendor/pixi.min.mjs");

  hero.classList.add("reflets-hero--live");

  /* ------------------------------------------------------------------ */
  /* Palette — 4 moments du lac (valeurs lerpiées chaque frame)          */
  /* ------------------------------------------------------------------ */
  const hex = (n) => [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  const PRESETS = [
    {
      id: "aube", label: "Aube", hour: "05:40",
      skyTop: 0x37476f, skyMid: 0x77688a, skyHor: 0xe7ad80,
      sun: 0xffd9a0, sunSize: 0.052, sunY: 0.20,
      waterDeep: 0x1b3140, waterHor: 0xc08a66, glitter: 0xffd9a8, glitterStrength: 0.85,
      hills: 0x2b3047, village: 0x1b1d28, night: 0.10,
    },
    {
      id: "zenith", label: "Zénith", hour: "12:00",
      skyTop: 0x3f8db4, skyMid: 0x7cc2d8, skyHor: 0xe6f2ee,
      sun: 0xffffff, sunSize: 0.062, sunY: 0.58,
      waterDeep: 0x14485a, waterHor: 0x86c4bd, glitter: 0xffffff, glitterStrength: 0.55,
      hills: 0x44626a, village: 0x253840, night: 0,
    },
    {
      id: "doree", label: "Heure dorée", hour: "18:20",
      skyTop: 0x453a63, skyMid: 0x9c5248, skyHor: 0xf0a24e,
      sun: 0xffb35c, sunSize: 0.058, sunY: 0.13,
      waterDeep: 0x272036, waterHor: 0xcf7c40, glitter: 0xffc46b, glitterStrength: 1.05,
      hills: 0x31243c, village: 0x191224, night: 0.38,
    },
    {
      id: "crepuscule", label: "Crépuscule", hour: "19:45",
      skyTop: 0x0a1128, skyMid: 0x1f2444, skyHor: 0x573c49,
      sun: 0xe9e4d2, sunSize: 0.034, sunY: 0.30,
      waterDeep: 0x080d1f, waterHor: 0x39304a, glitter: 0xdccfa4, glitterStrength: 0.42,
      hills: 0x0b1024, village: 0x05070f, night: 1,
    },
  ];
  const COLOR_KEYS = ["skyTop", "skyMid", "skyHor", "sun", "waterDeep", "waterHor", "glitter", "hills", "village"];
  const FLOAT_KEYS = ["sunSize", "sunY", "glitterStrength", "night"];
  const state = {};
  for (const key of COLOR_KEYS) state[key] = hex(PRESETS[0][key]);
  for (const key of FLOAT_KEYS) state[key] = PRESETS[0][key];
  let target = PRESETS[0];
  const lerp = (a, b, t) => a + (b - a) * t;
  const lerpInto = (t) => {
    for (const key of COLOR_KEYS) {
      const dst = state[key];
      const src = hex(target[key]);
      dst[0] = lerp(dst[0], src[0], t);
      dst[1] = lerp(dst[1], src[1], t);
      dst[2] = lerp(dst[2], src[2], t);
    }
    for (const key of FLOAT_KEYS) state[key] = lerp(state[key], target[key], t);
  };

  /* ------------------------------------------------------------------ */
  /* Shaders — ciel et eau                                               */
  /* ------------------------------------------------------------------ */
  const noiseGLSL = `
    float rhash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    float vnoise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = rhash(i), b = rhash(i + vec2(1.0, 0.0)), c = rhash(i + vec2(0.0, 1.0)), d = rhash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0; float a = 0.5;
      for (int i = 0; i < 3; i += 1) { v += a * vnoise(p); p *= 2.07; a *= 0.52; }
      return v;
    }`;

  const skyVert = `#version 300 es
    in vec2 aPosition;
    in vec2 aUV;
    out vec2 vUV;
    uniform mat3 uProjectionMatrix;
    uniform mat3 uWorldTransformMatrix;
    uniform mat3 uTransformMatrix;
    void main() {
      mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
      gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
      vUV = aUV;
    }`;

  const skyFrag = `#version 300 es
    precision highp float;
    in vec2 vUV;
    out vec4 finalColor;
    uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHor; uniform vec3 uSun;
    uniform float uSunX; uniform float uSunY; uniform float uSunSize; uniform float uNight; uniform float uTime; uniform float uAspect;
    ${noiseGLSL}
    void main() {
      float t = vUV.y;
      vec3 upper = mix(uMid, uTop, smoothstep(0.26, 1.02, t));
      vec3 col = mix(uHor, upper, smoothstep(0.02, 0.36, t));
      vec2 p = vec2((vUV.x - uSunX) * uAspect, vUV.y - uSunY);
      float d = length(p);
      float disc = smoothstep(uSunSize, uSunSize * 0.84, d);
      float glowScale = 1.0 - uNight * 0.55;
      float glow = (exp(-d * 9.0) * 0.72 + exp(-d * 2.55) * 0.30) * glowScale;
      col += uSun * (disc * (1.32 - uNight * 0.45) + glow);
      vec2 starGrid = floor(vUV * vec2(340.0, 190.0));
      float h = rhash(starGrid);
      float star = step(0.9950, h) * uNight * smoothstep(0.22, 0.9, t);
      star *= 0.55 + 0.5 * sin(uTime * 1.8 + h * 91.0);
      col += vec3(star * 1.35);
      float clouds = fbm(vec2(vUV.x * 3.1 + uTime * 0.008, vUV.y * 7.4)) * smoothstep(0.32, 0.78, t) * (1.0 - uNight * 0.75);
      col += uHor * clouds * 0.12;
      col += uHor * exp(-abs(vUV.y - 0.015) * 15.0) * 0.16;
      finalColor = vec4(col, 1.0);
    }`;

  const waterFrag = `#version 300 es
    precision highp float;
    in vec2 vUV;
    out vec4 finalColor;
    uniform vec3 uDeep; uniform vec3 uHor; uniform vec3 uGlitter;
    uniform float uTime; uniform float uSunX; uniform float uGlitterStrength; uniform float uNight;
    ${noiseGLSL}
    void main() {
      float depth = vUV.y;
      vec3 col = mix(uHor * 0.52 + vec3(0.03, 0.035, 0.04), uDeep, smoothstep(0.02, 0.8, depth));
      float drift = fbm(vec2(vUV.x * 6.2, vUV.y * 34.0 + uTime * 0.07));
      float bands = sin(vUV.y * 128.0 + sin(vUV.x * 22.0 + uTime * 0.45) * 1.8 + drift * 4.4);
      col += bands * 0.026 * (0.62 + uNight * 0.55);
      vec2 flow = vec2(vUV.x + uTime * 0.016, vUV.y);
      float colNoise = fbm(flow * vec2(26.0, 5.6) - vec2(0.0, uTime * 0.28));
      float halfWidth = mix(0.012, 0.115, depth);
      float off = (colNoise - 0.5) * (0.06 + depth * 0.11);
      float band = 1.0 - smoothstep(0.0, halfWidth, abs(vUV.x - uSunX + off));
      float fall = pow(1.0 - depth, 1.55);
      float shimmer = 0.55 + 0.45 * sin(depth * 190.0 + uTime * 1.5 + colNoise * 52.0);
      float grain = step(0.34, fbm(vec2(vUV.x * 148.0, vUV.y * 286.0 + uTime * 0.5))) * 0.82 + 0.18;
      float glitter = pow(band, 2.7) * fall * shimmer * grain;
      col += uGlitter * glitter * uGlitterStrength;
      col += uHor * exp(-depth * 22.0) * 0.42;
      finalColor = vec4(col, 1.0);
    }`;

  const makeShader = (fragment, uniforms) =>
    PIXI.Shader.from({
      gl: { vertex: skyVert, fragment },
      resources: {
        uniforms: new PIXI.UniformGroup(uniforms),
      },
    });

  /* ------------------------------------------------------------------ */
  /* Application                                                          */
  /* ------------------------------------------------------------------ */
  const isSoftware = (() => {
    try {
      const probe = document.createElement("canvas");
      const gl = probe.getContext("webgl2") || probe.getContext("webgl");
      if (!gl) return true;
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
      return /swiftshader|llvmpipe|softpipe|software/i.test(String(name));
    } catch {
      return false;
    }
  })();

  const app = new PIXI.Application();
  await app.init({
    resizeTo: host,
    background: 0x0b1024,
    antialias: !isSoftware,
    autoDensity: true,
    resolution: isSoftware ? 0.8 : Math.min(window.devicePixelRatio || 1, 1.75),
    powerPreference: "high-performance",
  });
  if (isSoftware) app.ticker.maxFPS = 30;
  host.appendChild(app.canvas);
  app.canvas.setAttribute("aria-hidden", "true");
  Object.assign(app.canvas.style, { position: "absolute", inset: "0", display: "block" });

  /* ------------------------------------------------------------------ */
  /* Géométrie plein écran                                              */
  /* ------------------------------------------------------------------ */
  const quadGeometry = (w, yTop, yBottom, flip) => new PIXI.MeshGeometry({
    positions: new Float32Array([0, yTop, w, yTop, w, yBottom, 0, yBottom]),
    uvs: new Float32Array(flip ? [0, 1, 1, 1, 1, 0, 0, 0] : [0, 0, 1, 0, 1, 1, 0, 1]),
    indices: new Uint32Array([0, 1, 2, 0, 2, 3]),
  });

  const skyUniforms = {
    uTop: { value: state.skyTop, type: "vec3<f32>" },
    uMid: { value: state.skyMid, type: "vec3<f32>" },
    uHor: { value: state.skyHor, type: "vec3<f32>" },
    uSun: { value: state.sun, type: "vec3<f32>" },
    uSunX: { value: 0.68, type: "f32" },
    uSunY: { value: state.sunY, type: "f32" },
    uSunSize: { value: state.sunSize, type: "f32" },
    uNight: { value: state.night, type: "f32" },
    uTime: { value: 0, type: "f32" },
    uAspect: { value: 1.6, type: "f32" },
  };
  const waterUniforms = {
    uDeep: { value: state.waterDeep, type: "vec3<f32>" },
    uHor: { value: state.waterHor, type: "vec3<f32>" },
    uGlitter: { value: state.glitter, type: "vec3<f32>" },
    uTime: { value: 0, type: "f32" },
    uSunX: { value: 0.68, type: "f32" },
    uGlitterStrength: { value: state.glitterStrength, type: "f32" },
    uNight: { value: state.night, type: "f32" },
  };

  const skyShader = makeShader(skyFrag, skyUniforms);
  const waterShader = makeShader(waterFrag, waterUniforms);

  let skyMesh = null;
  let waterMesh = null;
  let W = 0, H = 0, HORIZON = 0;

  /* ------------------------------------------------------------------ */
  /* Couches parallactiques — dessins stables, régénérés au resize       */
  /* ------------------------------------------------------------------ */
  const mulberry32 = (seed) => {
    let a = seed >>> 0;
    return () => {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  const farLayer = new PIXI.Container();
  const villageLayer = new PIXI.Container();
  const boatLayer = new PIXI.Container();
  const fxLayer = new PIXI.Container();
  const nearLayer = new PIXI.Container();
  const world = new PIXI.Container();
  world.sortableChildren = true;
  farLayer.zIndex = 0; villageLayer.zIndex = 1; boatLayer.zIndex = 2; nearLayer.zIndex = 3; fxLayer.zIndex = 4;
  world.addChild(farLayer, villageLayer, boatLayer, nearLayer, fxLayer);

  const hillsBack = new PIXI.Graphics();
  const hillsFront = new PIXI.Graphics();
  hillsBack.tint = 0xffffff; hillsFront.tint = 0xffffff;
  farLayer.addChild(hillsBack, hillsFront);

  const village = new PIXI.Graphics();
  const windows = new PIXI.Graphics();
  village.tint = 0xffffff; windows.tint = 0xffffff;
  villageLayer.addChild(village, windows);

  const nearPoles = new PIXI.Graphics();
  nearPoles.tint = 0xffffff;
  nearLayer.addChild(nearPoles);

  const ridge = (w, baseY, amp, seed) => {
    const pts = [{ x: -90, y: baseY }];
    const step = Math.max(26, Math.floor(w / 64));
    for (let x = -90; x <= w + 90; x += step) {
      const n =
        Math.sin(x * 0.0061 + seed) * amp +
        Math.sin(x * 0.0153 + seed * 2.7) * amp * 0.42 +
        Math.sin(x * 0.0331 + seed * 5.1) * amp * 0.14;
      pts.push({ x, y: baseY - amp * 0.55 - n });
    }
    pts.push({ x: w + 90, y: baseY });
    return pts;
  };

  const buildScenery = (w, horizon) => {
    hillsBack.clear().poly(ridge(w, horizon + 2, w * 0.026, 3.1), true).fill(0xffffff);
    hillsFront.clear().poly(ridge(w, horizon + 2, w * 0.014, 8.7), true).fill(0xffffff);

    village.clear();
    windows.clear();
    const rand = mulberry32(11);
    let x = -70;
    while (x < w + 80) {
      const shop = 20 + rand() * 30;
      const bodyH = 9 + rand() * 17;
      const roofH = 7 + rand() * 11;
      const top = horizon - bodyH;
      // pilotis
      village.rect(x + 2, horizon - 1, 1.6, 13 + rand() * 12).fill(0xffffff);
      village.rect(x + shop / 2 - 0.8, horizon - 1, 1.6, 15 + rand() * 12).fill(0xffffff);
      village.rect(x + shop - 3.6, horizon - 1, 1.6, 12 + rand() * 12).fill(0xffffff);
      // corps + toit
      village.rect(x, top, shop, bodyH + 2).fill(0xffffff);
      village.poly([x - 3.4, top, x + shop / 2, top - roofH, x + shop + 3.4, top], true).fill(0xffffff);
      // fenêtre chaude (allumée la nuit)
      if (rand() > 0.42) {
        const wx = x + 4 + rand() * (shop - 9);
        windows.rect(wx, top + bodyH * 0.34, 2.1, 2.6).fill(0xffffff);
      }
      x += shop + 7 + rand() * 26;
    }

    nearPoles.clear();
    nearPoles.rect(-90, horizon - 2, w + 180, 2.4).fill(0xffffff);
    const rand2 = mulberry32(29);
    for (let i = 0; i < 9; i += 1) {
      const px = rand2() * (w + 120) - 60;
      const ph = 14 + rand2() * 26;
      nearPoles.rect(px, horizon - ph * 0.22, 2 + rand2() * 1.4, ph).fill(0xffffff);
    }
  };

  /* --- pirogues (dérive + tangage) ----------------------------------- */
  const boats = [];
  const hullPath = (g) => g
    .moveTo(-34, 0)
    .quadraticCurveTo(0, 9, 34, 0)
    .lineTo(24, -5.6)
    .quadraticCurveTo(0, -1.4, -24, -5.6)
    .closePath();
  const makeBoat = (scale, laneRatio, speed, phase) => {
    const boat = new PIXI.Container();
    const hull = new PIXI.Graphics();
    hullPath(hull).fill(0xffffff);
    hull.tint = 0x101419;
    const wake = new PIXI.Graphics();
    wake.ellipse(-44, 2.6, 30, 3.1).fill({ color: 0xffffff, alpha: 0.13 });
    wake.ellipse(-70, 3.4, 26, 2.2).fill({ color: 0xffffff, alpha: 0.06 });
    const figure = new PIXI.Graphics();
    figure.circle(2, -10.6, 2.5).fill(0xffffff);
    figure.moveTo(0.5, -8).lineTo(3.5, -8).lineTo(4.6, -3.4).lineTo(-0.6, -3.4).closePath().fill(0xffffff);
    figure.tint = 0x101419;
    const paddle = new PIXI.Graphics();
    paddle.rect(-1.1, -13.5, 2.2, 12.5).fill(0xffffff);
    paddle.pivot.set(0, -12);
    paddle.rotation = 0.62;
    paddle.tint = 0x101419;
    boat.addChild(wake, hull, figure, paddle);
    boat.scale.set(scale);
    boat.position.set(Math.random() * 1600 - 200, 0);
    boatLayer.addChild(boat);
    return { container: boat, paddle, speed, phase, laneRatio, baseY: 0, scale };
  };

  /* --- ponctuels lumineux --------------------------------------------- */
  const lanterns = new PIXI.Graphics();
  lanterns.blendMode = "add";
  fxLayer.addChild(lanterns);

  const birds = [];
  const makeBird = () => {
    const g = new PIXI.Graphics();
    g.poly([0, 0, 5, -3.2, 10, 0], false).stroke({ width: 1.5, color: 0xffffff, alpha: 0.9 });
    g.poly([12, 0, 17, -3.2, 22, 0], false).stroke({ width: 1.5, color: 0xffffff, alpha: 0.9 });
    fxLayer.addChild(g);
    return g;
  };
  for (let i = 0; i < 3; i += 1) {
    const g = makeBird();
    birds.push({ g, x: 220 + i * 260, y: 70 + i * 26, speed: 15 + i * 4, flap: Math.random() * Math.PI * 2 });
  }

  /* ------------------------------------------------------------------ */
  /* Layout                                                              */
  /* ------------------------------------------------------------------ */
  const placeBoats = () => {
    while (boats.length < 6) {
      const i = boats.length;
      const rand = mulberry32(101 + i * 17);
      boats.push(makeBoat(0.6 + rand() * 0.85, rand(), 11 + rand() * 13, rand() * Math.PI * 2));
    }
  };

  const layout = () => {
    W = Math.max(1, app.screen.width);
    H = Math.max(1, app.screen.height);
    HORIZON = Math.round(H * 0.46);

    const skyGeo = quadGeometry(W, 0, HORIZON, true);
    const waterGeo = quadGeometry(W, HORIZON, H, false);
    if (skyMesh) { skyMesh.geometry.destroy(); app.stage.removeChild(skyMesh); skyMesh.destroy({ children: false }); }
    if (waterMesh) { waterMesh.geometry.destroy(); app.stage.removeChild(waterMesh); waterMesh.destroy({ children: false }); }
    if (app.stage.children.includes(world)) app.stage.removeChild(world);
    skyMesh = new PIXI.Mesh({ geometry: skyGeo, shader: skyShader });
    waterMesh = new PIXI.Mesh({ geometry: waterGeo, shader: waterShader });
    app.stage.addChild(skyMesh);
    app.stage.addChild(waterMesh);
    app.stage.addChild(world);

    buildScenery(W, HORIZON);
    placeBoats();
    const waterH = H - HORIZON;
    for (const boat of boats) boat.baseY = HORIZON + 26 + boat.laneRatio * Math.max(8, waterH * 0.62 - 26);

    skyUniforms.uAspect.value = W / H;
  };

  app.renderer.on("resize", () => layout());
  const ro = new ResizeObserver(() => app.queueResize());
  ro.observe(host);

  layout();

  /* ------------------------------------------------------------------ */
  /* Boucle                                                              */
  /* ------------------------------------------------------------------ */
  let pointerX = 0, pointerY = 0, parX = 0, parY = 0;
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });
  hero.addEventListener("pointerleave", () => { pointerX = 0; pointerY = 0; });

  const lanternSeeds = Array.from({ length: 10 }, (_, i) => mulberry32(500 + i)());
  const tmpColor = new PIXI.Color();
  let tSec = 0;

  /* Qualité adaptative : sous ~30 fps mesurés, on réduit la résolution interne */
  let perfFrames = 0, perfElapsed = 0, perfScale = 1, perfCooldown = 0;
  const baseResolution = isSoftware ? 0.8 : Math.min(window.devicePixelRatio || 1, 1.75);
  const adaptQuality = (deltaMS) => {
    perfFrames += 1;
    perfElapsed += deltaMS;
    perfCooldown = Math.max(0, perfCooldown - 1);
    if (perfFrames < 80 || perfCooldown > 0) {
      if (perfFrames >= 80) { perfFrames = 0; perfElapsed = 0; }
      return;
    }
    const avgFps = 80000 / Math.max(1, perfElapsed);
    perfFrames = 0;
    perfElapsed = 0;
    if (avgFps < 30 && perfScale > 0.42) {
      perfScale = Math.max(0.42, perfScale * 0.72);
      perfCooldown = 120;
      app.renderer.resolution = baseResolution * perfScale;
      app.renderer.resize(app.screen.width, app.screen.height, app.renderer.resolution);
      app.queueResize();
    }
  };

  app.ticker.add((ticker) => {
    const dt = Math.min(ticker.deltaMS, 50) / 1000;
    tSec += dt;
    adaptQuality(ticker.deltaMS);
    lerpInto(reduceMotion ? 1 : 0.055);

    // parallaxe pointeur
    parX += (pointerX - parX) * 0.055;
    parY += (pointerY - parY) * 0.055;
    farLayer.x = parX * 7;
    villageLayer.x = parX * 16;
    boatLayer.x = parX * 25;
    nearLayer.x = parX * 38;
    fxLayer.x = parX * 25;

    // uniforms
    skyUniforms.uTop.value = state.skyTop; skyUniforms.uMid.value = state.skyMid; skyUniforms.uHor.value = state.skyHor;
    skyUniforms.uSun.value = state.sun; skyUniforms.uSunY.value = state.sunY; skyUniforms.uSunSize.value = state.sunSize;
    skyUniforms.uNight.value = state.night; skyUniforms.uTime.value = tSec;
    waterUniforms.uDeep.value = state.waterDeep; waterUniforms.uHor.value = state.waterHor; waterUniforms.uGlitter.value = state.glitter;
    waterUniforms.uTime.value = tSec; waterUniforms.uGlitterStrength.value = state.glitterStrength; waterUniforms.uNight.value = state.night;

    // teintes silhouettes
    hillsBack.tint = tmpColor.setValue(state.hills).multiply(0.82).toNumber();
    hillsFront.tint = tmpColor.setValue(state.hills).toNumber();
    village.tint = tmpColor.setValue(state.village).toNumber();
    nearPoles.tint = tmpColor.setValue(state.village).multiply(0.72).toNumber();
    windows.alpha = 0.16 + state.night * 0.84;
    windows.tint = 0xffd78e;

    // pirogues
    for (const boat of boats) {
      boat.container.x += boat.speed * dt;
      if (boat.container.x > W + 90) boat.container.x = -90;
      boat.container.y = boat.baseY + Math.sin(tSec * 1.65 + boat.phase) * 1.9;
      boat.container.rotation = Math.sin(tSec * 1.1 + boat.phase) * 0.028;
      boat.paddle.rotation = 0.62 + Math.sin(tSec * 2.1 + boat.phase) * 0.38;
    }

    // oiseaux (le jour)
    const birdAlpha = Math.max(0, 1 - state.night * 1.6) * 0.85;
    for (const bird of birds) {
      bird.x += bird.speed * dt;
      if (bird.x > W + 60) { bird.x = -60; bird.y = 52 + Math.random() * 90; }
      bird.g.position.set(bird.x, bird.y + Math.sin(tSec * 0.9 + bird.flap) * 6);
      bird.g.alpha = birdAlpha;
      bird.g.scale.set(1, 0.82 + 0.36 * Math.abs(Math.sin(tSec * 3.4 + bird.flap)));
    }

    // lanternes (la nuit)
    lanterns.clear();
    if (state.night > 0.42) {
      lanterns.alpha = (state.night - 0.42) * 1.5;
      for (let i = 0; i < lanternSeeds.length; i += 1) {
        const lx = lanternSeeds[i] * W;
        const ly = HORIZON - 4 - ((i * 37) % 17);
        const flicker = 0.62 + 0.38 * Math.sin(tSec * 2.4 + i * 1.93);
        lanterns.circle(lx, ly, 2.1 + flicker).fill({ color: 0xffc978, alpha: 0.85 * flicker });
        lanterns.circle(lx, ly, 6.4 + flicker * 2.6).fill({ color: 0xffb45e, alpha: 0.10 * flicker });
      }
    } else {
      lanterns.alpha = 0;
    }
  });

  /* ------------------------------------------------------------------ */
  /* Contrôle de l'heure                                                 */
  /* ------------------------------------------------------------------ */
  const buttons = document.querySelectorAll("[data-r21-time]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = PRESETS.find((p) => p.id === button.dataset.r21Time);
      if (!next) return;
      target = next;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    });
  });

  hero.classList.add("reflets-hero--ready");
}
