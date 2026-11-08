import { layarKecil } from "./layar";

const KUNCI_SESI = "nusantara-layar-penuh-dicoba";

/**
 * Masuk layar penuh pada sentuhan pertama di ponsel (browser tidak mengizinkannya tanpa sentuhan).
 * Hanya dicoba sekali per sesi.
 */
export function pasangLayarPenuhOtomatis(): void {
  if (typeof document === "undefined" || typeof document.documentElement.requestFullscreen !== "function") return;
  if (!layarKecil()) return;
  if (window.matchMedia("(display-mode: standalone)").matches) return;
  try {
    if (sessionStorage.getItem(KUNCI_SESI) === "1") return;
  } catch {
    /* abaikan: tetap dicoba */
  }
  const coba = () => {
    if (document.fullscreenElement) return;
    try {
      sessionStorage.setItem(KUNCI_SESI, "1");
    } catch {
      /* abaikan */
    }
    void document.documentElement.requestFullscreen().catch(() => undefined);
    document.removeEventListener("pointerup", coba);
  };
  document.addEventListener("pointerup", coba);
}
