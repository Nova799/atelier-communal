/* Atelier communal — interactions partagées.
   Progressive enhancement : sans JavaScript, la navigation, les fiches en <details>,
   les cartes et les formulaires restent lisibles. Aucun réseau, aucun stockage. */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const norm = (s = "") =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const fmt = new Intl.NumberFormat("fr-FR");

/* -------------------------------------------------------------------------
   Dialogues natifs : démo, navigation, signalement
   ------------------------------------------------------------------------- */

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  document.body.classList.add("is-locked");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
  if (!$$("dialog[open]").length) document.body.classList.remove("is-locked");
}

$$("[data-dialog-open]").forEach((btn) => {
  btn.addEventListener("click", () => openDialog(document.getElementById(btn.dataset.dialogOpen)));
});

$$("[data-dialog-close]").forEach((btn) => {
  btn.addEventListener("click", () => closeDialog(btn.closest("dialog")));
});

/* Menu mobile */
const navSheet = $("#nav-sheet");
$$("[data-nav-open]").forEach((btn) => btn.addEventListener("click", () => openDialog(navSheet)));
$$("[data-nav-close]").forEach((btn) => btn.addEventListener("click", () => closeDialog(navSheet)));
$$("[data-nav-link]").forEach((a) => a.addEventListener("click", () => closeDialog(navSheet)));

/* Fermeture au clic sur le fond */
$$("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => {
    if (!$$("dialog[open]").length) document.body.classList.remove("is-locked");
  });
});

/* -------------------------------------------------------------------------
   En-tête au défilement
   ------------------------------------------------------------------------- */

const header = $("[data-header]");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* -------------------------------------------------------------------------
   Recherche et filtres de démarches
   ------------------------------------------------------------------------- */

$$("[data-service-explorer]").forEach((root) => {
  const input = $("[data-service-search]", root);
  const chips = $$("[data-service-filter]", root);
  const cards = $$("[data-service-card]", root);
  const count = $("[data-service-count]", root);
  const empty = $("[data-service-empty]", root);
  const reset = $("[data-service-reset]", root);
  let category = "all";

  function apply() {
    const q = norm(input?.value || "");
    let visible = 0;
    cards.forEach((card) => {
      const matchCat = category === "all" || card.dataset.category === category;
      const haystack = norm(`${card.dataset.name || ""} ${card.dataset.keywords || ""}`);
      const matchText = !q || haystack.includes(q);
      const show = matchCat && matchText;
      card.hidden = !show;
      if (!show) card.open = false;
      else visible += 1;
    });
    if (count) count.textContent = `${visible} démarche${visible > 1 ? "s" : ""} affichée${visible > 1 ? "s" : ""}`;
    if (empty) empty.hidden = visible !== 0;
    chips.forEach((chip) => {
      const active = chip.dataset.serviceFilter === category;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      category = chip.dataset.serviceFilter;
      apply();
    }),
  );
  input?.addEventListener("input", apply);
  reset?.addEventListener("click", () => {
    if (input) input.value = "";
    category = "all";
    apply();
    input?.focus();
  });
  apply();
});

/* -------------------------------------------------------------------------
   Carte schématique : filtres, sélection, zoom
   ------------------------------------------------------------------------- */

$$("[data-map]").forEach((root) => {
  const chips = $$("[data-map-filter]", root);
  const pins = $$("[data-pin]", root);
  const items = $$("[data-map-item]", root);
  const poiButtons = $$("[data-map-poi]", root);
  const status = $("[data-map-status]", root);
  const scene = $("[data-map-scene]", root);
  const zoomIn = $('[data-map-zoom="in"]', root);
  const zoomOut = $('[data-map-zoom="out"]', root);
  const zoomReset = $('[data-map-zoom="reset"]', root);
  let group = "all";
  let scale = 1;
  const steps = [1, 1.35, 1.7, 2.1];

  const labelFor = (g) => chips.find((c) => c.dataset.mapFilter === g)?.textContent.replace(/\d+$/, "").trim() || "Tout";

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  function clearActive() {
    pins.forEach((p) => p.classList.remove("is-active"));
    poiButtons.forEach((b) => b.classList.remove("is-active"));
  }

  function applyFilter() {
    let visible = 0;
    items.forEach((li) => {
      const show = group === "all" || li.dataset.itemGroup === group;
      li.hidden = !show;
      if (show) visible += 1;
    });
    pins.forEach((pin) => {
      pin.classList.toggle("is-off", group !== "all" && pin.dataset.pinGroup !== group);
    });
    chips.forEach((chip) => {
      const active = chip.dataset.mapFilter === group;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    const activePin = pins.find((p) => p.classList.contains("is-active"));
    if (activePin && activePin.classList.contains("is-off")) clearActive();
    setStatus(`${visible} lieu${visible > 1 ? "x" : ""} affiché${visible > 1 ? "s" : ""} · ${group === "all" ? "carte schématique de démonstration" : labelFor(group)}`);
  }

  function activate(index) {
    const pin = pins[index];
    const item = items[index];
    if (!pin || !item || item.hidden) return;
    pins.forEach((p) => p.classList.toggle("is-active", p === pin));
    poiButtons.forEach((b) => b.classList.toggle("is-active", b.dataset.mapPoi === String(index)));
    setStatus(`${String(Number(index) + 1).padStart(2, "0")} · ${item.querySelector(".atlas-map__poi-name")?.textContent || "Lieu"} — ${item.querySelector(".atlas-map__poi-note")?.textContent || ""}`);
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      group = chip.dataset.mapFilter;
      applyFilter();
    }),
  );
  poiButtons.forEach((btn) => btn.addEventListener("click", () => activate(Number(btn.dataset.mapPoi))));
  pins.forEach((pin) => {
    pin.addEventListener("click", () => activate(Number(pin.dataset.pin)));
    pin.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate(Number(pin.dataset.pin));
      }
    });
  });

  function setScale(next) {
    scale = Math.min(steps[steps.length - 1], Math.max(steps[0], next));
    if (scene) scene.style.transform = `scale(${scale})`;
    if (zoomIn) zoomIn.disabled = scale >= steps[steps.length - 1];
    if (zoomOut) zoomOut.disabled = scale <= steps[0];
  }
  zoomIn?.addEventListener("click", () => setScale(steps[steps.indexOf(scale) + 1] ?? scale));
  zoomOut?.addEventListener("click", () => setScale(steps[steps.indexOf(scale) - 1] ?? scale));
  zoomReset?.addEventListener("click", () => setScale(1));

  applyFilter();
  setScale(1);
});

/* -------------------------------------------------------------------------
   Révélation et compteurs
   ------------------------------------------------------------------------- */

const revealItems = $$("[data-reveal]");
if (reduceMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealItems.forEach((el) => io.observe(el));
}

$$("[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.countSuffix || "";
  if (!Number.isFinite(target)) return;
  if (reduceMotion.matches) {
    el.textContent = fmt.format(target) + suffix;
    return;
  }
  let started = false;
  const run = () => {
    if (started) return;
    started = true;
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt.format(Math.round(target * eased)) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) {
    el.textContent = fmt.format(target) + suffix;
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.4 },
  );
  io.observe(el);
});

/* -------------------------------------------------------------------------
   Formulaire de signalement (démo, aucun envoi)
   ------------------------------------------------------------------------- */

const report = $("#report-dialog");
if (report) {
  const form = $("[data-report-form]", report);
  const steps = $$("[data-report-step]", report);
  const next = $("[data-report-next]", report);
  const prev = $("[data-report-prev]", report);
  const submit = $("[data-report-submit]", report);
  const bar = $("[data-report-bar]", report);
  const label = $("[data-report-label]", report);
  const success = $("[data-report-success]", report);
  const closeButtons = $$("[data-report-close]", report);
  let current = 0;

  function resetReport() {
    current = 0;
    form?.reset();
    form?.removeAttribute("hidden");
    success?.setAttribute("hidden", "");
    steps.forEach((s, i) => {
      s.hidden = i !== 0;
    });
    if (prev) prev.hidden = true;
    if (next) next.hidden = false;
    if (submit) submit.hidden = true;
    updateUI();
  }

  function updateUI() {
    if (bar) bar.style.setProperty("--v", `${((current + 1) / steps.length) * 100}%`);
    if (label) label.textContent = `Étape ${current + 1} sur ${steps.length}`;
    steps.forEach((s, i) => {
      s.hidden = i !== current;
    });
    if (prev) prev.hidden = current === 0;
    if (next) next.hidden = current === steps.length - 1;
    if (submit) submit.hidden = current !== steps.length - 1;
  }

  function validateStep() {
    const step = steps[current];
    if (!step) return true;
    const fields = $$("input, select, textarea", step).filter((el) => !el.disabled);
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  next?.addEventListener("click", () => {
    if (!validateStep()) return;
    current = Math.min(steps.length - 1, current + 1);
    updateUI();
    steps[current]?.querySelector("input, select, textarea")?.focus();
  });
  prev?.addEventListener("click", () => {
    current = Math.max(0, current - 1);
    updateUI();
    steps[current]?.querySelector("input, select, textarea")?.focus();
  });
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    form.hidden = true;
    success?.removeAttribute("hidden");
    if (bar) bar.style.setProperty("--v", "100%");
    if (label) label.textContent = "Signalement simulé";
    success?.focus();
  });
  $$("[data-report-open]").forEach((btn) =>
    btn.addEventListener("click", () => {
      resetReport();
      openDialog(report);
    }),
  );
  closeButtons.forEach((btn) => btn.addEventListener("click", () => closeDialog(report)));
  report.addEventListener("close", () => {
    if (success && !success.hidden) setTimeout(resetReport, 200);
  });
}

/* -------------------------------------------------------------------------
   Galerie : filtre par famille
   ------------------------------------------------------------------------- */

const gallery = $("[data-gallery-grid]");
if (gallery) {
  const items = $$("[data-gallery-item]", gallery);
  const chips = $$("[data-gallery-filter]");
  const count = $("[data-gallery-count]");
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const family = chip.dataset.galleryFilter;
      let visible = 0;
      items.forEach((item) => {
        const show = family === "all" || item.dataset.family === family;
        item.hidden = !show;
        if (show) visible += 1;
      });
      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      if (count) count.textContent = `${visible} direction${visible > 1 ? "s" : ""} affichée${visible > 1 ? "s" : ""}`;
    }),
  );
}

/* -------------------------------------------------------------------------
   Horloge locale de démonstration (direction Signal)
   ------------------------------------------------------------------------- */

$$("[data-clock]").forEach((el) => {
  const update = () => {
    el.textContent = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(new Date());
  };
  update();
  setInterval(update, 30000);
});
