import { useEffect, useRef, useState } from "react";

const MUTE_KEY = "nusantaraBersamaan.musikMati";

export function useMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(() => localStorage.getItem(MUTE_KEY) === "1");

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Browser memblokir autoplay, jadi musik mulai setelah user menyentuh/klik halaman
    const start = () => { audio.play().catch(() => {}); };
    window.addEventListener("pointerdown", start, { once: true });

    return () => {
      window.removeEventListener("pointerdown", start);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  }, [muted]);

  return { muted, toggleMute: () => setMuted((m) => !m) };
}