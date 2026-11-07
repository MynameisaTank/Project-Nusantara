import { useEffect, useState } from "react";
import DriftWall from "./reactbits/DriftWall";
import { FAKTA_SEJARAH } from "../data/faktaSejarah";
import { useGrafisHemat } from "../lib/grafis";
import { useLayarKecil } from "../lib/layar";
import "../styles/loading-screen.css";

/** Gambar bersejarah yang sama dengan galeri menu utama, dipakai sebagai latar yang bergerak. */
const LATAR_ITEMS = [
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Siddharta_Gautama_Borobudur.jpg/500px-Siddharta_Gautama_Borobudur.jpg", title: "Warisan Hindu-Buddha" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg/500px-Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg", title: "Sriwijaya" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Prajnaparamita_Java.jpg/500px-Prajnaparamita_Java.jpg", title: "Singhasari" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Majapahit%2C_Piggy_Bank.jpg/500px-Majapahit%2C_Piggy_Bank.jpg", title: "Majapahit" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Borobudur_ship.JPG/500px-Borobudur_ship.JPG", title: "Jalur Rempah" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg/500px-COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg", title: "Kolonialisme" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/500px-Indonesia_declaration_of_independence_17_August_1945.jpg", title: "Proklamasi" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Indonesian_flag_raised_17_August_1945.jpg/500px-Indonesian_flag_raised_17_August_1945.jpg", title: "Indonesia Merdeka" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/500px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg", title: "Candi Bajangratu" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/COLLECTIE_TROPENMUSEUM_Olieverfschilderij_voorstellende_het_Kasteel_Batavia_gezien_van_Kali_Besar_west_met_op_de_voorgrond_de_vismarkt_TMnr_118-167.jpg/500px-COLLECTIE_TROPENMUSEUM_Olieverfschilderij_voorstellende_het_Kasteel_Batavia_gezien_van_Kali_Besar_west_met_op_de_voorgrond_de_vismarkt_TMnr_118-167.jpg", title: "Batavia, Kali Besar" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/De_handelsloge_van_de_VOC_in_Hougly_in_Bengalen_Rijksmuseum_SK-A-4282.jpeg/500px-De_handelsloge_van_de_VOC_in_Hougly_in_Bengalen_Rijksmuseum_SK-A-4282.jpeg", title: "Pos Dagang VOC" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/TC_223_Majapahit_terracotta_head_of_Gajah_Mada.JPG/500px-TC_223_Majapahit_terracotta_head_of_Gajah_Mada.JPG", title: "Gajah Mada" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Wringin_Lawang%2C_Trowulan.jpg/500px-Wringin_Lawang%2C_Trowulan.jpg", title: "Gapura Wringin Lawang" }
];

interface Props {
  label?: string;
  /** progres pemasangan aset grafis (lihat lib/persiapan.ts) */
  progres?: { selesai: number; total: number; keterangan: string } | null;
  /** baris keterangan kecil di bawah label, mis. mode grafis yang dipakai */
  detail?: string;
  /**
   * Tanpa dinding gambar bergerak, hanya latar gradien. Bawaannya mengikuti tingkat grafis: perangkat lemah tidak
   * memakai dinding itu karena ±100 gambar 3D beranimasi berebut CPU dengan pengunduhan data yang sedang berjalan.
   */
  polos?: boolean;
}

/** Lama minimum layar ini tampil; `App.tsx` menunda impor peta selama durasi yang sama. */
export const MIN_LOADING_MS = 8000;
const GANTI_FAKTA_MS = 2200;

export function LoadingScreen({ label = "Memuat peta Nusantara…", progres = null, detail, polos }: Props) {
  const hemat = useGrafisHemat();
  const kecil = useLayarKecil();
  const tanpaLatar = polos ?? hemat;
  const [index, setIndex] = useState(() => Math.floor(Math.random() * FAKTA_SEJARAH.length));
  const [tampak, setTampak] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setTampak(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % FAKTA_SEJARAH.length);
        setTampak(true);
      }, 280);
    }, GANTI_FAKTA_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={tanpaLatar ? "loading-screen loading-screen--polos" : "loading-screen"} role="status" aria-live="polite">
      {!tanpaLatar && <div className="loading-backdrop" aria-hidden="true">
        <DriftWall
          items={LATAR_ITEMS}
          // Layar sempit: lebih sedikit kolom (kira-kira sepertiga gambar lebih sedikit) dan tanpa filter abu-abu per gambar
          columns={kecil ? 5 : 8}
          tileWidth={140}
          tileHeight={98}
          gap={12}
          tilt={10}
          turn={-8}
          perspective={1100}
          depth={80}
          speed={16}
          direction="up"
          variance={0.35}
          parallax={0.2}
          lift={28}
          fade={0.7}
          dim={0.4}
          grayscale={!kecil}
          overlayColor="#0f1715"
        />
      </div>}
      <div className="loading-voyage" aria-hidden="true">
        <svg className="loading-ship" viewBox="0 0 32 32">
          <path d="M4 20h24l-3.5 6H7.5Z" fill="currentColor" />
          <path d="M12 20V5M20 20V7" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M8 8h8v6H8ZM14 10h7v5h-7Z" fill="currentColor" />
        </svg>
        <span className="loading-horizon" />
      </div>
      <p className="loading-label">{label}</p>
      {detail && <p className="loading-detail">{detail}</p>}
      {progres && progres.total > 0 && (
        <div className="loading-pasang" role="progressbar" aria-label="Pemasangan aset grafis" aria-valuemin={0} aria-valuemax={progres.total} aria-valuenow={progres.selesai}>
          <span style={{ width: `${Math.round((progres.selesai / progres.total) * 100)}%` }} />
        </div>
      )}
      <p className={`loading-fact ${tampak ? "is-visible" : ""}`}>{FAKTA_SEJARAH[index]}</p>
      {/* Bilah animasi berdurasi tetap hanya untuk layar memuat biasa; saat pemasangan aset, bilah di atas yang dipakai. */}
      {!progres && (
        <div className="loading-progress" aria-hidden="true">
          <span className="loading-progress-fill" style={{ animationDuration: `${MIN_LOADING_MS}ms` }} />
        </div>
      )}
    </div>
  );
}
