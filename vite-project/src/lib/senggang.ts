/**
 * Jalankan `fn` saat browser menganggur, atau paling lambat setelah `batas` milidetik.
 * Dipakai untuk pekerjaan latar (mendaftarkan service worker, mengunduh modul layar berikutnya)
 * supaya tidak berebut CPU dan jaringan dengan layar yang sedang dilihat pengguna.
 */
export function saatSenggang(fn: () => void, batas = 3000): void {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => fn(), { timeout: batas });
  } else {
    window.setTimeout(fn, Math.min(batas, 1500));
  }
}
