// 860px sama dengan titik pindah tata letak peta di CSS.
import { useSyncExternalStore } from "react";

const KUERI_KECIL = "(max-width: 860px)";

export function layarKecil(): boolean {
  return typeof window !== "undefined" && window.matchMedia(KUERI_KECIL).matches;
}

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
