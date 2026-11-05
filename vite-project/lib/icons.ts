import type { KategoriId } from "../types";

export type IconName = KategoriId | "tutup" | "putar" | "jeda";

/* Ikon garis sederhana (viewBox 24). Tidak memakai emoji supaya tampil sama di semua perangkat. */
export const ICONS: Record<IconName, { d: string; fill?: boolean }> = {
  politik: { d: "M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18" },
  perang: { d: "M5 5l14 14M19 5L5 19M3.5 6.5l3-3M17.5 3.5l3 3M3.5 17.5l3 3M17.5 20.5l3-3" },
  perdagangan: { d: "M12 3v13M12 3l7 11h-7M4.5 18h15l-2.5 3h-10z" },
  budaya: { d: "M12 6.5c-2-1.6-5-2.2-8-1.7v13c3-.5 6 .1 8 1.7 2-1.6 5-2.2 8-1.7v-13c-3-.5-6 .1-8 1.7zM12 6.5v13" },
  tutup: { d: "M6 6l12 12M18 6L6 18" },
  putar: { d: "M8 5.5v13l11-6.5z", fill: true },
  jeda: { d: "M7.5 5h3.2v14H7.5zM13.3 5h3.2v14h-3.2z", fill: true }
};

/** String SVG, dipakai untuk penanda Leaflet (HTML mentah). */
export function iconSvg(name: IconName, size = 20): string {
  const ic = ICONS[name];
  const paint = ic.fill
    ? 'fill="currentColor" stroke="none"'
    : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${paint} aria-hidden="true"><path d="${ic.d}"/></svg>`;
}

/** Mawar angin klasik (kompas) untuk pojok peta. Warna mengikuti `currentColor`. */
export const COMPASS_SVG =
  '<svg viewBox="-50 -62 100 112" width="78" height="88" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1">' +
  '<circle r="44" stroke-width="1.4"/><circle r="38" stroke-dasharray="1 3"/>' +
  '<path d="M0-42 7-7 42 0 7 7 0 42-7 7-42 0-7-7z" fill="currentColor" fill-opacity=".85"/>' +
  '<path d="M0-26 4-4 26 0 4 4 0 26-4 4-26 0-4-4z" transform="rotate(45)" fill="currentColor" fill-opacity=".35" stroke-width=".8"/>' +
  '<circle r="2.4" fill="#fbf6e9" stroke-width="1"/>' +
  '<text y="-48" x="0" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="700" ' +
  'fill="currentColor" stroke="#fbf6e9" stroke-width="3" paint-order="stroke">U</text>' +
  "</svg>";
