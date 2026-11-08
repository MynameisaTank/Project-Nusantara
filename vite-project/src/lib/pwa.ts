/** Service worker, tombol pasang aplikasi, dan deteksi versi baru. Hanya aktif di build produksi. */
import { useSyncExternalStore } from "react";
import { saatSenggang } from "./senggang";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export interface StatusPwa {
  pembaruanSiap: boolean;
  bisaDipasang: boolean;
  terpasang: boolean;
  /** service worker sudah aktif */
  tersimpan: boolean;
}

function sedangTerpasang(): boolean {
  if (typeof window === "undefined") return false;
  const standalone = typeof window.matchMedia === "function" && window.matchMedia("(display-mode: standalone)").matches;
  return standalone || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

let status: StatusPwa = { pembaruanSiap: false, bisaDipasang: false, terpasang: sedangTerpasang(), tersimpan: false };
const pendengar = new Set<() => void>();
function ubah(bagian: Partial<StatusPwa>): void {
  status = { ...status, ...bagian };
  pendengar.forEach((fn) => fn());
}

let promptTertunda: BeforeInstallPromptEvent | null = null;
let registrasi: ServiceWorkerRegistration | null = null;
let muatUlangSetelahGanti = false;

export function mulaiPwa(): void {
  if (typeof window === "undefined") return;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    promptTertunda = event as BeforeInstallPromptEvent;
    ubah({ bisaDipasang: true });
  });
  window.addEventListener("appinstalled", () => {
    promptTertunda = null;
    ubah({ bisaDipasang: false, terpasang: true });
  });

  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;

  // Hanya muat ulang kalau pengguna memilih menerapkan pembaruan, bukan saat kunjungan pertama.
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (muatUlangSetelahGanti) window.location.reload();
  });

  // Hemat data dan koneksi 2G tidak ikut mengunduh seluruh aplikasi di muka.
  const koneksi = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (koneksi?.saveData || koneksi?.effectiveType === "slow-2g" || koneksi?.effectiveType === "2g") return;

  // Daftar saat browser sudah senggang supaya tidak berebut jaringan dengan menu pertama.
  const daftar = () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((reg) => {
        registrasi = reg;
        const cek = () => {
          if (reg.waiting && navigator.serviceWorker.controller) ubah({ pembaruanSiap: true });
        };
        cek();
        reg.addEventListener("updatefound", () => {
          const baru = reg.installing;
          baru?.addEventListener("statechange", () => {
            if (baru.state === "installed") cek();
          });
        });
        window.setInterval(() => void reg.update().catch(() => undefined), 60 * 60 * 1000);
        void navigator.serviceWorker.ready.then(() => ubah({ tersimpan: true }));
      })
      .catch((galat) => console.warn("[pwa] service worker gagal didaftarkan:", galat));
  };
  window.addEventListener("load", () => saatSenggang(daftar, 4000));
}

export function terapkanPembaruan(): void {
  const menunggu = registrasi?.waiting;
  if (!menunggu) return;
  muatUlangSetelahGanti = true;
  menunggu.postMessage({ type: "SKIP_WAITING" });
}

export async function pasangAplikasi(): Promise<boolean> {
  if (!promptTertunda) return false;
  await promptTertunda.prompt();
  const { outcome } = await promptTertunda.userChoice;
  promptTertunda = null;
  ubah({ bisaDipasang: false });
  return outcome === "accepted";
}

// iPhone tidak punya dialog pasang; harus lewat menu Bagikan di Safari.
export function perluPetunjukIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  return ios && !status.terpasang;
}

function langganan(fn: () => void): () => void {
  pendengar.add(fn);
  return () => pendengar.delete(fn);
}

export function usePwa(): StatusPwa {
  return useSyncExternalStore(langganan, () => status, () => status);
}
