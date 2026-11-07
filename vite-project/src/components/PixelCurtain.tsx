import { useEffect, useMemo, useState } from "react";
import type { CurtainPhase } from "../hooks/useScreenTransition";
import "../styles/pixel-curtain.css";

const CELL = 64;
const SPREAD = 1.0;
const CELL_FADE = 0.35;

interface Props {
  phase: CurtainPhase;
  active: boolean;
  color?: string;
}

export function PixelCurtain({ phase, active, color = "#050606" }: Props) {
  const [size, setSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const measure = () => setSize({
      cols: Math.ceil(window.innerWidth / CELL),
      rows: Math.ceil(window.innerHeight / CELL),
    });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const cells = useMemo(
    () => Array.from({ length: size.cols * size.rows }, (_, index) => ({
      index,
      delay: Math.random() * SPREAD,
      tone: color,
    })),
    [size.cols, size.rows, color],
  );

  const visible = active && phase === "covering";

  return (
    <div className={`pixel-curtain${visible ? " is-on" : ""}`} aria-hidden="true" style={{ gridTemplateColumns: `repeat(${size.cols}, ${CELL}px)` }}>
      {cells.map(({ index, delay, tone }) => (
        <span
          key={index}
          className="pixel-curtain__cell"
          style={{ background: tone, transitionDelay: `${delay}s`, transitionDuration: `${CELL_FADE}s` }}
        />
      ))}
    </div>
  );
}
