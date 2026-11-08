export type KategoriId = "politik" | "perang" | "perdagangan" | "budaya" | "agama" | "diplomasi";
export type Level = 1 | 2 | 3;
export type Moda = "kuda" | "kafilah" | "perahu" | "jong" | "kapal-eropa" | "kapal-uap" | "kereta" | "pesawat";

export interface Era {
  id: string;
  nama: string;
  mulai: number;
  akhir: number;
  /** tahun saat game dibuka */
  tahunAwal: number;
}

export interface Kategori {
  label: string;
  warna: string;
}
export type KategoriMap = Record<KategoriId, Kategori>;

/** kunci huruf kecil */
export type Glosarium = Record<string, string>;

export interface Kuis {
  tanya: string;
  pilihan: string[];
  benar: number;
  penjelasan: string;
}

export interface Pilihan {
  id: string;
  teks: string;
  konsekuensi: string;
  /** tepat satu pilihan bernilai true */
  historis?: boolean;
}

export interface Keputusan {
  /** mis. "Ken Arok, penguasa Tumapel" */
  peran: string;
  situasi: string;
  pilihan: Pilihan[];
  hasilHistoris: string;
}

/** Seberapa tepat lokasinya; menentukan zoom. */
export type Presisi = "pulau" | "kawasan" | "kota" | "situs";

/** Isi hanya kalau ada dasar sumbernya. */
export interface Rute {
  nama: string;
  titik: [number, number][];
  kepastian: "pasti" | "perkiraan";
}

export interface GambarEvent {
  url: string;
  alt: string;
  sumber: string;
}

export interface SejarahEvent {
  id: string;
  judul: string;
  tahun: string;
  /** rentang tahun peristiwa tampil di peta */
  mulai: number;
  akhir: number;
  lokasi: { nama: string; lat: number; lng: number; presisi?: Presisi };
  rute?: Rute[];
  kategori: KategoriId;
  moda?: Moda;
  penting?: boolean;
  /** field lama era 1, lihat lib/jenis.ts */
  jenis?: "utama" | "sampingan";
  gambar?: GambarEvent;
  ringkas: string;
  cerita: { L1: string; L2: string; L3: string };
  catatan: string;
  sumber: string[];
  kuis: Kuis;
  keputusan: Keputusan;
}

