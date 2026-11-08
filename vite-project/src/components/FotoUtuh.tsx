import { useState, type CSSProperties } from "react";
import { cadanganGambar, gambarResponsif } from "../lib/gambar";
import "../styles/foto-utuh.css";

interface Props {
  src: string;
  alt: string;
  /** lebar tampil kira-kira dalam piksel CSS, untuk memilih ukuran thumbnail */
  lebar: number;
  className?: string;
}

/**
 * Foto yang selalu tampil utuh (tidak terpotong). Sisa ruang diisi versi kecil foto yang sama secara buram.
 * Tombol "Lihat utuh" membuka foto lebih besar; kalau fotonya tinggi, bingkainya bisa digulir.
 */
export function FotoUtuh({ src, alt, lebar, className }: Props) {
  const [penuh, setPenuh] = useState(false);
  const latar = { "--latar": `url(${JSON.stringify(gambarResponsif(src, 120))})` } as CSSProperties;
  return (
    <div className={`foto-utuh${penuh ? " foto-utuh--penuh" : ""}${className ? ` ${className}` : ""}`} style={latar}>
      <div className="foto-utuh__bingkai">
        <img
          src={gambarResponsif(src, lebar)}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={cadanganGambar(src)}
          onClick={() => setPenuh((p) => !p)}
        />
      </div>
      <button type="button" className="foto-utuh__tombol" onClick={() => setPenuh((p) => !p)} aria-expanded={penuh}>
        {penuh ? "Perkecil" : "Lihat utuh"}
      </button>
    </div>
  );
}
