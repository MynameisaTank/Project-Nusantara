/** Kirim galat browser ke terminal dev server. Tidak melakukan apa-apa di build produksi. */
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

export function catatGalat(konteks: string, err: unknown) {
  const e = err instanceof Error ? err : new Error(String(err));
  console.error(`[${konteks}]`, e);
  kirim("error", `[${konteks}] ${e.message}`, e.stack);
}

/** Bungkus callback animasi supaya galat di dalamnya tidak membuat layar macet. */
export function amankan<T extends unknown[]>(konteks: string, fn: (...args: T) => void) {
  return (...args: T) => {
    try {
      fn(...args);
    } catch (err) {
      catatGalat(konteks, err);
    }
  };
}

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
