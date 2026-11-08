/**
 * Unduh modul grafik dan gambar menu sebelum menu tampil, supaya transisi berikutnya lancar.
 * Perangkat lemah hanya mengunduh gambar kecil; modulnya dibiarkan untuk service worker.
 * Setiap tugas punya batas waktu, jadi jaringan yang gagal tidak menahan layar pemuatan.
 */
import { tingkatHemat, type Tingkat } from "./perangkat";
import { GAMBAR_MARQUEE, GAMBAR_MARQUEE_KECIL, MARQUEE_RINGAN } from "../data/asetGrafis";
import { layarKecil } from "./layar";

export interface Kemajuan {
  selesai: number;
  total: number;
  keterangan: string;
}

// Harus sama dengan CACHE_GRAFIS di vite-sw.ts.
const NAMA_CACHE = "nusantara-grafis-v2";
const AWALAN_CACHE = "nusantara-grafis-";
const WAKTU_TUGAS_MS = 15000;
const WAKTU_TOTAL_MS = 25000;
// Dibatasi supaya tidak kena batas laju Wikimedia.
const PARALEL = 4;

interface Tugas {
  label: string;
  jalankan: () => Promise<unknown>;
}

function batasWaktu<T>(janji: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("waktu habis")), ms);
    janji.then(
      (nilai) => {
        window.clearTimeout(timer);
        resolve(nilai);
      },
      (galat) => {
        window.clearTimeout(timer);
        reject(galat);
      },
    );
  });
}

function muatGambar(url: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("gagal memuat gambar"));
    img.src = url;
  });
}

/** Simpan ke Cache Storage; kalau gagal, cukup muat lewat <img> agar masuk cache browser. */
async function unduhGambar(url: string): Promise<void> {
  if ("caches" in window) {
    try {
      const cache = await caches.open(NAMA_CACHE);
      if (await cache.match(url)) return;
      const respons = await fetch(url, { mode: "cors" });
      if (respons.ok) {
        await cache.put(url, respons);
        return;
      }
    } catch {
      /* lanjut ke jalur <img> */
    }
  }
  await muatGambar(url);
}

async function bersihkanCacheLama(): Promise<void> {
  if (!("caches" in window)) return;
  const nama = await caches.keys();
  await Promise.all(nama.filter((n) => n.startsWith(AWALAN_CACHE) && n !== NAMA_CACHE).map((n) => caches.delete(n)));
}

function daftarModul(tingkat: Tingkat): Tugas[] {
  const modul: Tugas[] = [];
  if (tingkat === "dasar") return modul;
  modul.push({ label: "modul galeri 3D", jalankan: () => import("../components/reactbits/SphereGallery") });
  // di ponsel shader latar tidak dipakai (lihat EraSelect)
  if ((tingkat === "sedang" || tingkat === "tinggi") && !layarKecil()) {
    modul.push({ label: "shader latar", jalankan: () => import("../components/reactbits/GradientASCII") });
  }
  if (tingkat === "tinggi") {
    modul.push({ label: "efek kaca menu", jalankan: () => import("../components/reactbits/AeroShards") });
  }
  return modul;
}

async function jalankanBertahap(tugas: Tugas[], paralel: number, saatSelesai: (t: Tugas) => void): Promise<void> {
  let berikutnya = 0;
  const pekerja = Array.from({ length: Math.min(paralel, tugas.length) }, async () => {
    while (berikutnya < tugas.length) {
      const t = tugas[berikutnya++]!;
      try {
        await batasWaktu(t.jalankan(), WAKTU_TUGAS_MS);
      } catch (galat) {
        console.warn(`[persiapan] ${t.label} belum tersedia:`, galat);
      } finally {
        saatSelesai(t);
      }
    }
  });
  await Promise.all(pekerja);
}

/** Selesai saat semua tugas beres atau setelah WAKTU_TOTAL_MS. */
export async function siapkanGrafis(
  tingkat: Tingkat,
  hemat: boolean,
  onKemajuan: (kemajuan: Kemajuan) => void,
): Promise<void> {
  void bersihkanCacheLama().catch(() => undefined);

  const tugas: Tugas[] = [];
  const ringkas = layarKecil() || tingkatHemat(tingkat);
  if (!tingkatHemat(tingkat)) tugas.push(...daftarModul(tingkat));
  // Mode hemat data tidak mengunduh gambar di muka.
  if (!hemat) {
    const latar = ringkas ? GAMBAR_MARQUEE_KECIL.slice(0, MARQUEE_RINGAN) : GAMBAR_MARQUEE;
    for (const url of latar) {
      tugas.push({ label: "gambar sejarah", jalankan: () => unduhGambar(url) });
    }
  }

  const total = tugas.length;
  let selesai = 0;
  onKemajuan({ selesai, total, keterangan: "menyiapkan aset" });

  let timer = 0;
  const batas = new Promise<void>((resolve) => {
    timer = window.setTimeout(resolve, WAKTU_TOTAL_MS);
  });
  await Promise.race([
    jalankanBertahap(tugas, PARALEL, (t) => {
      selesai += 1;
      onKemajuan({ selesai, total, keterangan: t.label });
    }),
    batas,
  ]);
  window.clearTimeout(timer);
}
