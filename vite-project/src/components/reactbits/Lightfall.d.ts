import type { CSSProperties, ReactElement } from "react";

export interface LightfallProps {
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  streakCount?: number;
  streakWidth?: number;
  streakLength?: number;
  glow?: number;
  density?: number;
  twinkle?: number;
  zoom?: number;
  backgroundGlow?: number;
  headGlow?: number;
  depth?: number;
  bloom?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
  mouseDampening?: number;
  lens?: number;
  holdToWarp?: boolean;
  intro?: boolean;
  fade?: number;
  lightMode?: boolean;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  paused?: boolean;
  dpr?: number;
  className?: string;
  style?: CSSProperties;
  /** dipanggil bila efek gagal dibuat (WebGL2, shader, framebuffer); detail juga dicatat di console */
  onError?: (error: Error) => void;
  /** Daftar palet warna streak (tiap palet = array warna) yang berganti perlahan dan berulang. */
  colorCycle?: string[][];
  /** Warna cahaya di atas untuk tiap palet pada colorCycle (jumlahnya sama). */
  backgroundCycle?: string[];
  /** Lama satu putaran penuh siklus warna, dalam detik. */
  cycleSeconds?: number;
}

declare const Lightfall: (props: LightfallProps) => ReactElement;
export default Lightfall;
