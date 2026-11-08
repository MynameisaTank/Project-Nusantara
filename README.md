# Project: Nusantara

Peta sejarah Nusantara yang bisa dijelajahi dari tahun 1200 sampai 2026. Kamu bisa menggeser tahun, melihat peristiwa apa saja yang sedang terjadi di berbagai tempat pada waktu yang sama, lalu membaca ceritanya, menjawab kuis, dan memilih keputusan seolah-olah kamu ada di sana.

Dibuat untuk belajar sejarah, terutama buat persiapan ujian.

## Apa saja yang ada di dalamnya

- Peta interaktif dengan garis waktu. Geser tahunnya, dan penanda peristiwa serta wilayah kerajaan ikut berubah.
- Tiga era: Majapahit sampai perdagangan global (1200–1617), masa kolonial (1600–1800), dan kolonialisme sampai zaman modern (1800–2026).
- Setiap peristiwa punya cerita dalam tiga tingkat bahasa: dasar, menengah, dan lanjut.
- Kuis singkat dan pilihan keputusan di setiap peristiwa, lengkap dengan penjelasan apa yang sebenarnya terjadi.
- Materi ujian berupa graf sebab-akibat, jadi kelihatan peristiwa mana memicu peristiwa mana.
- Mode kuis untuk latihan per era.
- Bisa dipasang di HP seperti aplikasi biasa, dan tetap terbuka walau sinyal hilang (peta dan sebagian gambar tetap butuh internet).
- Tampilan menyesuaikan perangkat. HP yang lebih lemah otomatis dapat mode grafis yang lebih ringan, dan modenya bisa diganti sendiri di Pengaturan.

## Cara menjalankan

Kamu butuh Node.js versi 20.19 atau 22.12 ke atas.

Kode aplikasinya ada di folder `vite-project`. Pasang dulu dependensinya di sana:

```bash
cd vite-project
npm install
npm run dev
```

Setelah itu buka `http://localhost:5173` di browser.

Perintah lain yang sering dipakai:

- `npm run build` untuk mengecek tipe lalu membuat versi produksi di folder `dist`.
- `npm run preview` untuk mencoba hasil build tadi.
- `npm run coba:ponsel` untuk build lalu membuka aplikasi di jaringan Wi-Fi yang sama, supaya bisa dicoba langsung di HP.

Semua perintah di atas juga bisa dijalankan dari folder utama. Folder utama hanya meneruskannya ke `vite-project`.

Kalau mau mencoba di HP lewat internet, misalnya dengan ngrok, jalankan `npm run preview` dulu, lalu arahkan tunnel ke port 4173.

## Isi foldernya

Hampir semua yang penting ada di `vite-project/src`:

- `components` berisi semua layar dan bagian tampilan, misalnya menu utama, pilihan era, peta, panel cerita, kuis, dan materi ujian.
- `data` berisi isi sejarahnya. Peristiwa ada di `events.ts`, `events2.ts`, dan `events3.ts` (satu file per era). Wilayah kerajaan ada di file `kerajaan` dan `wilayah`. Hubungan sebab-akibat untuk materi ujian ada di `sebabAkibat.ts`, dan gambarnya di `gambarNode.ts`.
- `lib` berisi fungsi pendukung, seperti deteksi kemampuan perangkat, penyimpanan progres, dan pemasangan aplikasi.
- `styles` berisi semua CSS.

## Menambah peristiwa

Cara paling gampang: salin satu peristiwa yang sudah ada di file era yang sesuai, lalu ubah isinya. Kalau ada bagian yang kurang atau salah tulis, TypeScript akan langsung memberi tahu saat `npm run dev` atau `npm run build`.

Kalau peristiwanya juga mau masuk ke materi ujian, tambahkan hubungannya di `sebabAkibat.ts` dan gambarnya di `gambarNode.ts`.

## Perlu diketahui

- Isi sejarahnya masih draf dan belum ditinjau sejarawan. Tolong cek ulang fakta dan sumbernya sebelum dipakai untuk mengajar.
- Peta dasar diambil dari Esri, dan sebagian besar gambar dari Wikimedia Commons. Keduanya butuh koneksi internet.
- Progres, pilihan keputusan, dan pengaturan disimpan di browser masing-masing, jadi tidak pindah kalau ganti perangkat.
