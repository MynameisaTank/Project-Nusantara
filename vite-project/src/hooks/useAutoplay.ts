import { useEffect } from "react";

/** Menambah `step` tahun tiap `intervalMs` selama `playing`, berhenti di `max`. */
export function useAutoplay(
  playing: boolean,
  year: number,
  max: number,
  setYear: (updater: (y: number) => number) => void,
  stop: () => void,
  intervalMs = 120,
  step = 1
): void {
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setYear((y) => Math.min(max, y + step)), intervalMs);
    return () => window.clearInterval(t);
  }, [playing, max, intervalMs, step, setYear]);

  useEffect(() => {
    if (playing && year >= max) stop();
  }, [playing, year, max, stop]);
}
