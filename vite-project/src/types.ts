export type KategoriId = "politik" | "perang" | "perdagangan" | "budaya" | "agama" | "diplomasi";
export type Level = 1 | 2 | 3;
export type Moda = "kuda" | "kafilah" | "perahu" | "jong" | "kapal-eropa" | "kapal-uap" | "kereta" | "pesawat";

export interface Era {
  id: string;
  nama: string;
  mulai: number;
  akhir: number;
  /** tahun yang tampil saat game dibuka */
  tahunAwal: number;
}

export interface Kategori {
  label: string;
  warna: string;
}
export type KategoriMap = Record<KategoriId, Kategori>;

/** Kunci harus huruf kecil. */
export type Glosarium = Record<string, string>;

export interface Kuis {
  tanya: string;
  pilihan: string[];
  /** indeks jawaban benar, mulai dari 0 */
  benar: number;
  penjelasan: string;
}

export interface Pilihan {
  id: string;
  teks: string;
  /** akibat yang masuk akal jika pemain memilih ini */
  konsekuensi: string;
  /** tepat satu pilihan per keputusan bernilai true */
  historis?: boolean;
}

export interface Keputusan {
  /** peran pemain, mis. "Ken Arok, penguasa Tumapel" */
  peran: string;
  situasi: string;
  pilihan: Pilihan[];
  /** apa yang benar-benar terjadi menurut sumber sejarah */
  hasilHistoris: string;
}

/** Seberapa tepat koordinat diketahui. Menentukan zoom; kosong = zoom bawaan. */
export type Presisi = "pulau" | "kawasan" | "kota" | "situs";

/** Jalur perjalanan/ekspedisi/perdagangan. Isi hanya jika ada dasar sumber. */
export interface Rute {
  nama: string;
  titik: [number, number][];
  kepastian: "pasti" | "perkiraan";
}

/** Gambar ilustrasi yang tampil saat panel peristiwa dibuka. */
export interface GambarEvent {
  url: string;
  alt: string;
  /** Kredit/sumber gambar, ditampilkan kecil di bawah gambar. */
  sumber: string;
}

export interface SejarahEvent {
  id: string;
  judul: string;
  /** teks tahun untuk pemain */
  tahun: string;
  /** rentang tahun event tampil di peta */
  mulai: number;
  akhir: number;
  lokasi: { nama: string; lat: number; lng: number; presisi?: Presisi };
  rute?: Rute[];
  kategori: KategoriId;
  /** kendaraan perjalanan antarperistiwa di peta; jika kosong diambil dari judul dan kategori */
  moda?: Moda;
  /** isi true untuk peristiwa penting: panel detailnya diberi border cahaya */
  penting?: boolean;
  /** field lama era 1 ("utama" | "sampingan"); dibaca oleh isUtama di lib/jenis.ts */
  jenis?: "utama" | "sampingan";
  /** gambar ilustrasi, saat ini hanya diisi untuk peristiwa penting/utama */
  gambar?: GambarEvent;
  ringkas: string;
  cerita: { L1: string; L2: string; L3: string };
  catatan: string;
  sumber: string[];
  kuis: Kuis;
  keputusan: Keputusan;
}

