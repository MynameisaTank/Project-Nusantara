import type { CSSProperties } from "react";
import "../../styles/vertical-flow.css";

// harus sama dengan vertical-flow.css
const TINGGI_GAMBAR = 180;
const JARAK_GAMBAR = 10;
const TINGGI_MINIMAL_PARUH = 1200;
/** piksel per detik */
const KECEPATAN = 28;

interface Props {
  images: string[];
  kolom?: number;
  beku?: boolean;
  tinggiGambar?: number;
}

/** Latar gambar 2D yang bergerak vertikal. Tiap kolom berisi dua salinan supaya geraknya tidak putus. */
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
