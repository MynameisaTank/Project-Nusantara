import type { Moda, SejarahEvent } from "../types";
import { modaUntuk } from "./moda";

export interface Perjalanan {
  id: string;
  moda: Moda;
  awal: [number, number];
  titik: [number, number][];
}

const RADIUS_DERAJAT = 8;
const JARAK_MIN_DERAJAT = 0.3;
const JUMLAH_MAKS = 3;
const SEGMEN = 48;
const LENGKUNG = 0.18;

export function perjalananDekat(pusat: SejarahEvent, aktif: SejarahEvent[]): Perjalanan[] {
  const k = Math.cos((pusat.lokasi.lat * Math.PI) / 180);
  const moda = modaUntuk(pusat);

  return aktif
    .filter((ev) => ev.id !== pusat.id)
    .map((ev) => ({
      ev,
      jarak: Math.hypot(ev.lokasi.lat - pusat.lokasi.lat, (ev.lokasi.lng - pusat.lokasi.lng) * k)
    }))
    .filter(({ jarak }) => jarak >= JARAK_MIN_DERAJAT && jarak <= RADIUS_DERAJAT)
    .sort((a, b) => a.jarak - b.jarak)
    .slice(0, JUMLAH_MAKS)
    .map(({ ev }) => ({
      id: `${pusat.id}->${ev.id}`,
      moda,
      awal: [pusat.lokasi.lat, pusat.lokasi.lng],
      titik: lengkung(pusat.lokasi, ev.lokasi)
    }));
}

function lengkung(
  dari: { lat: number; lng: number },
  ke: { lat: number; lng: number }
): [number, number][] {
  const dx = ke.lng - dari.lng;
  const dy = ke.lat - dari.lat;
  const panjang = Math.hypot(dx, dy);
  const cx = (dari.lng + ke.lng) / 2 - (dy / panjang) * panjang * LENGKUNG;
  const cy = (dari.lat + ke.lat) / 2 + (dx / panjang) * panjang * LENGKUNG;

  const titik: [number, number][] = [];
  for (let i = 0; i <= SEGMEN; i++) {
    const t = i / SEGMEN;
    const u = 1 - t;
    titik.push([
      u * u * dari.lat + 2 * u * t * cy + t * t * ke.lat,
      u * u * dari.lng + 2 * u * t * cx + t * t * ke.lng
    ]);
  }
  return titik;
}
