import { useEffect, useRef, useState } from "react";

export type Screen = "menu" | "eras" | "game" | "materi" | "kuis";
export type CurtainPhase = "idle" | "covering" | "revealing";
export type CurtainVariant = "default" | "pixel";

const REDUCED = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const timing = (variant: CurtainVariant) => {
  if (REDUCED()) return { cover: 0, reveal: 0 };
  return variant === "pixel" ? { cover: 1350, reveal: 1350 } : { cover: 320, reveal: 480 };
};

/** Ganti layar lewat "tirai" yang menutup lalu membuka, supaya pergantian tidak terasa mendadak. */
export function useScreenTransition(initial: Screen) {
  const [screen, setScreen] = useState<Screen>(initial);
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [variant, setVariant] = useState<CurtainVariant>("default");
  const pendingRef = useRef<Screen | null>(null);

  const goTo = (next: Screen, nextVariant: CurtainVariant = "default") => {
    if (next === screen && phase === "idle") return;
    pendingRef.current = next;
    setVariant(nextVariant);
    setPhase("covering");
  };

  /** Ganti layar langsung tanpa tirai; dipakai transisi yang punya animasi sendiri (mis. clip ke mode kuis). */
  const cut = (next: Screen) => {
    pendingRef.current = null;
    setPhase("idle");
    setScreen(next);
  };

  useEffect(() => {
    if (phase === "covering") {
      const t = window.setTimeout(() => {
        if (pendingRef.current) setScreen(pendingRef.current);
        pendingRef.current = null;
        setPhase("revealing");
      }, timing(variant).cover);
      return () => window.clearTimeout(t);
    }
    if (phase === "revealing") {
      const t = window.setTimeout(() => setPhase("idle"), timing(variant).reveal);
      return () => window.clearTimeout(t);
    }
  }, [phase, variant]);

  return { screen, goTo, cut, curtainPhase: phase, curtainVariant: variant };
}
