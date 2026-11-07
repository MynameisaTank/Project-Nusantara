/**
 * Deteksi ukuran layar untuk mengatur perilaku (bukan sekadar gaya). Batas 860px sama dengan titik pindah
 * tata letak peta ke tampilan ponsel di CSS (style.css, overlay-peta.css, mobile.css).
 */
import { useSyncExternalStore } from "react";

const KUERI_KECIL = "(max-width: 860px)";

export function layarKecil(): boolean {
  return typeof window !== "undefined" && window.matchMedia(KUERI_KECIL).matches;
}

/** True pada layar sempit (ponsel dan tablet kecil). Berubah otomatis saat layar diputar atau jendela diubah. */
export function useLayarKecil(): boolean {
  return useSyncExternalStore(
    (beri) => {
      const kueri = window.matchMedia(KUERI_KECIL);
      kueri.addEventListener("change", beri);
      return () => kueri.removeEventListener("change", beri);
    },
    layarKecil,
    () => false,
  );
}
