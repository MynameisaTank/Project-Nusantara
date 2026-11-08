import { useEffect, useMemo, useState, type CSSProperties } from "react";
import "../styles/cloud-transition.css";

interface Props {
  ready: boolean;
  onDone: () => void;
}

const MIN_HOLD = 900; // awan menutup layar sebentar
const MAX_WAIT = 4500; // kalau peta lambat atau offline
const OPEN_MS = 2400;

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makePuffs() {
  const next = rng(2024);
  const out: { style: CSSProperties; back: boolean }[] = [];
  const layers: { cols: number; rows: number; size: [number, number]; back: boolean }[] = [
    { cols: 5, rows: 4, size: [46, 62], back: true },
    { cols: 7, rows: 5, size: [34, 50], back: false }
  ];
  for (const layer of layers) {
    for (let r = 0; r < layer.rows; r++) {
      for (let c = 0; c < layer.cols; c++) {
        const x = ((c + 0.5 + (next() - 0.5) * 0.8) / layer.cols) * 100;
        const y = ((r + 0.5 + (next() - 0.5) * 0.8) / layer.rows) * 100;
        const size = layer.size[0] + next() * (layer.size[1] - layer.size[0]);
        const side = x >= 50 ? 1 : -1;
        const dx = (x - 50) * 2.2 + side * 28;
        const dy = (y - 50) * 1.4;
        const dist = Math.hypot(x - 50, y - 50) / 70;
        const delay = dist * 0.35 + next() * 0.12 + (layer.back ? 0.12 : 0);
        out.push({
          back: layer.back,
          style: {
            "--x": `${x}%`,
            "--y": `${y}%`,
            "--s": `${size}vmax`,
            "--dx": `${dx}vw`,
            "--dy": `${dy}vh`,
            "--d": `${delay.toFixed(2)}s`
          } as CSSProperties
        });
      }
    }
  }
  return out;
}

export function CloudTransition({ ready, onDone }: Props) {
  const puffs = useMemo(makePuffs, []);
  const [held, setHeld] = useState(false);
  const [forced, setForced] = useState(false);
  const open = (held && ready) || forced;

  useEffect(() => {
    const a = window.setTimeout(() => setHeld(true), MIN_HOLD);
    const b = window.setTimeout(() => setForced(true), MAX_WAIT);
    return () => { window.clearTimeout(a); window.clearTimeout(b); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(onDone, OPEN_MS);
    return () => window.clearTimeout(t);
  }, [open, onDone]);

  return (
    <div className={"cloud-veil" + (open ? " is-open" : "")} role="status" aria-live="polite">
      {puffs.map((p, i) => (
        <span key={i} className={"cloud-puff" + (p.back ? " is-back" : "")} style={p.style} aria-hidden="true" />
      ))}
      <p className="cloud-label">Memuat peta Nusantara…</p>
    </div>
  );
}
