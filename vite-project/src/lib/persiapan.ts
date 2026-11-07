/**
 * "Pemasangan" aset grafis untuk web: sebelum menu dibuka, modul grafik yang dibutuhkan tingkat aktif
 * diunduh lebih dulu (lewat import dinamis), gambar yang langsung terlihat di menu disimpan ke Cache Storage,
 * dan aplikasi menunggu service worker selesai menyimpan kode aplikasi di perangkat (lihat lib/pwa.ts).
 * Kunjungan berikutnya memakai salinan dari cache, sehingga pemuatan jauh lebih cepat.
 *
 * Setiap tugas dibatasi waktunya dan seluruh proses dibatasi total, jadi kegagalan jaringan
 * tidak pernah menahan aplikasi di layar pemuatan.
 */
import type { Tingkat } from "./perangkat";
import { GAMBAR_GALERI_MENU, GAMBAR_MARQUEE, MARQUEE_RINGAN } from "../data/asetGrafis";
import { layarKecil } from "./layar";

export interface Kemajuan {
  selesai: number;
  total: number;
  keterangan: string;
}

/** Harus sama dengan CACHE_GRAFIS di vite-sw.ts. Naikkan angkanya jika daftar gambar berubah besar; cache lama dibuang otomatis. */
const NAMA_CACHE = "nusantara-grafis-v2";
const AWALAN_CACHE = "nusantara-grafis-";
const WAKTU_TUGAS_MS = 15000;
const WAKTU_SERVICE_WORKER_MS = 10000;
const WAKTU_TOTAL_MS = 25000;
/** Unduhan serentak dibatasi agar tidak membanjiri jaringan seluler dan tidak memicu batas laju Wikimedia Commons. */
const PARALEL = 4;

interface Tugas {
  label: string;
  jalankan: () => Promise<unknown>;
  /** batas waktu khusus; bawaannya WAKTU_TUGAS_MS */
  waktu?: number;
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

/** Muat gambar lewat elemen <img>. Tidak butuh CORS, dan browser menyimpannya di cache HTTP-nya. */
function muatGambar(url: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("gagal memuat gambar"));
    img.src = url;
  });
}

/**
 * Simpan gambar ke Cache Storage. Jika fetch lintas-asal ditolak (CORS atau jaringan) atau Cache Storage
 * tidak tersedia, gambar tetap dimuat lewat elemen <img> agar masuk cache browser.
 */
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

/** Buang cache gambar dari versi aplikasi sebelumnya supaya penyimpanan perangkat tidak terus bertambah. */
async function bersihkanCacheLama(): Promise<void> {
  if (!("caches" in window)) return;
  const nama = await caches.keys();
  await Promise.all(nama.filter((n) => n.startsWith(AWALAN_CACHE) && n !== NAMA_CACHE).map((n) => caches.delete(n)));
}

/** Menunggu service worker aktif (hanya ada di build produksi). Jika tidak tersedia, langsung selesai. */
async function tungguServiceWorker(): Promise<void> {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
  await navigator.serviceWorker.ready;
}

/** Jalankan tugas dengan paling banyak `paralel` yang berjalan bersamaan, mulai dari tugas pertama. */
async function jalankanBertahap(tugas: Tugas[], paralel: number, saatSelesai: (t: Tugas) => void): Promise<void> {
  let berikutnya = 0;
  const pekerja = Array.from({ length: Math.min(paralel, tugas.length) }, async () => {
    while (berikutnya < tugas.length) {
      const t = tugas[berikutnya++]!;
      try {
        await batasWaktu(t.jalankan(), t.waktu ?? WAKTU_TUGAS_MS);
      } catch (galat) {
        console.warn(`[persiapan] ${t.label} belum tersedia:`, galat);
      } finally {
        saatSelesai(t);
      }
    }
  });
  await Promise.all(pekerja);
}

/**
 * Siapkan aset untuk tingkat tertentu. `onKemajuan` dipanggil setiap satu tugas selesai.
 * Resolve setelah semua tugas selesai atau setelah WAKTU_TOTAL_MS, mana yang lebih dulu.
 */
export async function siapkanGrafis(
  tingkat: Tingkat,
  hemat: boolean,
  onKemajuan: (kemajuan: Kemajuan) => void,
): Promise<void> {
  void bersihkanCacheLama().catch(() => undefined);

  const tugas: Tugas[] = [];
  if (tingkat !== "dasar") {
    tugas.push({ label: "modul galeri 3D", jalankan: () => import("../components/reactbits/SphereGallery") });
    tugas.push({ label: "shader latar", jalankan: () => import("../components/reactbits/GradientASCII") });
  }
  if (tingkat === "tinggi") {
    tugas.push({ label: "efek kaca menu", jalankan: () => import("../components/reactbits/AeroShards") });
  }
  // Mode hemat hanya melewati gambar; modul grafik tetap diunduh karena dibutuhkan untuk tampilan.
  // Hanya gambar yang langsung terlihat di menu yang diunduh di muka; gambar layar lain dimuat saat dibuka.
  // Layar sempit memakai lebih sedikit gambar latar (lihat MARQUEE_RINGAN).
  if (!hemat) {
    const latar = layarKecil() ? GAMBAR_MARQUEE.slice(0, MARQUEE_RINGAN) : GAMBAR_MARQUEE;
    for (const url of [...latar, ...GAMBAR_GALERI_MENU]) {
      tugas.push({ label: "gambar sejarah", jalankan: () => unduhGambar(url) });
    }
  }
  tugas.push({ label: "menyimpan aplikasi di perangkat", jalankan: tungguServiceWorker, waktu: WAKTU_SERVICE_WORKER_MS });

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
