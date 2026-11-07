import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import "../styles/quiz-pergantian.css";
import { amankan, catatGalat } from "../lib/clientLog";

/**
 * Transisi antar soal, diadaptasi dari Codrops "SVG Path Page Transition (Horizontal)".
 * Path SVG menutup layar dari satu sisi, lalu meninggalkan layar ke sisi lain. Empat arah dipakai bergantian:
 * kanan (masuk dari kiri), bawah (masuk dari atas), kiri (masuk dari kanan), atas (masuk dari bawah).
 */
export type Arah = "kanan" | "kiri" | "bawah" | "atas";

// rotasi dan cermin untuk tiap arah; arah vertikal memutar path horizontal 90°
const PUTAR: Record<Arah, { rotasi: number; cermin: 1 | -1 }> = {
  kanan: { rotasi: 0, cermin: 1 },
  kiri: { rotasi: 0, cermin: -1 },
  bawah: { rotasi: 90, cermin: 1 },
  atas: { rotasi: -90, cermin: 1 },
};

const PATH = {
  kosong: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
  masukAntara: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
  penuh: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z",
  keluarPenuh: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
  keluarAntara: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
  keluarKosong: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z",
};

export interface PergantianHandle {
  /** mainkan transisi; `onCover` dipanggil saat layar tertutup penuh, `onSelesai` saat transisi usai */
  jalankan: (arah: Arah, onCover: () => void, onSelesai: () => void) => void;
}

export const PergantianSoal = forwardRef<PergantianHandle>(function PergantianSoal(_props, ref) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useImperativeHandle(ref, () => ({
    jalankan(arah, onCoverMentah, onSelesaiMentah) {
      // galat di callback dicatat; alur tetap diteruskan agar kuis tidak macet
      const onCover = amankan("transisi:pergantian-soal:cover", onCoverMentah);
      const onSelesai = amankan("transisi:pergantian-soal:selesai", onSelesaiMentah);
      try {
      const svg = svgRef.current;
      const path = pathRef.current;
      if (!svg || !path) {
        onCover();
        onSelesai();
        return;
      }
      tlRef.current?.kill();

      const { rotasi, cermin } = PUTAR[arah];
      const vertikal = Math.abs(rotasi) === 90;
      // kanvas diputar: untuk arah vertikal lebar dan tinggi ditukar agar layar tetap tertutup penuh
      gsap.set(svg, {
        width: vertikal ? "100vh" : "100vw",
        height: vertikal ? "100vw" : "100vh",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        rotation: rotasi,
        scaleX: cermin,
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        onCover();
        onSelesai();
        return;
      }

      // durasi dipersingkat dibanding versi asli (sekitar sepertiganya) agar pergantian soal terasa cepat
      const tl = gsap.timeline({ onComplete: onSelesai });
      tl.set(path, { attr: { d: PATH.kosong } })
        .to(path, { duration: 0.5, ease: "power3.in", attr: { d: PATH.masukAntara } }, 0)
        .to(path, { duration: 0.12, ease: "power1", attr: { d: PATH.penuh }, onComplete: onCover }, ">")
        .set(path, { attr: { d: PATH.keluarPenuh } })
        .to(path, { duration: 0.09, ease: "sine.in", attr: { d: PATH.keluarAntara } })
        .to(path, { duration: 0.6, ease: "power4", attr: { d: PATH.keluarKosong } });
      tlRef.current = tl;
      } catch (err) {
        catatGalat("transisi:pergantian-soal", err);
        onCover();
        onSelesai();
      }
    },
  }));

  return (
    <svg ref={svgRef} className="qzp" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path ref={pathRef} className="qzp-path" vectorEffect="non-scaling-stroke" d={PATH.kosong} />
    </svg>
  );
});
