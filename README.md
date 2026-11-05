# Nusantara Bersamaan (prototype v0.2, Vite + TypeScript)

Game edukasi sejarah Nusantara: peta 2D, slider tahun, dan banyak peristiwa yang terjadi bersamaan.

## Menjalankan

Butuh Node.js 20.19 atau lebih baru.

```bash
npm install
npm run dev        # server pengembangan (http://localhost:5173)
npm run build      # cek tipe + build ke folder dist/
npm run preview    # coba hasil build
```

Peta dasar (tile CARTO) tetap dimuat dari internet.

## Struktur

| Path | Fungsi |
|---|---|
| `index.html` | Kerangka halaman |
| `src/main.ts` | Orkestrasi: state -> peta, daftar, panel, slider |
| `src/types.ts` | Semua tipe (`SejarahEvent`, `Era`, `Kategori`, ...) |
| `src/state.ts` | State bersama + helper |
| `src/map.ts` | Peta Leaflet dan penanda |
| `src/ui/` | `panel.ts`, `nowList.ts`, `story.ts` (glosarium) |
| `src/lib/` | `dom.ts` (helper), `store.ts` (localStorage) |
| `src/data/events.ts` | **Semua event sejarah** (file yang paling sering diedit) |
| `src/data/era.ts` | Era, kategori, glosarium |
| `src/styles/style.css` | Tampilan (tema perkamen) |

## Menambah event

Salin satu blok di `src/data/events.ts`. TypeScript akan memberi tahu jika ada field yang kurang atau salah
(mis. `kategori` yang tidak dikenal). Kategori baru: tambahkan ke `KategoriId` di `src/types.ts` dan ke `KATEGORI` di `src/data/era.ts`.

## Catatan

- Isi sejarah adalah draf awal. **Periksa ulang fakta dan sumbernya** sebelum dipakai murid.
- Progres misi tersimpan di browser (localStorage).
