import type { Level, SejarahEvent } from "../types";

const STORE_KEY = "nusantaraBersamaan.v2";

export interface Saved {
  level: Level;
  /** kuis yang sudah dijawab benar */
  done: Record<string, true>;
  /** idEvent -> id pilihan keputusan */
  choices: Record<string, string>;
}

export function loadStore(events: SejarahEvent[]): Saved {
  const result: Saved = { level: 2, done: {}, choices: {} };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return result;
    const saved = JSON.parse(raw) as {
      level?: unknown;
      done?: Record<string, unknown>;
      choices?: Record<string, unknown>;
    } | null;
    if (saved && typeof saved.level === "number" && saved.level >= 1 && saved.level <= 3) {
      result.level = saved.level as Level;
    }
    for (const ev of events) {
      if (saved?.done?.[ev.id]) result.done[ev.id] = true;
      const c = saved?.choices?.[ev.id];
      if (typeof c === "string" && ev.keputusan.pilihan.some((p) => p.id === c)) {
        result.choices[ev.id] = c;
      }
    }
  } catch {
    /* penyimpanan bisa kosong atau diblokir; abaikan */
  }
  return result;
}

export function saveStore(data: Saved): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  } catch {
    /* abaikan */
  }
}
