/**
 * Pemuat data per era. Data peristiwa, keputusan, dan wilayah sangat besar (sekitar 2 MB sebelum dikompres),
 * jadi tidak ikut dimuat saat aplikasi dibuka: data satu era baru diunduh ketika era itu dipilih.
 * Hasilnya disimpan sehingga memilih era yang sama lagi tidak mengunduh ulang.
 */
import type { Era, SejarahEvent } from "../types";
import type { Kerajaan } from "./kerajaan";

export interface DataEra {
  era: Era;
  events: SejarahEvent[];
  wilayah: Kerajaan[];
}

const PEMUAT: Record<string, () => Promise<DataEra>> = {
  "era-1": async () => {
    const [{ ERA }, { EVENTS }, { KERAJAAN_ERA1, KOLONIAL_ERA1 }, { KERAJAAN_BARU }] = await Promise.all([
      import("./era"),
      import("./events"),
      import("./kerajaan"),
      import("./kerajaanBaru"),
    ]);
    return { era: ERA, events: EVENTS, wilayah: [...KERAJAAN_ERA1, ...KOLONIAL_ERA1, ...KERAJAAN_BARU] };
  },
  "era-2": async () => {
    const [{ ERA2, EVENTS2 }, { WILAYAH_ERA2 }] = await Promise.all([import("./events2"), import("./wilayahEra2")]);
    return { era: ERA2, events: EVENTS2, wilayah: WILAYAH_ERA2 };
  },
  "era-3": async () => {
    const [{ ERA3, EVENTS3 }, { WILAYAH_ERA3 }] = await Promise.all([import("./events3"), import("./wilayahEra3")]);
    return { era: ERA3, events: EVENTS3, wilayah: WILAYAH_ERA3 };
  },
};

const tersimpan = new Map<string, Promise<DataEra>>();

/** Muat data satu era. Mengembalikan undefined bila id era tidak dikenal. */
export function muatEra(id: string): Promise<DataEra> | undefined {
  const pemuat = PEMUAT[id];
  if (!pemuat) return undefined;
  let janji = tersimpan.get(id);
  if (!janji) {
    janji = pemuat().catch((galat) => {
      // gagal mengunduh (jaringan putus): jangan simpan kegagalan, supaya pilihan berikutnya mencoba lagi
      tersimpan.delete(id);
      throw galat;
    });
    tersimpan.set(id, janji);
  }
  return janji;
}
