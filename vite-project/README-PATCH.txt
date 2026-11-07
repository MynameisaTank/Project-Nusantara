# Patch Peta Kedua Nusantara

## Isi perubahan
- Peta/era pertama (1200–1617) tetap memakai data dan rentang aslinya.
- Era kedua aktif: **1600–1800**.
- Data peta kedua berisi **13 peristiwa, kuis, dan keputusan sampai tahun 1700**.
- Linimasa peta kedua tetap bisa digeser sampai 1800. Tahun 1701–1800 sengaja belum memiliki event/keputusan; rentang itu disiapkan untuk pengembangan berikutnya.
- Progress kuis dan keputusan disimpan dengan ID event terpisah (`evt2-001` dan seterusnya), sehingga progres kedua peta tidak menimpa progres peta pertama.

## Cara memasang
Ekstrak ZIP ini ke folder utama proyek React/Vite kamu, lalu izinkan file dengan nama sama untuk ditimpa. File `data/events2.ts` adalah file baru; file lainnya menggantikan versi lama.

Jangan menimpa `data/events.ts` atau `data/keputusan.ts`: keduanya tetap menjadi sumber data peta era pertama.

## Catatan
- Proyek ini menggunakan struktur sumber dari ZIP yang kamu unggah. Arsip ini adalah patch source, bukan hasil build `dist`.
- Saya tidak dapat menjalankan preview aplikasi karena ZIP sumber yang diberikan tidak menyertakan `package.json` dan dependensi proyek.
- Koordinat beberapa lokasi bersifat perkiraan. Rentang tampil di peta menunjukkan konteks visual, bukan berarti kejadian berlangsung terus-menerus.
