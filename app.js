/* ==========================================================================
   Nusantara Bersamaan — prototype v0.1
   Peta + slider tahun + panel cerita + 3 level bahasa + misi kuis.
   Data ada di data/events.js. File ini hanya logika tampilan.
   ========================================================================== */
(function () {
  "use strict";

  const STORE_KEY = "nusantaraBersamaan.v1";
  const LEVEL_NAMES = { 1: "Dasar", 2: "Menengah", 3: "Lanjut" };
  const PLAY_INTERVAL_MS = 120;

  const $ = (id) => document.getElementById(id);

  /* ---------- Jika pustaka peta gagal dimuat (misalnya offline) ---------- */
  if (typeof L === "undefined") {
    $("map").innerHTML =
      '<p style="padding:24px;font:16px/1.5 sans-serif">Pustaka peta (Leaflet) gagal dimuat. ' +
      "Periksa koneksi internet lalu muat ulang halaman.</p>";
    return;
  }

  /* ---------- State ---------- */
  const byId = {};
  EVENTS.forEach((ev) => { byId[ev.id] = ev; });

  const state = {
    year: ERA.tahunAwal,
    level: 2,
    done: {},          // { idEvent: true }  (disimpan)
    wrong: {},         // { idEvent: [indeksPilihanSalah] }  (sementara)
    selectedId: null,
    playing: false
  };
  let playTimer = null;

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved && saved.level >= 1 && saved.level <= 3) state.level = saved.level;
      if (saved && saved.done && typeof saved.done === "object") {
        EVENTS.forEach((ev) => { if (saved.done[ev.id]) state.done[ev.id] = true; });
      }
    } catch (e) { /* penyimpanan bisa kosong atau diblokir; abaikan */ }
  }
  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ level: state.level, done: state.done }));
    } catch (e) { /* abaikan */ }
  }

  /* ---------- Util ---------- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  const glossTerms = Object.keys(GLOSARIUM).sort((a, b) => b.length - a.length);
  const glossRe = glossTerms.length
    ? new RegExp("\\b(" + glossTerms.map(escapeRegex).join("|") + ")\\b", "gi")
    : null;

  /* Teks cerita -> HTML. Di level 2 dan 3, istilah glosarium (kemunculan pertama) bisa diklik. */
  function renderStory(text, level) {
    let html = escapeHtml(text);
    if (level >= 2 && glossRe) {
      const used = {};
      html = html.replace(glossRe, (m) => {
        const key = m.toLowerCase();
        if (used[key]) return m;
        used[key] = true;
        return '<button type="button" class="term" data-term="' + key + '">' + m + "</button>";
      });
    }
    return html;
  }

  function doneCount() {
    return EVENTS.filter((ev) => state.done[ev.id]).length;
  }
  function isActive(ev, year) { return year >= ev.mulai && year <= ev.akhir; }

  /* ---------- Peta ---------- */
  const map = L.map("map", {
    zoomControl: false,
    minZoom: 4,
    maxZoom: 9,
    maxBounds: [[-18, 88], [14, 150]],
    maxBoundsViscosity: 0.7
  });
  L.control.zoom({ position: "bottomleft" }).addTo(map);
  map.fitBounds([[-10.5, 95], [6, 141]]);

  /* Peta dasar sementara: tile CARTO tanpa label (supaya tidak ada nama kota modern).
     Nanti bisa diganti GeoJSON sendiri untuk tampilan yang sepenuhnya khas. */
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 9,
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
  }).addTo(map);

  const layer = L.layerGroup().addTo(map);
  const markers = {};

  EVENTS.forEach((ev) => {
    const k = KATEGORI[ev.kategori];
    const icon = L.divIcon({
      className: "pin",
      html: '<span class="pin-ic" style="border-color:' + k.warna + '">' + k.ikon + "</span>",
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });
    const m = L.marker([ev.lokasi.lat, ev.lokasi.lng], {
      icon: icon,
      title: ev.judul + " (" + ev.tahun + ")",
      riseOnHover: true
    });
    m.on("click", () => openEvent(ev.id));
    markers[ev.id] = m;
  });

  function decorate(m, ev, year) {
    const el = m.getElement();
    if (!el) return;
    const age = year - ev.mulai;
    el.classList.toggle("baru", age >= 0 && age <= 15);
    el.classList.toggle("selesai", !!state.done[ev.id]);
    el.classList.toggle("dipilih", state.selectedId === ev.id);
  }

  /* Menyamakan penanda, daftar "terjadi bersamaan", dan panel dengan tahun sekarang */
  function syncAll() {
    const year = state.year;
    const active = [];

    EVENTS.forEach((ev) => {
      const m = markers[ev.id];
      if (isActive(ev, year)) {
        active.push(ev);
        if (!layer.hasLayer(m)) layer.addLayer(m);
        decorate(m, ev, year);
      } else if (layer.hasLayer(m)) {
        layer.removeLayer(m);
      }
    });

    // Event yang sedang dibuka tapi sudah tidak aktif di tahun ini -> tutup panel
    if (state.selectedId && !isActive(byId[state.selectedId], year)) {
      state.selectedId = null;
      renderPanel();
    }

    renderNow(active);
    $("yearLabel").textContent = year + " M";
    $("progress").textContent = "Misi selesai: " + doneCount() + "/" + EVENTS.length;
  }

  /* ---------- Daftar peristiwa bersamaan ---------- */
  function renderNow(active) {
    $("nowCount").textContent = active.length;
    const list = $("nowList");
    if (!active.length) {
      list.innerHTML = '<li class="empty">Belum ada peristiwa di tahun ini. Geser waktu ke depan.</li>';
      return;
    }
    list.innerHTML = active.map((ev) => {
      const k = KATEGORI[ev.kategori];
      return (
        '<li class="' + (state.done[ev.id] ? "done" : "") + '">' +
        '<button type="button" data-id="' + ev.id + '">' +
        '<span class="ic">' + k.ikon + "</span>" +
        "<span><span class=\"t\">" + escapeHtml(ev.judul) + "</span>" +
        '<span class="y">' + escapeHtml(ev.tahun) + " · " + escapeHtml(ev.lokasi.nama) + "</span></span>" +
        "</button></li>"
      );
    }).join("");
  }

  /* ---------- Panel cerita ---------- */
  function renderPanel() {
    const panel = $("panel");
    const ev = byId[state.selectedId];
    if (!ev) { panel.hidden = true; panel.innerHTML = ""; return; }

    const prevBody = panel.querySelector(".panel-body");
    const scroll = prevBody ? prevBody.scrollTop : 0;

    const k = KATEGORI[ev.kategori];
    const q = ev.kuis;
    const done = !!state.done[ev.id];
    const wrong = state.wrong[ev.id] || [];

    const opts = q.pilihan.map((txt, i) => {
      let cls = "opt";
      if (done && i === q.benar) cls += " right";
      else if (wrong.indexOf(i) !== -1) cls += " wrong";
      const disabled = done || wrong.indexOf(i) !== -1 ? " disabled" : "";
      return '<button type="button" class="' + cls + '" data-idx="' + i + '"' + disabled + ">" + escapeHtml(txt) + "</button>";
    }).join("");

    let feedback = "";
    if (done) {
      feedback = '<p class="feedback ok"><strong>Misi selesai.</strong> ' + escapeHtml(q.penjelasan) + "</p>";
    } else if (wrong.length) {
      feedback = '<p class="feedback no">Belum tepat. Baca ceritanya sekali lagi, lalu coba pilihan lain.</p>';
    }

    const sumber = ev.sumber.map((s) => "<li>" + escapeHtml(s) + "</li>").join("");

    panel.innerHTML =
      '<div class="panel-head">' +
        '<button type="button" class="close" aria-label="Tutup">✕</button>' +
        '<span class="chip" style="--c:' + k.warna + '">' + k.ikon + " " + k.label + "</span>" +
        "<h2>" + escapeHtml(ev.judul) + "</h2>" +
        '<p class="meta">' + escapeHtml(ev.tahun) + " · " + escapeHtml(ev.lokasi.nama) + "</p>" +
      "</div>" +
      '<div class="panel-body">' +
        '<p class="lvl-note">Bahasa: ' + LEVEL_NAMES[state.level] + "</p>" +
        '<div class="story">' + renderStory(ev.cerita["L" + state.level], state.level) + "</div>" +
        '<div id="glossBox" class="gloss" hidden></div>' +
        '<details class="more"><summary>Catatan sejarawan</summary><p>' + escapeHtml(ev.catatan) + "</p></details>" +
        '<details class="more"><summary>Sumber awal (periksa ulang)</summary><ul>' + sumber + "</ul></details>" +
        '<section class="mission">' +
          "<h3>Misi: uji pemahamanmu</h3>" +
          '<p class="q">' + escapeHtml(q.tanya) + "</p>" +
          '<div class="opts">' + opts + "</div>" +
          feedback +
        "</section>" +
      "</div>";

    panel.hidden = false;
    const body = panel.querySelector(".panel-body");
    if (body) body.scrollTop = scroll;
  }

  function showGloss(term) {
    const box = $("glossBox");
    if (!box || !GLOSARIUM[term]) return;
    box.innerHTML = "<strong>" + escapeHtml(term) + ":</strong> " + escapeHtml(GLOSARIUM[term]);
    box.hidden = false;
  }

  /* Geser peta supaya penanda tidak tertutup panel */
  function focusOn(ev) {
    const z = Math.max(map.getZoom(), 6);
    const wide = window.innerWidth > 800;
    const offset = wide ? [195, 0] : [0, window.innerHeight * 0.18];
    const target = map.project([ev.lokasi.lat, ev.lokasi.lng], z).add(offset);
    map.flyTo(map.unproject(target, z), z, { duration: 0.8 });
  }

  function openEvent(id) {
    const ev = byId[id];
    if (!ev) return;
    state.selectedId = id;
    renderPanel();
    syncAll();
    focusOn(ev);
  }

  function closePanel() {
    state.selectedId = null;
    renderPanel();
    syncAll();
  }

  /* ---------- Kuis / misi ---------- */
  function answer(idx) {
    const ev = byId[state.selectedId];
    if (!ev || state.done[ev.id]) return;

    if (idx === ev.kuis.benar) {
      state.done[ev.id] = true;
      saveStore();
    } else {
      const list = state.wrong[ev.id] || [];
      if (list.indexOf(idx) === -1) list.push(idx);
      state.wrong[ev.id] = list;
    }
    renderPanel();
    syncAll();
    if (state.done[ev.id] && doneCount() === EVENTS.length) showBanner();
  }

  function showBanner() {
    const b = $("banner");
    b.innerHTML =
      "<strong>Era selesai!</strong> Kamu menyelesaikan semua misi di era “" + escapeHtml(ERA.nama) +
      "”. Esai akhir era dan era berikutnya akan hadir di versi selanjutnya." +
      '<button type="button" class="x" aria-label="Tutup">✕</button>';
    b.hidden = false;
  }

  /* ---------- Waktu ---------- */
  function setYear(y) {
    y = Math.max(ERA.mulai, Math.min(ERA.akhir, Math.round(y)));
    state.year = y;
    $("yearSlider").value = y;
    syncAll();
  }

  function stopPlay() {
    state.playing = false;
    clearInterval(playTimer);
    playTimer = null;
    $("playBtn").textContent = "▶";
    $("playBtn").setAttribute("aria-label", "Putar waktu");
  }

  function startPlay() {
    if (state.year >= ERA.akhir) setYear(ERA.mulai);
    state.playing = true;
    $("playBtn").textContent = "⏸";
    $("playBtn").setAttribute("aria-label", "Jeda");
    playTimer = setInterval(() => {
      if (state.year >= ERA.akhir) { stopPlay(); return; }
      setYear(state.year + 1);
    }, PLAY_INTERVAL_MS);
  }

  /* ---------- Level bahasa ---------- */
  function syncLevelButtons() {
    document.querySelectorAll(".lvl").forEach((b) => {
      const on = Number(b.dataset.level) === state.level;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* ---------- Pasang event ---------- */
  document.querySelectorAll(".lvl").forEach((b) => {
    b.addEventListener("click", () => {
      state.level = Number(b.dataset.level);
      saveStore();
      syncLevelButtons();
      renderPanel();
    });
  });

  $("panel").addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    if (t.classList.contains("close")) closePanel();
    else if (t.classList.contains("term")) showGloss(t.dataset.term);
    else if (t.classList.contains("opt")) answer(Number(t.dataset.idx));
  });

  $("nowList").addEventListener("click", (e) => {
    const t = e.target.closest("button[data-id]");
    if (t) openEvent(t.dataset.id);
  });

  $("banner").addEventListener("click", (e) => {
    if (e.target.closest(".x")) $("banner").hidden = true;
  });

  $("yearSlider").addEventListener("input", (e) => {
    if (state.playing) stopPlay();
    setYear(Number(e.target.value));
  });

  $("playBtn").addEventListener("click", () => {
    if (state.playing) stopPlay(); else startPlay();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.selectedId) closePanel();
  });

  window.addEventListener("load", () => map.invalidateSize());

  /* ---------- Mulai ---------- */
  loadStore();
  $("eraName").textContent = "Era: " + ERA.nama + " (" + ERA.mulai + "–" + ERA.akhir + " M)";
  const slider = $("yearSlider");
  slider.min = ERA.mulai;
  slider.max = ERA.akhir;
  $("rangeMin").textContent = ERA.mulai;
  $("rangeMax").textContent = ERA.akhir;
  if (window.innerWidth <= 800) $("nowBox").open = false;
  syncLevelButtons();
  setYear(state.year);
})();
