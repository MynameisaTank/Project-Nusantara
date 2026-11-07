import type { Moda, SejarahEvent } from "../types";

export const MODA_LABEL: Record<Moda, string> = {
  kuda: "Pasukan berkuda",
  kafilah: "Kafilah unta",
  perahu: "Perahu nelayan",
  jong: "Kapal dagang Nusantara",
  "kapal-eropa": "Kapal layar Eropa",
  "kapal-uap": "Kapal uap",
  kereta: "Kereta api",
  pesawat: "Pesawat terbang"
};

const ATURAN_JUDUL: [RegExp, Moda][] = [
  [/VOC|Belanda|Portugis|Inggris|Spanyol|Eropa|Armada|Magellan/i, "kapal-eropa"],
  [/Ekspedisi|pelayaran|Tiongkok|Yuan|Ming|Cheng Ho|Sanfoqi|Mongol|Melaka|Pasai|pelabuhan/i, "jong"],
  [/pedalaman|Pagaruyung|Minangkabau|dataran tinggi/i, "kafilah"]
];

const MODA_KATEGORI: Record<string, Moda> = {
  politik: "kuda",
  perang: "kuda",
  perdagangan: "jong",
  diplomasi: "kafilah",
  budaya: "perahu",
  agama: "perahu"
};

export function modaUntuk(ev: SejarahEvent): Moda {
  if (ev.moda) return ev.moda;
  const cocok = ATURAN_JUDUL.find(([pola]) => pola.test(ev.judul));
  if (cocok) return cocok[1];
  return MODA_KATEGORI[ev.kategori] ?? "perahu";
}

export const MODA_SVG: Record<Moda, string> = {
  kuda: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><circle cx="22.5" cy="6.5" r="2.4"/><path d="M6 17c0-2 1.6-3.4 3.8-3.4h7.2l3.4-4.6 2.6 1.1-1.5 3.6c.8.9 1 2 .5 3.2l-.9 1.3h-1.6l-.6 5.6h-2l.2-5.6h-5.2l-.5 5.6h-2l.4-5.6c-2.4-.4-3.8-1.2-3.8-2.6Z"/></svg>`,
  kafilah: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><ellipse cx="13" cy="17" rx="8" ry="4"/><circle cx="12" cy="11.8" r="2.6"/><path d="M19 16l2.4-7.2h2.2L21.2 16Z"/><ellipse cx="24" cy="7.6" rx="2" ry="1.5"/><path d="M7 20v8h2v-7M11 20v8h2v-7M16 20v8h2v-7M19.5 20l.5 8h2l-.5-8" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  perahu: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M3 21h26l-4.5 5.5H7.5Z"/><path d="M15 21V4.5l9 16.5Z"/></svg>`,
  jong: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M3 20h26l-3.5 6H6.5Z"/><path d="M9 20V4l8 16Z"/><path d="M18 20V8l6 12Z"/></svg>`,
  "kapal-eropa": `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M4 19h24l-3.5 6H7.5Z"/><path d="M12 19V4M20 19V6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 7h8v6H8ZM14 9h7v5h-7Z"/></svg>`,
  "kapal-uap": `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M3 19h26l-4 6H7Z"/><path d="M8 19v-5h14v5Z"/><path d="M11 14V8h3v6ZM17 14V9h3v5Z"/><circle cx="13" cy="5.5" r="1.6"/><circle cx="16.5" cy="4" r="1.3"/></svg>`,
  kereta: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M5 10h13v11H5Z"/><path d="M18 14h7l2 4v3h-9Z"/><path d="M8 10V6h4v4ZM20 14v-4h3v4Z"/><circle cx="9" cy="24" r="2.4"/><circle cx="16" cy="24" r="2.4"/><circle cx="23" cy="24" r="2.4"/></svg>`,
  pesawat: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round" paint-order="stroke"><path d="M3 16.5 7 15l2.5-4h2l-1 4.4 7.5-.4 5-6h2.5l-2.5 6.3L28 16l-4 1 2.5 6.3H24l-5-6-7.5-.4 1 4.4h-2L8 18Z"/></svg>`
};
