import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

// musik tidak ikut disimpan di muka supaya pemasangan pertama tetap kecil
const ABAIKAN = /\.map$|^sw\.js$|^audio\/|\.(ogg|mp3|m4a|wav)$/;

/** Saat build, tulis sw.js yang menyimpan semua berkas aplikasi supaya bisa dibuka tanpa internet. */
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
/* harus sama dengan NAMA_CACHE di src/lib/persiapan.ts */
const CACHE_GRAFIS = "nusantara-grafis-v2";
const CACHE_FONT = "nusantara-font-v1";
const CACHE_PETA = "nusantara-peta-v1";
const CACHE_GAMBAR = "nusantara-gambar-v1";

/* simpan ke cache dengan batas jumlah; yang paling lama disimpan dibuang lebih dulu */
function simpanTerbatas(nama, kunci, res, maks) {
  return caches.open(nama).then((cache) =>
    cache
      .put(kunci, res)
      .then(() => cache.keys())
      .then((semua) => Promise.all(semua.slice(0, Math.max(0, semua.length - maks)).map((k) => cache.delete(k)))),
  );
}

/* cache dulu; kalau belum ada, unduh dengan CORS supaya responsnya bisa disimpan tanpa memboroskan kuota */
function cacheDulu(event, nama, maks) {
  const url = event.request.url;
  event.respondWith(
    caches
      .match(url)
      .then((hit) => {
        if (hit) return hit;
        return fetch(url, { mode: "cors", credentials: "omit" })
          .then((res) => {
            if (res.ok) event.waitUntil(simpanTerbatas(nama, url, res.clone(), maks));
            return res;
          })
          .catch(() => fetch(event.request));
      }),
  );
}
const PRECACHE = ${JSON.stringify(daftar)};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL).then((cache) => cache.addAll(["./"].concat(PRECACHE.map((r) => "./" + r)))),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((nama) => Promise.all(nama.filter((n) => n.indexOf("nusantara-shell-") === 0 && n !== CACHE_SHELL).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

/* versi baru menunggu sampai pengguna memilih muat ulang */
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
  /* skrip analitik Vercel dibiarkan lewat jaringan */
  if (url.pathname.startsWith("/_vercel/")) return;

  /* navigasi: jaringan dulu (maks. 4 detik), lalu cache */
  if (req.mode === "navigate") {
    event.respondWith(
      batasWaktu(fetch(req), 4000).catch(() =>
        caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./")),
      ),
    );
    return;
  }

  /* berkas aplikasi: cache dulu, aman karena namanya memuat hash */
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

  /* font Google: cache dulu, diperbarui di latar */
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

  /* gambar Wikimedia: cari di semua cache (termasuk unduhan awal), simpan paling banyak 300 gambar */
  if (/\\.wikimedia\\.org$/.test(url.hostname) && req.destination === "image") {
    cacheDulu(event, CACHE_GAMBAR, 300);
    return;
  }

  /* ubin peta Esri: cache dulu, paling banyak 600 ubin, supaya peta yang dibuka lagi cepat dan hemat kuota */
  if (url.hostname === "server.arcgisonline.com" && url.pathname.indexOf("/tile/") !== -1) {
    cacheDulu(event, CACHE_PETA, 600);
  }
});
`;
}
