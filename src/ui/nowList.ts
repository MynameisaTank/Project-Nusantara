import { KATEGORI } from "../data/era";
import { $, escapeHtml } from "../lib/dom";
import { state } from "../state";
import type { SejarahEvent } from "../types";

export function initNowList(onPick: (id: string) => void): void {
  $("nowList").addEventListener("click", (e) => {
    const t = (e.target as Element).closest<HTMLElement>("button[data-id]");
    if (t?.dataset.id) onPick(t.dataset.id);
  });
}

export function renderNow(active: SejarahEvent[]): void {
  $("nowCount").textContent = String(active.length);
  const list = $("nowList");
  if (!active.length) {
    list.innerHTML = '<li class="empty">Belum ada peristiwa di tahun ini. Geser waktu ke depan.</li>';
    return;
  }
  list.innerHTML = active
    .map((ev) => {
      const k = KATEGORI[ev.kategori];
      return (
        `<li class="${state.done[ev.id] ? "done" : ""}">` +
        `<button type="button" data-id="${ev.id}">` +
        `<span class="ic">${k.ikon}</span>` +
        `<span><span class="t">${escapeHtml(ev.judul)}</span>` +
        `<span class="y">${escapeHtml(ev.tahun)} · ${escapeHtml(ev.lokasi.nama)}</span></span>` +
        "</button></li>"
      );
    })
    .join("");
}
