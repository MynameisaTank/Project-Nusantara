import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import "../styles/quiz-pergantian.css";
import { amankan, catatGalat } from "../lib/clientLog";
import { layarKecil } from "../lib/layar";

/** Transisi antarsoal, diadaptasi dari Codrops "SVG Path Page Transition". Arahnya bergantian. */
export type Arah = "kanan" | "kiri" | "bawah" | "atas";

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

// Di ponsel: panel bergeser lewat transform (dijalankan compositor), bukan morph path SVG yang digambar ulang tiap frame.
const GESER: Record<Arah, [string, string, string]> = {
  kanan: ["translateX(-100%)", "translateX(0)", "translateX(100%)"],
  kiri: ["translateX(100%)", "translateX(0)", "translateX(-100%)"],
  bawah: ["translateY(-100%)", "translateY(0)", "translateY(100%)"],
  atas: ["translateY(100%)", "translateY(0)", "translateY(-100%)"],
};

export interface PergantianHandle {
  jalankan: (arah: Arah, onCover: () => void, onSelesai: () => void) => void;
}

export const PergantianSoal = forwardRef<PergantianHandle>(function PergantianSoal(_props, ref) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelAnimRef = useRef<Animation | null>(null);

  useImperativeHandle(ref, () => ({
    jalankan(arah, onCoverMentah, onSelesaiMentah) {
      const onCover = amankan("transisi:pergantian-soal:cover", onCoverMentah);
      const onSelesai = amankan("transisi:pergantian-soal:selesai", onSelesaiMentah);
      try {
      const panel = panelRef.current;
      if (panel && typeof panel.animate === "function" && layarKecil() && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        panelAnimRef.current?.cancel();
        const [awal, tengah, akhir] = GESER[arah];
        const masuk = panel.animate([{ transform: awal }, { transform: tengah }], { duration: 420, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" });
        panelAnimRef.current = masuk;
        masuk.finished.then(() => {
          onCover();
          requestAnimationFrame(() => requestAnimationFrame(() => {
            const keluar = panel.animate([{ transform: tengah }, { transform: akhir }], { duration: 480, easing: "cubic-bezier(0.33, 1, 0.68, 1)", fill: "forwards" });
            panelAnimRef.current = keluar;
            keluar.finished.then(onSelesai, () => undefined);
          }));
        }, () => undefined);
        return;
      }
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
      // untuk arah vertikal, lebar dan tinggi ditukar supaya layar tetap tertutup
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
    <>
    <div ref={panelRef} className="qzp-panel" aria-hidden="true" />
    <svg ref={svgRef} className="qzp" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path ref={pathRef} className="qzp-path" vectorEffect="non-scaling-stroke" d={PATH.kosong} />
    </svg>
    </>
  );
});
