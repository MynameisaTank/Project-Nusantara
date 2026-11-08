/**
 * Skala dan putaran marquee 3D supaya menutupi seluruh layar. Bentuk aslinya pita diagonal yang hanya
 * menutup sebagian layar; di layar tegak wadahnya diputar 90 derajat.
 */
import { useEffect, useState } from "react";

export interface PengaturanMarquee {
  putar: boolean;
  skala: number;
  lebar: number;
  tinggi: number;
}

// Sama dengan kelas scale-50, scale-75, dan scale-100 di komponen marquee.
const skalaBawaan = (lebar: number): number => (lebar < 640 ? 0.5 : lebar < 1024 ? 0.75 : 1);

export function hitungMarquee(lebar: number, tinggi: number): PengaturanMarquee {
  const panjang = Math.max(lebar, tinggi);
  const efektif = Math.max(1, panjang / 960);
  return { putar: tinggi > lebar, skala: efektif / skalaBawaan(lebar), lebar, tinggi };
}

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
