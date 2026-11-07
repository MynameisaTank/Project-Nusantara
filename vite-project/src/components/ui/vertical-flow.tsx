import type { CSSProperties } from "react";
import "../../styles/vertical-flow.css";

/** Tinggi satu gambar dan jarak antargambar (px). Harus sama dengan nilai di vertical-flow.css. */
const TINGGI_GAMBAR = 180;
const JARAK_GAMBAR = 10;
/** Setiap paruh kolom dibuat cukup tinggi untuk menutupi layar tertinggi yang umum. */
const TINGGI_MINIMAL_PARUH = 1200;
/** Kecepatan gulir kolom dalam piksel per detik. */
const KECEPATAN = 28;

interface Props {
  images: string[];
  /** jumlah kolom; layar sempit memakai lebih sedikit */
  kolom?: number;
  /** tanpa gerak (perangkat lemah); gambar tetap tampil */
  beku?: boolean;
  /** tinggi satu gambar dalam piksel (bawaan 180) */
  tinggiGambar?: number;
}

/**
 * Latar gambar yang mengalir vertikal. Setiap kolom naik atau turun bergantian, hanya dengan transform translateY
 * (tanpa 3D dan tanpa perhitungan ulang tata letak), jadi ringan untuk GPU ponsel.
 * Setiap kolom berisi dua paruh yang sama; saat paruh pertama tergeser setinggi dirinya, gerakannya tampak tanpa putus.
 */
export function VerticalFlow({ images, kolom = 4, beku = false, tinggiGambar = TINGGI_GAMBAR }: Props) {
  const daftarKolom = Array.from({ length: kolom }, (_, i) => images.filter((_, j) => j % kolom === i));
  const langkah = tinggiGambar + JARAK_GAMBAR;
  return (
    <div
      className={`vflow${beku ? " vflow--beku" : ""}`}
      style={{ "--vflow-tinggi": `${tinggiGambar}px` } as CSSProperties}
      aria-hidden="true"
    >
      {daftarKolom.map((daftar, i) => {
        if (daftar.length === 0) return <div className="vflow__kolom" key={i} />;
        // Daftar diulang sampai paruhnya cukup tinggi, supaya tidak ada celah kosong di bawah layar.
        const ulang = Math.max(1, Math.ceil(TINGGI_MINIMAL_PARUH / (daftar.length * langkah)));
        const paruh = Array.from({ length: ulang }, () => daftar).flat();
        const tinggiParuh = paruh.length * langkah;
        const naik = i % 2 === 0;
        const durasi = tinggiParuh / KECEPATAN;
        return (
          <div className="vflow__kolom" key={i}>
            <div
              className={`vflow__track ${naik ? "vflow__track--naik" : "vflow__track--turun"}`}
              style={{ animationDuration: `${durasi.toFixed(1)}s` } as CSSProperties}
            >
              {[...paruh, ...paruh].map((src, k) => (
                <img key={k} src={src} alt="" loading="lazy" decoding="async" draggable={false} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
