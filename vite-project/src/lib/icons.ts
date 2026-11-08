import type { KategoriId } from "../types";

export type IconName = KategoriId | "tutup" | "putar" | "jeda";

export const ICONS: Record<IconName, { d: string; fill?: boolean }> = {
  politik: { d: "M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18" },
  perang: { d: "M5 5l14 14M19 5L5 19M3.5 6.5l3-3M17.5 3.5l3 3M3.5 17.5l3 3M17.5 20.5l3-3" },
  perdagangan: { d: "M12 3v13M12 3l7 11h-7M4.5 18h15l-2.5 3h-10z" },
  budaya: { d: "M12 6.5c-2-1.6-5-2.2-8-1.7v13c3-.5 6 .1 8 1.7 2-1.6 5-2.2 8-1.7v-13c-3-.5-6 .1-8 1.7zM12 6.5v13" },
  agama: { d: "M12 3v18M5.25 8.25h13.5M6.75 8.25c0 5.25 2.25 8.25 5.25 8.25s5.25-3 5.25-8.25" },
  diplomasi: { d: "M3.75 6.75h16.5v10.5H3.75zM6.75 10.5h10.5M6.75 13.5h6.75M9 3.75L12 6.75L15 3.75" },
  tutup: { d: "M6 6l12 12M18 6L6 18" },
  putar: { d: "M8 5.5v13l11-6.5z", fill: true },
  jeda: { d: "M7.5 5h3.2v14H7.5zM13.3 5h3.2v14h-3.2z", fill: true }
};

/** Versi string, untuk penanda Leaflet. */
export function iconSvg(name: IconName, size = 20): string {
  const ic = ICONS[name];
  const paint = ic.fill
    ? 'fill="currentColor" stroke="none"'
    : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${paint} aria-hidden="true"><path d="${ic.d}"/></svg>`;
}
