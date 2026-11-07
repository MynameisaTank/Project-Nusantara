/**
 * Deteksi kemampuan grafis perangkat dan penentuan tingkat grafik.
 *
 * Tingkat:
 * - tinggi: WebGPU dan WebGL2 tersedia (efek kaca menu utama + galeri 3D + shader latar)
 * - sedang: hanya WebGL2 (galeri 3D + shader latar; efek kaca menu diganti latar CSS)
 * - dasar:  WebGL2 tidak tersedia (galeri gambar biasa, tanpa 3D)
 */

export type Tingkat = "tinggi" | "sedang" | "dasar";
export type ModeGrafis = "otomatis" | Tingkat;

export interface Deteksi {
  webgpu: boolean;
  webgl2: boolean;
  /** perangkat dengan memori ≤ 2 GB menurut navigator.deviceMemory */
  memoriRendah: boolean;
  /** pengguna meminta penghematan data (navigator.connection.saveData) atau koneksinya sangat lambat (2G) */
  hemat: boolean;
}

export const LABEL_TINGKAT: Record<Tingkat, string> = { tinggi: "Tinggi", sedang: "Sedang", dasar: "Dasar" };

const KUNCI_MODE = "nusantara.grafis";
const RANK: Record<Tingkat, number> = { dasar: 0, sedang: 1, tinggi: 2 };

function adaWebgl2(): boolean {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}

/** WebGPU dianggap ada hanya jika adapter benar-benar bisa diminta, bukan sekadar objek navigator.gpu. */
async function adaWebgpu(): Promise<boolean> {
  try {
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
    if (!gpu) return false;
    const adapter = await Promise.race([
      gpu.requestAdapter(),
      new Promise<null>((resolve) => window.setTimeout(() => resolve(null), 1500)),
    ]);
    return adapter !== null && adapter !== undefined;
  } catch {
    return false;
  }
}

let hasilDeteksi: Promise<Deteksi> | null = null;

/** Dihitung sekali per halaman. Pemanggilan berikutnya memakai hasil yang sama. */
export function deteksiPerangkat(): Promise<Deteksi> {
  if (!hasilDeteksi) {
    hasilDeteksi = (async () => {
      const webgl2 = adaWebgl2();
      const webgpu = await adaWebgpu();
      const memori = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const koneksi = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      const hemat = !!koneksi?.saveData || koneksi?.effectiveType === "slow-2g" || koneksi?.effectiveType === "2g";
      return { webgpu, webgl2, memoriRendah: typeof memori === "number" && memori <= 2, hemat };
    })();
  }
  return hasilDeteksi;
}

/** Tingkat tertinggi yang didukung perangkat, tanpa mempertimbangkan memori. */
export function batasPerangkat(d: Deteksi): Tingkat {
  if (!d.webgl2) return "dasar";
  return d.webgpu ? "tinggi" : "sedang";
}

/** Tingkat yang dipakai dalam mode Otomatis: batas perangkat, diturunkan satu tingkat bila memori rendah. */
export function tingkatOtomatis(d: Deteksi): Tingkat {
  const batas = batasPerangkat(d);
  return batas === "tinggi" && d.memoriRendah ? "sedang" : batas;
}

/** Tingkat yang benar-benar dipakai: pilihan pengguna, tetapi tidak pernah melebihi kemampuan perangkat. */
export function tingkatAktif(mode: ModeGrafis, d: Deteksi): Tingkat {
  if (mode === "otomatis") return tingkatOtomatis(d);
  const batas = batasPerangkat(d);
  return RANK[mode] <= RANK[batas] ? mode : batas;
}

export function bacaMode(): ModeGrafis {
  try {
    const nilai = window.localStorage.getItem(KUNCI_MODE);
    if (nilai === "tinggi" || nilai === "sedang" || nilai === "dasar" || nilai === "otomatis") return nilai;
  } catch {
    /* localStorage tidak tersedia: pakai otomatis */
  }
  return "otomatis";
}

export function simpanMode(mode: ModeGrafis): void {
  try {
    window.localStorage.setItem(KUNCI_MODE, mode);
  } catch {
    /* abaikan: pilihan hanya berlaku untuk sesi ini */
  }
}
