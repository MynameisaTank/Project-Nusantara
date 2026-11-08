/**
 * Deteksi kemampuan perangkat untuk memilih tingkat grafik:
 * tinggi (WebGPU), sedang (WebGL2), ringan (WebGL2 tapi perangkat lemah), dasar (tanpa WebGL2).
 */

export type Tingkat = "tinggi" | "sedang" | "ringan" | "dasar";
export type ModeGrafis = "otomatis" | Tingkat;

export interface Deteksi {
  webgpu: boolean;
  webgl2: boolean;
  /** deviceMemory ≤ 2 GB */
  memoriRendah: boolean;
  /** saveData aktif atau koneksi 2G */
  hemat: boolean;
  cpuLambat: boolean;
  /** ribuan iterasi per milidetik */
  skorCpu: number;
}

export const LABEL_TINGKAT: Record<Tingkat, string> = { tinggi: "Tinggi", sedang: "Sedang", ringan: "Ringan", dasar: "Dasar" };

const KUNCI_MODE = "nusantara.grafis";
const RANK: Record<Tingkat, number> = { dasar: 0, ringan: 1, sedang: 2, tinggi: 3 };

// Laptop biasa skornya sekitar 20, jadi 5 kira-kira ponsel kelas bawah. Ini perkiraan, belum diukur di ponsel asli.
const AMBANG_CPU_LAMBAT = 5;

export const tingkatHemat = (t: Tingkat): boolean => t === "ringan" || t === "dasar";

function adaWebgl2(): boolean {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}

/** Cek adapternya benar-benar bisa diminta, bukan cuma ada navigator.gpu. */
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

/** Uji CPU singkat (sekitar 70 ms). Putaran pertama untuk pemanasan JIT dan tidak dihitung. */
export function ujiCpu(): number {
  let terbaik = 0;
  for (let putaran = 0; putaran < 4; putaran++) {
    const lama = putaran === 0 ? 8 : 20;
    const mulai = performance.now();
    let n = 0;
    let jumlah = 0;
    while (performance.now() - mulai < lama) {
      for (let i = 0; i < 1000; i++) jumlah += Math.sqrt(n + i) * Math.sin(i);
      n += 1000;
    }
    if (jumlah === Infinity) console.debug(jumlah); // supaya hitungannya tidak dibuang optimizer
    if (putaran > 0) terbaik = Math.max(terbaik, n / 1000 / (performance.now() - mulai));
  }
  return terbaik;
}

export function ringkasanDeteksi(d: Deteksi): string {
  const ya = (v: boolean) => (v ? "ya" : "tidak");
  return `WebGL2 ${ya(d.webgl2)} · WebGPU ${ya(d.webgpu)} · RAM ≤2 GB ${ya(d.memoriRendah)} · skor CPU ${d.skorCpu.toFixed(1)} (ambang ${AMBANG_CPU_LAMBAT})`;
}

let hasilDeteksi: Promise<Deteksi> | null = null;

export function deteksiPerangkat(): Promise<Deteksi> {
  if (!hasilDeteksi) {
    hasilDeteksi = (async () => {
      const webgl2 = adaWebgl2();
      const webgpu = await adaWebgpu();
      const memori = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const koneksi = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      const hemat = !!koneksi?.saveData || koneksi?.effectiveType === "slow-2g" || koneksi?.effectiveType === "2g";
      const skorCpu = ujiCpu();
      return {
        webgpu,
        webgl2,
        memoriRendah: typeof memori === "number" && memori <= 2,
        hemat,
        cpuLambat: skorCpu < AMBANG_CPU_LAMBAT,
        skorCpu,
      };
    })();
  }
  return hasilDeteksi;
}

/** Tingkat tertinggi menurut fitur browser saja, tanpa melihat RAM dan CPU. */
export function batasPerangkat(d: Deteksi): Tingkat {
  if (!d.webgl2) return "dasar";
  return d.webgpu ? "tinggi" : "sedang";
}

export function tingkatOtomatis(d: Deteksi): Tingkat {
  const batas = batasPerangkat(d);
  if (batas === "dasar") return "dasar";
  if (d.memoriRendah || d.cpuLambat) return "ringan";
  return batas;
}

/** Pilihan pengguna, tapi tidak boleh melebihi kemampuan perangkat. */
export function tingkatAktif(mode: ModeGrafis, d: Deteksi): Tingkat {
  if (mode === "otomatis") return tingkatOtomatis(d);
  const batas = batasPerangkat(d);
  return RANK[mode] <= RANK[batas] ? mode : batas;
}

export function bacaMode(): ModeGrafis {
  try {
    const nilai = window.localStorage.getItem(KUNCI_MODE);
    if (nilai === "tinggi" || nilai === "sedang" || nilai === "ringan" || nilai === "dasar" || nilai === "otomatis") return nilai;
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
