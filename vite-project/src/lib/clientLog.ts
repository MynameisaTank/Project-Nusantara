/**
 * Penangkap galat untuk pengembangan. Hanya aktif di `npm run dev`; di build produksi semua fungsi di sini no-op.
 * Galat dicetak di browser (console) dan juga dikirim ke terminal dev server lewat /__client-log.
 */
const DEV = import.meta.env.DEV;

type Level = "error" | "warn";

function kirim(level: Level, pesan: string, stack?: string) {
  if (!DEV) return;
  const body = JSON.stringify({ level, pesan, stack, waktu: new Date().toLocaleTimeString("id-ID") });
  try {
    const blob = new Blob([body], { type: "application/json" });
    if (!navigator.sendBeacon || !navigator.sendBeacon("/__client-log", blob)) {
      void fetch("/__client-log", { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
    }
  } catch {
    // pengiriman log tidak boleh menjadi galat baru
  }
}

/** Catat galat dengan konteks (nama bagian) ke console dan terminal. */
export function catatGalat(konteks: string, err: unknown) {
  const e = err instanceof Error ? err : new Error(String(err));
  console.error(`[${konteks}]`, e);
  kirim("error", `[${konteks}] ${e.message}`, e.stack);
}

/** Bungkus callback animasi: galat di dalamnya dicatat, dan alur tetap lanjut (layar tidak macet). */
export function amankan<T extends unknown[]>(konteks: string, fn: (...args: T) => void) {
  return (...args: T) => {
    try {
      fn(...args);
    } catch (err) {
      catatGalat(konteks, err);
    }
  };
}

/** Pasang penangkap galat global (window.onerror dan promise yang gagal). Dipanggil sekali di main.tsx. */
export function pasangPenangkapGalat() {
  if (!DEV) return;
  window.addEventListener("error", (ev) => {
    kirim("error", `[window] ${ev.message} @ ${ev.filename}:${ev.lineno}:${ev.colno}`, ev.error?.stack);
  });
  window.addEventListener("unhandledrejection", (ev) => {
    const r = ev.reason;
    kirim("error", `[promise] ${r?.message ?? String(r)}`, r?.stack);
  });
}
