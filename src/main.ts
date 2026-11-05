import "./styles/style.css";
import { ERA } from "./data/era";
import { EVENTS } from "./data/events";
import { $, escapeHtml } from "./lib/dom";
import { loadStore, saveStore } from "./lib/store";
import { focusOn, initMarkers, syncMarkers } from "./map";
import { doneCount, eventById, isActive, state } from "./state";
import type { Level } from "./types";
import { initNowList, renderNow } from "./ui/nowList";
import { initPanel, renderPanel } from "./ui/panel";

const PLAY_INTERVAL_MS = 120;
let playTimer: number | null = null;

/* Menyamakan penanda, daftar "terjadi bersamaan", dan panel dengan tahun sekarang */
function syncAll(): void {
  const year = state.year;
  const active = EVENTS.filter((ev) => isActive(ev, year));

  // Event yang sedang dibuka tapi sudah tidak aktif di tahun ini -> tutup panel
  const sel = state.selectedId ? eventById[state.selectedId] : undefined;
  if (sel && !isActive(sel, year)) {
    state.selectedId = null;
    renderPanel();
  }

  syncMarkers(active, year);
  renderNow(active);
  $("yearLabel").textContent = `${year} M`;
  $("progress").textContent = `Misi selesai: ${doneCount()}/${EVENTS.length}`;
}

function openEvent(id: string): void {
  const ev = eventById[id];
  if (!ev) return;
  state.selectedId = id;
  renderPanel();
  syncAll();
  focusOn(ev);
}

function closePanel(): void {
  state.selectedId = null;
  renderPanel();
  syncAll();
}

function showBanner(): void {
  const b = $("banner");
  b.innerHTML =
    `<strong>Era selesai!</strong> Kamu menyelesaikan semua misi di era “${escapeHtml(ERA.nama)}”. ` +
    "Esai akhir era dan era berikutnya akan hadir di versi selanjutnya." +
    '<button type="button" class="x" aria-label="Tutup">✕</button>';
  b.hidden = false;
}

function answer(idx: number): void {
  const ev = state.selectedId ? eventById[state.selectedId] : undefined;
  if (!ev || state.done[ev.id]) return;

  if (idx === ev.kuis.benar) {
    state.done[ev.id] = true;
    saveStore();
  } else {
    const list = state.wrong[ev.id] ?? [];
    if (!list.includes(idx)) list.push(idx);
    state.wrong[ev.id] = list;
  }
  renderPanel();
  syncAll();
  if (state.done[ev.id] && doneCount() === EVENTS.length) showBanner();
}

/* ---------- Waktu ---------- */
function setYear(y: number): void {
  state.year = Math.max(ERA.mulai, Math.min(ERA.akhir, Math.round(y)));
  $<HTMLInputElement>("yearSlider").value = String(state.year);
  syncAll();
}

function stopPlay(): void {
  state.playing = false;
  if (playTimer !== null) clearInterval(playTimer);
  playTimer = null;
  $("playBtn").textContent = "▶";
  $("playBtn").setAttribute("aria-label", "Putar waktu");
}

function startPlay(): void {
  if (state.year >= ERA.akhir) setYear(ERA.mulai);
  state.playing = true;
  $("playBtn").textContent = "⏸";
  $("playBtn").setAttribute("aria-label", "Jeda");
  playTimer = window.setInterval(() => {
    if (state.year >= ERA.akhir) { stopPlay(); return; }
    setYear(state.year + 1);
  }, PLAY_INTERVAL_MS);
}

/* ---------- Level bahasa ---------- */
const levelButtons = document.querySelectorAll<HTMLButtonElement>(".lvl");

function syncLevelButtons(): void {
  levelButtons.forEach((b) => {
    const on = Number(b.dataset.level) === state.level;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

/* ---------- Mulai ---------- */
function init(): void {
  loadStore();
  initMarkers(openEvent);
  initPanel({ onClose: closePanel, onAnswer: answer });
  initNowList(openEvent);

  levelButtons.forEach((b) => {
    b.addEventListener("click", () => {
      state.level = Number(b.dataset.level) as Level;
      saveStore();
      syncLevelButtons();
      renderPanel();
    });
  });

  $("banner").addEventListener("click", (e) => {
    if ((e.target as Element).closest(".x")) $("banner").hidden = true;
  });

  $<HTMLInputElement>("yearSlider").addEventListener("input", (e) => {
    if (state.playing) stopPlay();
    setYear(Number((e.target as HTMLInputElement).value));
  });

  $("playBtn").addEventListener("click", () => {
    if (state.playing) stopPlay(); else startPlay();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.selectedId) closePanel();
  });

  $("eraName").textContent = `Era: ${ERA.nama} (${ERA.mulai}–${ERA.akhir} M)`;
  const slider = $<HTMLInputElement>("yearSlider");
  slider.min = String(ERA.mulai);
  slider.max = String(ERA.akhir);
  $("rangeMin").textContent = String(ERA.mulai);
  $("rangeMax").textContent = String(ERA.akhir);
  if (window.innerWidth <= 800) $<HTMLDetailsElement>("nowBox").open = false;
  syncLevelButtons();
  setYear(state.year);
}

init();
