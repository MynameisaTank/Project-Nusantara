import { useEffect } from "react";

/** Menambah tahun tiap `intervalMs` selama `playing`, berhenti di `max`. */
export function useAutoplay(
  playing: boolean,
  year: number,
  max: number,
  setYear: (updater: (y: number) => number) => void,
  stop: () => void,
  intervalMs = 120
): void {
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setYear((y) => Math.min(max, y + 1)), intervalMs);
    return () => window.clearInterval(t);
  }, [playing, max, intervalMs, setYear]);

  useEffect(() => {
    if (playing && year >= max) stop();
  }, [playing, year, max, stop]);
}
