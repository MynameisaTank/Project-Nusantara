/**
 * Deteksi kemampuan perangkat dan penentuan tingkat grafik.
 *
 * Tingkat:
 * - tinggi: WebGPU dan WebGL2 tersedia (efek kaca menu utama + galeri 3D + shader latar)
 * - sedang: hanya WebGL2 (galeri 3D + shader latar; efek kaca menu diganti latar CSS)
 * - ringan: WebGL2 ada tetapi perangkat lemah (RAM kecil atau CPU lambat, mis. ponsel Android 9 kelas bawah):
 *           galeri 3D tanpa antialias dan resolusi 1x, tanpa shader latar, tanpa animasi dekoratif
 * - dasar:  WebGL2 tidak tersedia (galeri gambar biasa, tanpa 3D)
 *
 * Android 9 tidak pernah mendapat WebGPU (butuh Android 12 ke atas), jadi batas tertingginya sedang. Versi Android
 * tidak dipakai untuk memilih tingkat karena Chrome membekukan nilainya di user agent; yang diukur adalah kemampuan nyata.
 */

export type Tingkat = "tinggi" | "sedang" | "ringan" | "dasar";
export type ModeGrafis = "otomatis" | Tingkat;

export interface Deteksi {
  webgpu: boolean;
  webgl2: boolean;
  /** perangkat dengan memori ≤ 2 GB menurut navigator.deviceMemory (nilai 2 mencakup ponsel 2–3 GB) */
  memoriRendah: boolean;
  /** pengguna meminta penghematan data (navigator.connection.saveData) atau koneksinya sangat lambat (2G) */
  hemat: boolean;
  /** CPU lambat menurut uji singkat saat aplikasi dibuka */
  cpuLambat: boolean;
  /** hasil uji CPU (ribuan iterasi per milidetik), dicatat untuk diagnosis */
  skorCpu: number;
}

export const LABEL_TINGKAT: Record<Tingkat, string> = { tinggi: "Tinggi", sedang: "Sedang", ringan: "Ringan", dasar: "Dasar" };

const KUNCI_MODE = "nusantara.grafis";
const RANK: Record<Tingkat, number> = { dasar: 0, ringan: 1, sedang: 2, tinggi: 3 };

/**
 * Skor uji CPU di bawah angka ini dianggap lambat. Laptop biasa mencetak sekitar 20 (setelah pemanasan JIT), jadi
 * ambang 5 berarti perangkat yang sekitar 4x lebih lambat: kira-kira ponsel Android 9 kelas bawah (Snapdragon 4xx/625,
 * Helio P22/P35, Exynos 78xx) ke bawah. Ponsel kelas menengah ke atas (Snapdragon 636/660 dan yang lebih baru) mencetak
 * di atasnya. Angkanya perkiraan dari perbandingan kecepatan inti, bukan hasil ukur di ponsel sungguhan; skor perangkat
 * ditampilkan di pengaturan menu supaya ambangnya bisa disesuaikan. Throttle CPU di DevTools tidak linear, jadi tidak
 * cocok untuk mengkalibrasi angka ini; ia hanya dipakai untuk menguji bahwa jalur "ringan" terpilih.
 */
const AMBANG_CPU_LAMBAT = 5;

/** Tingkat yang memakai efek paling hemat: tanpa animasi dekoratif dan tanpa efek GPU yang mahal. */
export const tingkatHemat = (t: Tingkat): boolean => t === "ringan" || t === "dasar";

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

/**
 * Uji CPU singkat: berapa ribu iterasi hitungan desimal selesai per milidetik. Satu putaran pemanasan (dibuang) lalu
 * 3 putaran masing-masing 20 ms, diambil yang terbaik, supaya pemanasan JIT dan inti ponsel yang belum naik
 * frekuensi tidak menjatuhkan skor. Total sekitar 70 ms, dijalankan di layar pemuatan.
 */
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
    if (jumlah === Infinity) console.debug(jumlah); // mencegah hitungan dibuang oleh optimasi
    if (putaran > 0) terbaik = Math.max(terbaik, n / 1000 / (performance.now() - mulai));
  }
  return terbaik;
}

/** Ringkasan hasil deteksi untuk ditampilkan di pengaturan menu (membantu menyetel ambang dan menjelaskan pilihan Otomatis). */
export function ringkasanDeteksi(d: Deteksi): string {
  const ya = (v: boolean) => (v ? "ya" : "tidak");
  return `WebGL2 ${ya(d.webgl2)} · WebGPU ${ya(d.webgpu)} · RAM ≤2 GB ${ya(d.memoriRendah)} · skor CPU ${d.skorCpu.toFixed(1)} (ambang ${AMBANG_CPU_LAMBAT})`;
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

/** Tingkat tertinggi yang didukung perangkat, tanpa mempertimbangkan RAM dan kecepatan CPU. */
export function batasPerangkat(d: Deteksi): Tingkat {
  if (!d.webgl2) return "dasar";
  return d.webgpu ? "tinggi" : "sedang";
}

/** Tingkat yang dipakai dalam mode Otomatis: perangkat lemah mendapat Ringan walau WebGL2 atau WebGPU tersedia. */
export function tingkatOtomatis(d: Deteksi): Tingkat {
  const batas = batasPerangkat(d);
  if (batas === "dasar") return "dasar";
  if (d.memoriRendah || d.cpuLambat) return "ringan";
  return batas;
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
