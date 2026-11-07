/**
 * Pemasangan aplikasi (PWA): mendaftarkan service worker, menangkap tombol "pasang", dan mendeteksi pembaruan.
 * Service worker hanya didaftarkan pada build produksi, karena di mode dev ia mengganggu hot reload.
 */
import { useSyncExternalStore } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export interface StatusPwa {
  /** versi baru sudah diunduh dan menunggu dipakai */
  pembaruanSiap: boolean;
  /** browser menawarkan pemasangan (Chrome dan Edge di Android dan desktop) */
  bisaDipasang: boolean;
  /** aplikasi sedang berjalan sebagai aplikasi terpasang */
  terpasang: boolean;
  /** service worker sudah aktif, artinya aplikasi sudah tersimpan di perangkat */
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

/** Panggil sekali saat aplikasi dimulai. */
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

  // Muat ulang hanya jika pengguna memilih menerapkan pembaruan. Pada kunjungan pertama, service worker
  // juga mengambil alih halaman, dan saat itu halaman tidak boleh dimuat ulang.
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (muatUlangSetelahGanti) window.location.reload();
  });

  // Pemasangan mengunduh seluruh kode aplikasi di muka (sekitar 1 MB terkompresi). Pengguna yang meminta
  // hemat data atau berada di koneksi 2G tidak dibebani; aplikasi tetap berjalan seperti situs biasa.
  const koneksi = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (koneksi?.saveData || koneksi?.effectiveType === "slow-2g" || koneksi?.effectiveType === "2g") return;

  window.addEventListener("load", () => {
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
        // Aplikasi yang dibiarkan terbuka lama tetap memeriksa pembaruan setiap jam.
        window.setInterval(() => void reg.update().catch(() => undefined), 60 * 60 * 1000);
        void navigator.serviceWorker.ready.then(() => ubah({ tersimpan: true }));
      })
      .catch((galat) => console.warn("[pwa] service worker gagal didaftarkan:", galat));
  });
}

/** Terapkan versi baru yang sudah menunggu: halaman dimuat ulang setelah service worker baru aktif. */
export function terapkanPembaruan(): void {
  const menunggu = registrasi?.waiting;
  if (!menunggu) return;
  muatUlangSetelahGanti = true;
  menunggu.postMessage({ type: "SKIP_WAITING" });
}

/** Tampilkan dialog pemasangan bawaan browser. Mengembalikan true bila pengguna menyetujui. */
export async function pasangAplikasi(): Promise<boolean> {
  if (!promptTertunda) return false;
  await promptTertunda.prompt();
  const { outcome } = await promptTertunda.userChoice;
  promptTertunda = null;
  ubah({ bisaDipasang: false });
  return outcome === "accepted";
}

/** iPhone dan iPad tidak punya dialog pemasangan; pengguna harus memakai menu Bagikan di Safari. */
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
