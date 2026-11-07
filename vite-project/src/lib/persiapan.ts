/**
 * "Pemasangan" aset grafis untuk web: sebelum menu dibuka, modul grafik yang dibutuhkan tingkat aktif
 * diunduh lebih dulu (lewat import dinamis) dan gambar yang langsung terlihat di menu disimpan ke Cache Storage.
 * Kunjungan berikutnya memakai salinan dari cache, sehingga pemuatan jauh lebih cepat.
 *
 * Perangkat lemah (tingkat Ringan dan Dasar, mis. ponsel Android 9 kelas bawah) hanya mengunduh gambar menu
 * yang kecil sebelum menu tampil. Modul layar berikutnya tidak dimuat di muka, karena mengimpornya berarti
 * menjalankannya (±1 detik di CPU lambat) dan itu bisa memotong sentuhan pengguna di menu; modul itu diunduh
 * service worker di latar (mendaftar saat browser menganggur, lib/pwa.ts), dan dijalankan ketika layarnya dibuka.
 *
 * Setiap tugas dibatasi waktunya dan seluruh proses dibatasi total, jadi kegagalan jaringan
 * tidak pernah menahan aplikasi di layar pemuatan.
 */
import { tingkatHemat, type Tingkat } from "./perangkat";
import { GAMBAR_MARQUEE, GAMBAR_MARQUEE_KECIL, MARQUEE_RINGAN } from "../data/asetGrafis";
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
const WAKTU_TOTAL_MS = 25000;
/** Unduhan serentak dibatasi agar tidak membanjiri jaringan seluler dan tidak memicu batas laju Wikimedia Commons. */
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

/** Modul grafik yang dipakai layar sesudah menu (pemilihan era dan efek latar), menurut tingkat. */
function daftarModul(tingkat: Tingkat): Tugas[] {
  const modul: Tugas[] = [];
  if (tingkat === "dasar") return modul;
  modul.push({ label: "modul galeri 3D", jalankan: () => import("../components/reactbits/SphereGallery") });
  // Tingkat Ringan memakai latar gradien CSS, jadi shader latar tidak perlu diunduh.
  if (tingkat === "sedang" || tingkat === "tinggi") {
    modul.push({ label: "shader latar", jalankan: () => import("../components/reactbits/GradientASCII") });
  }
  if (tingkat === "tinggi") {
    modul.push({ label: "efek kaca menu", jalankan: () => import("../components/reactbits/AeroShards") });
  }
  return modul;
}

/** Jalankan tugas dengan paling banyak `paralel` yang berjalan bersamaan, mulai dari tugas pertama. */
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
  const ringkas = layarKecil() || tingkatHemat(tingkat);
  // Perangkat lemah tidak memuat modul layar berikutnya di muka (lihat catatan di atas berkas).
  if (!tingkatHemat(tingkat)) tugas.push(...daftarModul(tingkat));
  // Mode hemat data hanya melewati gambar. Hanya gambar yang langsung terlihat di menu yang diunduh di muka;
  // gambar layar lain dimuat saat layarnya dibuka. Layar sempit dan perangkat lemah memakai lebih sedikit
  // gambar latar dan versi yang lebih kecil (lihat MARQUEE_RINGAN), sama dengan yang dipilih MainMenu.
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
