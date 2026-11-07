/**
 * Atur latar marquee agar menutupi seluruh layar.
 *
 * ThreeDMarquee menggambar bidang miring berbentuk pita diagonal yang ukurannya tetap (1720px, lalu diskalakan
 * 0.5, 0.75, atau 1 menurut lebar layar). Diukur dengan elementsFromPoint, pita itu hanya menutup sekitar 43%
 * layar ponsel potret, 88% laptop, dan 82% layar 1080p. Dua penyesuaian dari luar komponen memperbaikinya:
 * - layar potret memutar wadah 90 derajat, sehingga marquee "melihat" layar lanskap yang cocok dengan bentuk pitanya;
 * - skala wadah ditambah sesuai sisi terpanjang layar.
 * Cakupan setelah penyesuaian ini sekitar 92–100% di semua ukuran layar yang diuji (ponsel 360px sampai 2560px).
 */
import { useEffect, useState } from "react";

export interface PengaturanMarquee {
  /** layar potret: wadah diputar 90 derajat */
  putar: boolean;
  /** faktor skala tambahan di atas skala bawaan komponen */
  skala: number;
  lebar: number;
  tinggi: number;
}

/** Skala bawaan ThreeDMarquee: scale-50 di bawah 640px, scale-75 di bawah 1024px, selain itu scale-100. */
const skalaBawaan = (lebar: number): number => (lebar < 640 ? 0.5 : lebar < 1024 ? 0.75 : 1);

export function hitungMarquee(lebar: number, tinggi: number): PengaturanMarquee {
  const panjang = Math.max(lebar, tinggi);
  const efektif = Math.max(1, panjang / 960);
  return { putar: tinggi > lebar, skala: efektif / skalaBawaan(lebar), lebar, tinggi };
}

/** Pengaturan marquee untuk ukuran jendela sekarang; dihitung ulang saat layar diputar atau jendela diubah. */
export function useMarquee(): PengaturanMarquee {
  const [nilai, setNilai] = useState(() => hitungMarquee(window.innerWidth, window.innerHeight));
  useEffect(() => {
    let rangka = 0;
    const ukur = () => {
      cancelAnimationFrame(rangka);
      rangka = requestAnimationFrame(() => {
        const baru = hitungMarquee(window.innerWidth, window.innerHeight);
        setNilai((lama) => (lama.putar === baru.putar && lama.lebar === baru.lebar && lama.tinggi === baru.tinggi ? lama : baru));
      });
    };
    window.addEventListener("resize", ukur);
    return () => {
      window.removeEventListener("resize", ukur);
      cancelAnimationFrame(rangka);
    };
  }, []);
  return nilai;
}
