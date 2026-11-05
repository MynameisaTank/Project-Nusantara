import type { Era, KategoriMap, Glosarium } from "../types";

/* Data era. Edit file ini untuk mengganti era atau menambah kategori & istilah glosarium. */

export const ERA: Era = {
  id: "era-1",
  nama: "Dari Singhasari ke Majapahit",
  mulai: 1200,
  akhir: 1400,
  tahunAwal: 1280 // tahun yang tampil saat game dibuka
};

export const KATEGORI: KategoriMap = {
  politik:     { label: "Politik", warna: "#8a5a2b" },
  perang:      { label: "Perang", warna: "#a63d2f" },
  perdagangan: { label: "Perdagangan", warna: "#2f6f8f" },
  budaya:      { label: "Budaya", warna: "#6b4f9e" }
};

/* Istilah yang bisa diklik di level Menengah dan Lanjut.
   Kunci harus huruf kecil. Istilah otomatis ditandai di teks cerita. */
export const GLOSARIUM: Glosarium = {
  "ekspedisi": "Perjalanan rombongan (pasukan, pedagang, atau peneliti) ke tempat yang jauh untuk tujuan tertentu.",
  "aliansi": "Persekutuan antara dua pihak atau lebih untuk saling membantu.",
  "diplomatik": "Berkaitan dengan hubungan dan perundingan antarnegara, bukan lewat perang.",
  "kakawin": "Puisi panjang berbahasa Jawa Kuno yang gayanya dipengaruhi puisi India.",
  "nisan": "Batu penanda makam.",
  "hijriah": "Penanggalan Islam yang dihitung sejak hijrah Nabi Muhammad ke Madinah pada 622 Masehi.",
  "upeti": "Barang atau hasil bumi yang diserahkan wilayah yang lebih lemah kepada penguasa yang lebih kuat.",
  "dinasti": "Garis keturunan raja-raja yang memerintah secara berurutan.",
  "tradisi lisan": "Cerita yang diwariskan dari mulut ke mulut dan belum tentu dicatat sejak awal.",
  "monopoli": "Keadaan ketika hanya satu pihak yang menguasai suatu barang atau perdagangan.",
  "islamisasi": "Proses masuk dan menyebarnya agama Islam di suatu wilayah.",
  "prasasti": "Tulisan kuno pada batu atau logam yang mencatat suatu peristiwa.",
  "kolano": "Gelar raja di Maluku Utara pada masa awal.",
  "mahapatih": "Pejabat tertinggi di bawah raja atau ratu, semacam perdana menteri.",
  "wreddamantri": "Menteri senior dalam pemerintahan Majapahit.",
  "kidung": "Puisi Jawa Tengahan yang sering dipakai untuk menceritakan kisah dan peristiwa; sebagian kidung ditulis jauh sesudah peristiwa yang diceritakannya.",
  "babad": "Tulisan sejarah tradisional Jawa dan Bali yang memadukan peristiwa nyata dengan legenda.",
  "arca": "Patung, biasanya patung dewa atau tokoh yang dihormati.",
  "propaganda": "Penyebaran gambaran tertentu secara sengaja untuk membentuk pandangan orang, misalnya dengan memuji penguasa.",
  "bodhisattva": "Dalam ajaran Buddha, makhluk yang menunda pencapaian pencerahannya sendiri demi menolong makhluk lain.",
  "intrik": "Upaya rahasia atau persekongkolan untuk menjatuhkan lawan politik.",
  "saptaprabhu": "Dewan pertimbangan agung Majapahit yang beranggotakan kerabat dekat raja.",
  "manca nagara": "Daerah-daerah di luar pusat istana Majapahit yang dipimpin oleh pejabat menteri.",
  "syahbandar": "Pejabat pengawas pelabuhan yang mengurus perdagangan dan kedatangan kapal asing."
};
