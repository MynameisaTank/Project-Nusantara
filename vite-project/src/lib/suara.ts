/**
 * Efek klik dan musik latar.
 * Klik disintesis lewat Web Audio (tanpa berkas). Musik diputar dari daftar di data/musik.ts dengan crossfade
 * antarsuasana. Browser memblokir audio sebelum ada sentuhan, jadi semuanya baru aktif setelah interaksi pertama.
 */
import { useSyncExternalStore } from "react";
import { MUSIK, type Suasana } from "../data/musik";

const KUNCI = "nusantara.suara";
const VOLUME_MUSIK = 0.35;
const FADE_MS = 1200;

interface Pengaturan {
  musik: boolean;
  efek: boolean;
}

function bacaPengaturan(): Pengaturan {
  try {
    const nilai = JSON.parse(window.localStorage.getItem(KUNCI) ?? "{}") as Partial<Pengaturan>;
    return { musik: nilai.musik ?? true, efek: nilai.efek ?? true };
  } catch {
    return { musik: true, efek: true };
  }
}

let pengaturan: Pengaturan = typeof window === "undefined" ? { musik: true, efek: true } : bacaPengaturan();
const pendengar = new Set<() => void>();

function simpan(baru: Partial<Pengaturan>): void {
  pengaturan = { ...pengaturan, ...baru };
  try {
    window.localStorage.setItem(KUNCI, JSON.stringify(pengaturan));
  } catch {
    /* hanya berlaku untuk sesi ini */
  }
  pendengar.forEach((fn) => fn());
}

export function usePengaturanSuara(): Pengaturan {
  return useSyncExternalStore(
    (fn) => {
      pendengar.add(fn);
      return () => pendengar.delete(fn);
    },
    () => pengaturan,
    () => pengaturan,
  );
}

// ——— Efek klik ———

let konteks: AudioContext | null = null;

function ambilKonteks(): AudioContext | null {
  if (konteks) return konteks;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  konteks = new Ctor();
  return konteks;
}

/** Bunyi "tik" pendek dan lembut. */
export function bunyiKlik(): void {
  if (!pengaturan.efek) return;
  const ctx = ambilKonteks();
  if (!ctx) return;
  if (ctx.state === "suspended") void ctx.resume();
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(880, t);
  osc.frequency.exponentialRampToValueAtTime(520, t + 0.06);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.08, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.09);
}

// ——— Musik ———

interface Pemutar {
  suasana: Suasana;
  audio: HTMLAudioElement;
  indeks: number;
}

let suasanaDiminta: Suasana | null = null;
let sudahBerinteraksi = false;
let aktif: Pemutar | null = null;
/** suasana yang semua lagunya gagal dimuat, supaya tidak dicoba terus-menerus */
const gagal = new Set<Suasana>();

function pudar(audio: HTMLAudioElement, ke: number, selesai?: () => void): void {
  const dari = audio.volume;
  const mulai = performance.now();
  const langkah = (now: number) => {
    const t = Math.min(1, (now - mulai) / FADE_MS);
    audio.volume = dari + (ke - dari) * t;
    if (t < 1) requestAnimationFrame(langkah);
    else selesai?.();
  };
  requestAnimationFrame(langkah);
}

function hentikan(p: Pemutar): void {
  pudar(p.audio, 0, () => {
    p.audio.pause();
    p.audio.removeAttribute("src");
    p.audio.load();
  });
}

function mulaiSuasana(suasana: Suasana): void {
  const daftar = MUSIK[suasana];
  if (daftar.length === 0 || gagal.has(suasana)) return;
  const audio = new Audio();
  audio.preload = "auto";
  audio.volume = 0;
  const p: Pemutar = { suasana, audio, indeks: 0 };
  let gagalBeruntun = 0;
  const putar = (i: number) => {
    p.indeks = i % daftar.length;
    audio.src = daftar[p.indeks]!;
    void audio.play().then(() => {
      gagalBeruntun = 0;
      pudar(audio, VOLUME_MUSIK);
    }, () => undefined);
  };
  audio.addEventListener("ended", () => putar(p.indeks + 1));
  audio.addEventListener("error", () => {
    gagalBeruntun += 1;
    if (gagalBeruntun >= daftar.length) {
      gagal.add(suasana);
      return;
    }
    putar(p.indeks + 1);
  });
  aktif = p;
  putar(0);
}

function terapkan(): void {
  const ingin = sudahBerinteraksi && pengaturan.musik && !document.hidden ? suasanaDiminta : null;
  if (aktif && aktif.suasana === ingin) return;
  if (aktif) {
    hentikan(aktif);
    aktif = null;
  }
  if (ingin) mulaiSuasana(ingin);
}

/** Pilih suasana musik untuk layar yang sedang tampil (null = tanpa musik). */
export function aturSuasana(suasana: Suasana | null): void {
  suasanaDiminta = suasana;
  terapkan();
}

export function setMusik(nyala: boolean): void {
  simpan({ musik: nyala });
  terapkan();
}

export function setEfek(nyala: boolean): void {
  simpan({ efek: nyala });
}

/** Panggil sekali saat aplikasi dimulai. */
export function mulaiSuara(): void {
  if (typeof document === "undefined") return;
  const pertama = () => {
    sudahBerinteraksi = true;
    terapkan();
  };
  document.addEventListener("pointerdown", pertama, { once: true, capture: true });
  document.addEventListener("keydown", pertama, { once: true, capture: true });
  // klik pada tombol, tautan, dan elemen yang berperan sebagai tombol
  document.addEventListener(
    "click",
    (event) => {
      const el = event.target as Element | null;
      if (el?.closest("button, a, [role='button'], summary, select, input[type='range']")) bunyiKlik();
    },
    { capture: true },
  );
  // musik berhenti saat aplikasi tidak dilihat (pindah tab atau aplikasi lain di HP)
  document.addEventListener("visibilitychange", terapkan);
}
