import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

/** Berkas yang tidak perlu dipasang di perangkat. */
const ABAIKAN = /\.map$|^sw\.js$/;

/**
 * Saat build, tulis `sw.js` ke folder keluaran. Service worker itu "memasang" seluruh berkas aplikasi
 * (kode, gaya, ikon) ke perangkat begitu aplikasi pertama kali dibuka, sehingga kunjungan berikutnya cepat
 * dan aplikasi tetap terbuka tanpa internet. Versi cache dihitung dari isi berkas, jadi setiap build yang
 * berubah otomatis menghasilkan pembaruan.
 */
export function serviceWorkerPrecache(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "service-worker-precache",
    apply: "build",
    enforce: "post",
    configResolved(hasil) {
      config = hasil;
    },
    closeBundle() {
      const keluar = resolve(config.root, config.build.outDir);
      const semua: string[] = [];
      const telusuri = (dir: string): void => {
        for (const nama of readdirSync(dir)) {
          const jalur = join(dir, nama);
          if (statSync(jalur).isDirectory()) telusuri(jalur);
          else semua.push(relative(keluar, jalur).split("\\").join("/"));
        }
      };
      telusuri(keluar);
      const daftar = semua.filter((r) => !ABAIKAN.test(r)).sort();
      const hash = createHash("sha256");
      for (const r of daftar) {
        hash.update(r);
        hash.update(readFileSync(join(keluar, r)));
      }
      const versi = hash.digest("hex").slice(0, 12);
      writeFileSync(join(keluar, "sw.js"), buatSw(versi, daftar));
      console.log(`[service-worker] ${daftar.length} berkas dipasang di precache, versi ${versi}`);
    },
  };
}

function buatSw(versi: string, daftar: string[]): string {
  return `/* Service worker Project: Nusantara. Dibuat otomatis oleh vite-sw.ts saat build; jangan diedit. */
const VERSI = ${JSON.stringify(versi)};
const CACHE_SHELL = "nusantara-shell-" + VERSI;
/* Nama ini harus sama dengan NAMA_CACHE di src/lib/persiapan.ts. */
const CACHE_GRAFIS = "nusantara-grafis-v2";
const CACHE_FONT = "nusantara-font-v1";
const PRECACHE = ${JSON.stringify(daftar)};

/* Pasang: simpan seluruh berkas aplikasi. Jika satu berkas gagal diunduh, pemasangan diulang pada kunjungan berikutnya. */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL).then((cache) => cache.addAll(["./"].concat(PRECACHE.map((r) => "./" + r)))),
  );
});

/* Aktifkan: buang cache aplikasi versi lama, lalu ambil alih halaman yang sedang terbuka. */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((nama) => Promise.all(nama.filter((n) => n.indexOf("nusantara-shell-") === 0 && n !== CACHE_SHELL).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

/* Versi baru menunggu sampai pengguna memilih "Muat ulang" (halaman mengirim pesan ini). */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

function batasWaktu(janji, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("waktu habis")), ms);
    janji.then(
      (nilai) => { clearTimeout(timer); resolve(nilai); },
      (galat) => { clearTimeout(timer); reject(galat); },
    );
  });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  /* 1. Navigasi: jaringan dulu (paling lama 4 detik), lalu cadangan dari cache supaya aplikasi tetap terbuka tanpa internet. */
  if (req.mode === "navigate") {
    event.respondWith(
      batasWaktu(fetch(req), 4000).catch(() =>
        caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./")),
      ),
    );
    return;
  }

  /* 2. Berkas aplikasi sendiri: dari cache dulu. Nama berkas memuat hash isinya, jadi aman dipakai ulang. */
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const salinan = res.clone();
              caches.open(CACHE_SHELL).then((cache) => cache.put(req, salinan));
            }
            return res;
          }),
      ),
    );
    return;
  }

  /* 3. Font Google: cache dulu, perbarui di latar belakang. */
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(CACHE_FONT).then((cache) =>
        cache.match(req).then((hit) => {
          const jaringan = fetch(req)
            .then((res) => {
              if (res.ok || res.type === "opaque") cache.put(req, res.clone());
              return res;
            })
            .catch(() => hit);
          return hit || jaringan;
        }),
      ),
    );
    return;
  }

  /* 4. Gambar Wikimedia: pakai salinan yang sudah disimpan halaman (lib/persiapan.ts) bila ada.
     Respons opaque sengaja tidak disimpan karena memakan kuota penyimpanan jauh lebih besar dari ukuran aslinya. */
  if (/\\.wikimedia\\.org$/.test(url.hostname) && req.destination === "image") {
    event.respondWith(
      caches.open(CACHE_GRAFIS).then((cache) => cache.match(req.url).then((hit) => hit || fetch(req))),
    );
  }
});
`;
}
