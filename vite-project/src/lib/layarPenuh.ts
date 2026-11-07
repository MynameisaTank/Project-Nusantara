import { layarKecil } from "./layar";

const KUNCI_SESI = "nusantara-layar-penuh-dicoba";

/**
 * Di browser Android, aplikasi masuk layar penuh (bilah alamat dan tombol navigasi disembunyikan) pada sentuhan
 * pertama. Browser tidak mengizinkan layar penuh tanpa tindakan dari pengguna, jadi ini tidak bisa dijalankan
 * saat halaman baru dibuka. Hanya dicoba sekali per sesi, dan hanya di layar sempit yang didukung.
 */
export function pasangLayarPenuhOtomatis(): void {
  if (typeof document === "undefined" || typeof document.documentElement.requestFullscreen !== "function") return;
  if (!layarKecil()) return;
  // Aplikasi yang sudah terpasang (mode standalone) sudah berjalan tanpa bilah browser.
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
