import type { SyntheticEvent } from "react";

/**
 * Pilih ukuran thumbnail Wikimedia yang pas untuk lebar tampil, supaya ponsel tidak mengunduh gambar besar.
 * Hanya lebar standar Wikimedia yang dipakai (lebar lain sering kena batas laju). Berkas asli diubah ke URL
 * thumbnail; kalau thumbnail gagal dimuat, pasang cadanganGambar di onError supaya kembali ke URL aslinya.
 */
const LEBAR_STANDAR = [120, 250, 330, 500, 960, 1280];
const POLA_THUMB = /^(https:\/\/(?:upload|thumb)\.wikimedia\.org\/wikipedia\/commons\/thumb\/.+\/)(\d+)px-([^/]+)$/;
const POLA_ASLI = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/?#]+)$/;

function lebarTarget(lebarCss: number): number {
  const dpr = typeof window === "undefined" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  // sedikit lebih kecil dari ukuran ideal masih tajam, dan menghindari lompatan dari 500 ke 960
  const butuh = lebarCss * dpr * 0.85;
  return LEBAR_STANDAR.find((w) => w >= butuh) ?? LEBAR_STANDAR[LEBAR_STANDAR.length - 1]!;
}

export function gambarResponsif(url: string, lebarCss: number): string {
  const lebar = lebarTarget(lebarCss);
  const thumb = url.match(POLA_THUMB);
  if (thumb) {
    // hanya diperkecil; thumbnail yang lebih besar dari aslinya bisa gagal dibuat
    const sekarang = Number(thumb[2]);
    return lebar < sekarang ? `${thumb[1]}${lebar}px-${thumb[3]}` : url;
  }
  const asli = url.match(POLA_ASLI);
  if (asli) {
    const [, a, ab, nama] = asli as unknown as [string, string, string, string];
    const ext = nama.split(".").pop()?.toLowerCase() ?? "";
    if (!["jpg", "jpeg", "png", "gif", "webp", "tif", "tiff", "svg"].includes(ext)) return url;
    const akhiran = ext === "svg" ? ".png" : ext === "tif" || ext === "tiff" ? ".jpg" : "";
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/${a}/${ab}/${nama}/${lebar}px-${nama}${akhiran}`;
  }
  return url;
}

/** onError untuk <img>: kalau thumbnail gagal, coba sekali URL aslinya. */
export function cadanganGambar(asli: string) {
  return (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    if (img.dataset.cadangan === "1" || img.src === asli) return;
    img.dataset.cadangan = "1";
    img.src = asli;
  };
}
