import { useEffect, useSyncExternalStore } from "react";
import type { SejarahEvent } from "../types";
import { isUtama } from "./jenis";

/**
 * Bank soal untuk mode kuis. Setiap peristiwa membawa satu soal pilihan ganda (field `kuis`).
 * Bentuk `Soal` dibuat sama dengan yang nanti dihasilkan AI, sehingga soal baru cukup ditambahkan ke bank ini.
 */
export type EraKuis = "semua" | 1 | 2 | 3;
export type Kesulitan = "mudah" | "campur" | "sulit";

export interface Soal {
  id: string;
  era: 1 | 2 | 3;
  /** peristiwa sampingan = mudah, peristiwa utama = sulit (data soal belum punya tingkat kesulitan sendiri) */
  tingkat: "mudah" | "sulit";
  judul: string;
  tahun: string;
  lokasi: string;
  tanya: string;
  pilihan: string[];
  /** indeks jawaban benar, mulai dari 0 */
  benar: number;
  penjelasan: string;
  gambar?: string;
}

function dariEvent(ev: SejarahEvent, era: 1 | 2 | 3): Soal {
  return {
    id: ev.id,
    era,
    tingkat: isUtama(ev) ? "sulit" : "mudah",
    judul: ev.judul,
    tahun: ev.tahun,
    lokasi: ev.lokasi.nama,
    tanya: ev.kuis.tanya,
    pilihan: [...ev.kuis.pilihan],
    benar: ev.kuis.benar,
    penjelasan: ev.kuis.penjelasan,
    gambar: ev.gambar?.url,
  };
}

/**
 * Bank soal dari seluruh peristiwa ketiga peta. Data peristiwa besar, jadi baru diunduh saat kuis dibuka
 * (lewat muatBankSoal) dan tidak ikut dimuat bersama menu utama.
 */
let bank: Soal[] = [];
let bankSiap = false;
let janjiBank: Promise<void> | null = null;
const pendengarBank = new Set<() => void>();

export function muatBankSoal(): Promise<void> {
  janjiBank ??= Promise.all([import("../data/events"), import("../data/events2"), import("../data/events3")])
    .then(([satu, dua, tiga]) => {
      bank = [
        ...satu.EVENTS.map((ev) => dariEvent(ev, 1)),
        ...dua.EVENTS2.map((ev) => dariEvent(ev, 2)),
        ...tiga.EVENTS3.map((ev) => dariEvent(ev, 3)),
      ];
      bankSiap = true;
      pendengarBank.forEach((beri) => beri());
    })
    .catch((galat) => {
      janjiBank = null; // jaringan putus: coba lagi pada pemanggilan berikutnya
      throw galat;
    });
  return janjiBank;
}

/** Memulai pemuatan bank soal dan mengembalikan true setelah siap, supaya komponen tampil ulang dengan data. */
export function useBankSoalSiap(): boolean {
  useEffect(() => {
    void muatBankSoal().catch(() => undefined);
  }, []);
  return useSyncExternalStore(
    (beri) => {
      pendengarBank.add(beri);
      return () => pendengarBank.delete(beri);
    },
    () => bankSiap,
    () => false,
  );
}

function kocok<T>(daftar: T[]): T[] {
  const hasil = [...daftar];
  for (let i = hasil.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = hasil[i] as T;
    const b = hasil[j] as T;
    hasil[i] = b;
    hasil[j] = a;
  }
  return hasil;
}

function saring(era: EraKuis, kesulitan: Kesulitan): Soal[] {
  return bank.filter((s) => (era === "semua" || s.era === era) && (kesulitan === "campur" || s.tingkat === kesulitan));
}

/** Jumlah soal yang tersedia untuk kombinasi era dan kesulitan. */
export function jumlahTersedia(era: EraKuis, kesulitan: Kesulitan): number {
  return saring(era, kesulitan).length;
}

/** Ambil `jumlah` soal acak, dengan urutan pilihan jawaban juga diacak (indeks jawaban benar ikut dipetakan). */
export function ambilSoal(era: EraKuis, kesulitan: Kesulitan, jumlah: number): Soal[] {
  return kocok(saring(era, kesulitan)).slice(0, jumlah).map((s) => {
    const urutan = kocok(s.pilihan.map((_, i) => i));
    return { ...s, pilihan: urutan.map((i) => s.pilihan[i] ?? ""), benar: urutan.indexOf(s.benar) };
  });
}
