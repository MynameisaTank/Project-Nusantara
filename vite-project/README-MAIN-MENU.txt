NUSANTARA — MAIN MENU REDESIGN

Perubahan utama:
- Judul Nusantara kini menjadi fokus tengah layar; ilustrasi peta besar di kanan dihilangkan.
- InfiniteSpiral melintasi komposisi judul dan tampil lagi sebagai aksen visual di pojok kanan bawah.
- Tombol utama memakai interaksi jelly (stretch/bounce saat hover dan tekan).
- Latar menu dan pemilihan era memakai light tunnel animasi yang ringan, tanpa dependency WebGL/GSAP tambahan.
- Pemilihan era menggunakan AccordionGallery: arahkan/fokuskan panel untuk memperluas detail; klik era pertama untuk masuk. Era 2 dan 3 ditampilkan sebagai rencana.
- Warna header dan timeline dalam permainan diselaraskan dengan palet hijau gelap dan kuningan menu.
- Galeri menggunakan ilustrasi SVG lokal di public/spiral, sehingga tidak memerlukan koneksi gambar eksternal.

Menjalankan:
1. npm ci
2. npm run dev

Build check belum dapat dijalankan karena dependency project belum terpasang lengkap di lingkungan kerja. Kode komponen baru ditulis tanpa menambahkan dependency GSAP.
