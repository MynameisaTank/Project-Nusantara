import { useEffect, useRef } from "react";
import { catatGalat } from "../lib/clientLog";
import "../styles/quiz-clip.css";

interface Props {
  asal: DOMRect;
  onCover: () => void;
  onDone: () => void;
  kata?: [string, string];
}

// supaya kata panjang seperti MATERI tetap muat
const ukuranKata = (kata: string): number => Math.min(190, Math.floor(600 / (kata.length * 0.62)));

const FOTO = "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/960px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg";

const LEBAR = 640;
const TINGGI_BARIS = 200;

const MASUK = "cubic-bezier(0.76, 0, 0.24, 1)";
const KELUAR_TEKS = "cubic-bezier(0.16, 1, 0.3, 1)";

const duaFrame = (fn: () => void) => requestAnimationFrame(() => requestAnimationFrame(fn));

/**
 * Transisi layar penuh dari posisi tombol, terinspirasi Codrops "Fullscreen Clip Effect".
 * Hanya transform dan opacity lewat Web Animations, jadi dijalankan compositor dan tetap mulus
 * walaupun main thread sibuk memuat layar berikutnya.
 */
export function QuizClipTransition({ asal, onCover, onDone, kata = ["MODE", "QUIZ"] }: Props) {
  const layarRef = useRef<HTMLDivElement>(null);
  const bulatRef = useRef<HTMLDivElement>(null);

  // Lingkaran berpusat di tombol, cukup besar untuk menutupi sudut layar terjauh.
  const cx = asal.left + asal.width / 2;
  const cy = asal.top + asal.height / 2;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1000;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const diameter = 2 * Math.ceil(Math.max(Math.hypot(cx, cy), Math.hypot(vw - cx, cy), Math.hypot(cx, vh - cy), Math.hypot(vw - cx, vh - cy))) + 4;
  const skalaAwal = Math.max(0.01, Math.min(asal.width, asal.height) / diameter);

  useEffect(() => {
    const layar = layarRef.current;
    const bulat = bulatRef.current;
    let batal = false;
    const animasi: Animation[] = [];
    const selesaiSemua = () => {
      if (batal) return;
      onCover();
      onDone();
    };
    try {
      if (!layar || !bulat || typeof bulat.animate !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        selesaiSemua();
        return;
      }
      const kataEl = Array.from(layar.querySelectorAll<SVGSVGElement>(".qzc-kata"));

      const tutup = bulat.animate([{ transform: `scale(${skalaAwal})` }, { transform: "scale(1)" }], { duration: 750, easing: MASUK, fill: "forwards" });
      animasi.push(tutup);
      kataEl.forEach((el, i) => {
        animasi.push(el.animate([{ transform: "translateY(110%)" }, { transform: "translateY(0)" }], { duration: 650, delay: 350 + i * 100, easing: KELUAR_TEKS, fill: "forwards" }));
      });

      Promise.all(animasi.map((a) => a.finished))
        .then(() => new Promise((r) => window.setTimeout(r, 250)))
        .then(() => {
          if (batal) return;
          onCover();
          // Lepas overlay setelah layar baru sempat dirender.
          duaFrame(() => {
            if (batal) return;
            const keluar: Animation[] = kataEl.map((el, i) =>
              el.animate([{ transform: "translateY(0)" }, { transform: "translateY(-110%)" }], { duration: 380, delay: i * 60, easing: "cubic-bezier(0.5, 0, 0.75, 0)", fill: "forwards" }),
            );
            keluar.push(layar.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, delay: 200, easing: "ease-out", fill: "forwards" }));
            animasi.push(...keluar);
            Promise.all(keluar.map((a) => a.finished)).then(() => { if (!batal) onDone(); }, () => undefined);
          });
        }, () => undefined);
    } catch (err) {
      // kalau gagal, langsung ganti layar supaya tidak terjebak di overlay
      catatGalat("transisi:klip-mode-kuis", err);
      selesaiSemua();
    }
    return () => {
      batal = true;
      animasi.forEach((a) => a.cancel());
    };
    // transisi hanya dijalankan sekali saat overlay dibuat
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={layarRef} className="qzc" aria-hidden="true">
      <div
        ref={bulatRef}
        className="qzc-bulat"
        style={{ left: cx - diameter / 2, top: cy - diameter / 2, width: diameter, height: diameter, transform: `scale(${skalaAwal})` }}
      />
      <div className="qzc-teks">
        {kata.map((k, i) => (
          <div className="qzc-baris" key={i}>
            <svg className="qzc-kata" viewBox={`0 0 ${LEBAR} ${TINGGI_BARIS}`}>
              <defs>
                {/* satu foto dibagi ke dua baris, jadi baris kedua digeser ke atas */}
                <pattern id={`qzc-foto-${i}`} patternUnits="userSpaceOnUse" x="0" y={-TINGGI_BARIS * i} width={LEBAR} height={TINGGI_BARIS * 2}>
                  <image href={FOTO} x="0" y="0" width={LEBAR} height={TINGGI_BARIS * 2} preserveAspectRatio="xMidYMid slice" />
                </pattern>
              </defs>
              <text x={LEBAR / 2} y={160} textAnchor="middle" fill={`url(#qzc-foto-${i})`} fontSize={ukuranKata(k)}>{k}</text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
