import type { Kerajaan } from "../data/kerajaan";

const OPASITAS_MIN = 0.06;
const OPASITAS_MAKS = 0.3;

/** Interpolasi linear; di luar rentang tahun hasilnya 0. */
export function kekuatanPadaTahun(k: Kerajaan, tahun: number): number {
  const kf = k.kekuatan;
  const first = kf[0];
  const last = kf[kf.length - 1];
  if (!first || !last || tahun < first[0] || tahun > last[0]) return 0;

  for (let i = 0; i < kf.length - 1; i++) {
    const a = kf[i];
    const b = kf[i + 1];
    if (!a || !b) continue;
    if (tahun >= a[0] && tahun <= b[0]) {
      if (b[0] === a[0]) return b[1];
      const t = (tahun - a[0]) / (b[0] - a[0]);
      return a[1] + (b[1] - a[1]) * t;
    }
  }
  return 0;
}

export function opasitasWilayah(power: number): number {
  if (power <= 0) return 0;
  return OPASITAS_MIN + (OPASITAS_MAKS - OPASITAS_MIN) * power;
}
