import { useEffect, useRef } from "react";
import gsap from "gsap";
import { catatGalat } from "../lib/clientLog";
import "../styles/quiz-clip.css";

interface Props {
  /** kotak tombol asal transisi (posisi di viewport) */
  asal: DOMRect;
  /** dipanggil saat layar sudah tertutup penuh, untuk mengganti layar */
  onCover: () => void;
  /** dipanggil saat animasi selesai dan overlay boleh dilepas */
  onDone: () => void;
  /** dua kata yang naik di tengah layar; bawaannya "MODE QUIZ" */
  kata?: [string, string];
}

/** Ukuran huruf per kata supaya kata panjang (mis. MATERI) tetap muat di kanvas 640 satuan. */
const ukuranKata = (kata: string): number => Math.min(190, Math.floor(600 / (kata.length * 0.62)));

/** foto yang mengisi huruf "MODE QUIZ" */
const FOTO = "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/1920px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg";

// ukuran kanvas SVG (satuan viewBox); teks dan foto mengikuti kanvas yang sama
const LEBAR = 640;
const TINGGI = 400;

/**
 * Transisi clip layar penuh (terinspirasi Codrops "Fullscreen Clip Effect"):
 * kotak kecil di posisi tombol tumbuh menjadi layar penuh, teks "MODE QUIZ" yang diisi foto naik satu per satu,
 * lalu layar kuis diganti dan overlay menyusut kembali ke pusat sebelum hilang.
 */
export function QuizClipTransition({ asal, onCover, onDone, kata = ["MODE", "QUIZ"] }: Props) {
  const layarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
    const el = layarRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onCover();
      onDone();
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const kecil = `inset(${asal.top}px ${vw - asal.right}px ${vh - asal.bottom}px ${asal.left}px round 999px)`;
    const kata = el.querySelectorAll<SVGTextElement>(".qzc-kata");

    const tl = gsap.timeline({ onComplete: onDone });
    tl.set(el, { clipPath: kecil })
      .to(el, { clipPath: "inset(0px 0px 0px 0px round 0px)", duration: 1.1, ease: "power4.inOut" })
      .fromTo(kata, { y: 220 }, { y: 0, duration: 0.8, ease: "expo.out", stagger: 0.12 }, "-=0.75")
      .addLabel("tertutup", "+=0.35")
      .add(() => onCover(), "tertutup")
      .to(kata, { y: -220, duration: 0.45, ease: "power2.in", stagger: 0.06 }, "tertutup")
      .to(el, { clipPath: "inset(44% 47% 44% 47% round 23vw)", duration: 1.1, ease: "power4.inOut" }, "tertutup+=0.2")
      .to(el, { opacity: 0, duration: 0.25 }, ">-0.1");

    return () => {
      tl.kill();
    };
    } catch (err) {
      // transisi gagal: layar langsung diganti agar pengguna tidak terjebak di overlay
      catatGalat("transisi:klip-mode-kuis", err);
      onCover();
      onDone();
    }
    // transisi hanya dijalankan sekali saat overlay dibuat
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={layarRef} className="qzc" aria-hidden="true">
      <svg className="qzc-svg" viewBox={`0 0 ${LEBAR} ${TINGGI}`}>
        <defs>
          {/* foto mengisi seluruh kanvas, lalu tampak hanya di dalam huruf */}
          <pattern id="qzc-foto" patternUnits="userSpaceOnUse" x="0" y="0" width={LEBAR} height={TINGGI}>
            <image href={FOTO} x="0" y="0" width={LEBAR} height={TINGGI} preserveAspectRatio="xMidYMid slice" style={{ filter: "brightness(0.82) contrast(1.12)" }} />
          </pattern>
          {/* huruf yang naik dari bawah dipotong di tepi kanvas */}
          <clipPath id="qzc-kanvas">
            <rect x="0" y="0" width={LEBAR} height={TINGGI} />
          </clipPath>
        </defs>
        <g clipPath="url(#qzc-kanvas)">
          <text className="qzc-kata" x={LEBAR / 2} y={160} textAnchor="middle" fill="url(#qzc-foto)" fontSize={ukuranKata(kata[0])}>{kata[0]}</text>
          <text className="qzc-kata" x={LEBAR / 2} y={340} textAnchor="middle" fill="url(#qzc-foto)" fontSize={ukuranKata(kata[1])}>{kata[1]}</text>
        </g>
      </svg>
    </div>
  );
}
