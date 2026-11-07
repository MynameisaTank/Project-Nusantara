PATCH ERA 1600–1800 M — NUSANTARA ATLAS

Perubahan:
- Mengaktifkan pilihan Era 2 (1600–1800 M).
- Menambahkan src/data/events2.ts sebagai dataset Era 2 (13 peristiwa).
- Mengubah App agar memakai dataset, rentang tahun, event aktif, panel, dan progres sesuai era.
- Membuat MapView, NowList, dan Timebar menerima data era secara dinamis.
- Menyimpan progres kedua era berdasarkan ID event tanpa saling menimpa.

Penerapan:
1. Ekstrak ZIP proyek.
2. Salin file/folder dari patch ini ke root proyek dengan mempertahankan struktur `src/`.
3. Jika menerapkan file `.patch`, jalankan dari root proyek:
   git apply era-1600-1800.patch

Catatan:
- Era 3 (1800–2000 M) tetap terkunci.
- ZIP sumber yang diberikan tidak menyertakan package.json/konfigurasi build di root, jadi patch ini belum dapat diverifikasi melalui proses build di lingkungan ini.
