import type { Level } from "../types";

const STORE_KEY = "nusantaraBersamaan.v2";

export interface Saved {
  level: Level;
  done: Record<string, true>;
  /** id peristiwa -> id pilihan */
  choices: Record<string, string>;
}

export function loadStore(): Saved {
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
    // Pilihan yang sudah tidak ada di datanya dibuang di App.tsx saat era dimuat.
    for (const [id, nilai] of Object.entries(saved?.done ?? {})) {
      if (nilai) result.done[id] = true;
    }
    for (const [id, pilihan] of Object.entries(saved?.choices ?? {})) {
      if (typeof pilihan === "string") result.choices[id] = pilihan;
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
