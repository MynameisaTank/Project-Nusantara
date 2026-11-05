import { KATEGORI, GLOSARIUM } from "../data/era";
import { $, escapeHtml } from "../lib/dom";
import { eventById, state } from "../state";
import { renderStory } from "./story";

const LEVEL_NAMES = { 1: "Dasar", 2: "Menengah", 3: "Lanjut" } as const;

export interface PanelHandlers {
  onClose: () => void;
  onAnswer: (idx: number) => void;
}

export function initPanel(h: PanelHandlers): void {
  $("panel").addEventListener("click", (e) => {
    const t = (e.target as Element).closest("button");
    if (!t) return;
    if (t.classList.contains("close")) h.onClose();
    else if (t.classList.contains("term")) showGloss(t.dataset.term ?? "");
    else if (t.classList.contains("opt")) h.onAnswer(Number(t.dataset.idx));
  });
}

function showGloss(term: string): void {
  const box = document.getElementById("glossBox");
  const text = GLOSARIUM[term];
  if (!box || !text) return;
  box.innerHTML = `<strong>${escapeHtml(term)}:</strong> ${escapeHtml(text)}`;
  box.hidden = false;
}

export function renderPanel(): void {
  const panel = $("panel");
  const ev = state.selectedId ? eventById[state.selectedId] : undefined;
  if (!ev) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  const prevBody = panel.querySelector<HTMLElement>(".panel-body");
  const scroll = prevBody ? prevBody.scrollTop : 0;

  const k = KATEGORI[ev.kategori];
  const q = ev.kuis;
  const done = !!state.done[ev.id];
  const wrong = state.wrong[ev.id] ?? [];

  const opts = q.pilihan
    .map((txt, i) => {
      let cls = "opt";
      if (done && i === q.benar) cls += " right";
      else if (wrong.includes(i)) cls += " wrong";
      const disabled = done || wrong.includes(i) ? " disabled" : "";
      return `<button type="button" class="${cls}" data-idx="${i}"${disabled}>${escapeHtml(txt)}</button>`;
    })
    .join("");

  let feedback = "";
  if (done) {
    feedback = `<p class="feedback ok"><strong>Misi selesai.</strong> ${escapeHtml(q.penjelasan)}</p>`;
  } else if (wrong.length) {
    feedback = '<p class="feedback no">Belum tepat. Baca ceritanya sekali lagi, lalu coba pilihan lain.</p>';
  }

  const sumber = ev.sumber.map((s) => `<li>${escapeHtml(s)}</li>`).join("");

  panel.innerHTML =
    '<div class="panel-head">' +
      '<button type="button" class="close" aria-label="Tutup">✕</button>' +
      `<span class="chip" style="--c:${k.warna}">${k.ikon} ${k.label}</span>` +
      `<h2>${escapeHtml(ev.judul)}</h2>` +
      `<p class="meta">${escapeHtml(ev.tahun)} · ${escapeHtml(ev.lokasi.nama)}</p>` +
    "</div>" +
    '<div class="panel-body">' +
      `<p class="lvl-note">Bahasa: ${LEVEL_NAMES[state.level]}</p>` +
      `<div class="story">${renderStory(ev.cerita[`L${state.level}` as "L1" | "L2" | "L3"], state.level)}</div>` +
      '<div id="glossBox" class="gloss" hidden></div>' +
      `<details class="more"><summary>Catatan sejarawan</summary><p>${escapeHtml(ev.catatan)}</p></details>` +
      `<details class="more"><summary>Sumber awal (periksa ulang)</summary><ul>${sumber}</ul></details>` +
      '<section class="mission">' +
        "<h3>Misi: uji pemahamanmu</h3>" +
        `<p class="q">${escapeHtml(q.tanya)}</p>` +
        `<div class="opts">${opts}</div>` +
        feedback +
      "</section>" +
    "</div>";

  panel.hidden = false;
  const body = panel.querySelector<HTMLElement>(".panel-body");
  if (body) body.scrollTop = scroll;
}
