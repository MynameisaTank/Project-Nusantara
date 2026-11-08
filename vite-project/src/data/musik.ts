/**
 * Musik latar, dibaca otomatis dari folder lokal saat build:
 *   src/audio-lokal/menu/  menu utama, pilih era, mode kuis, dan materi ujian
 *   src/audio-lokal/peta/  saat peta tampil
 * Taruh berkas .ogg, .mp3, atau .m4a di sana; diputar urut nama berkas, lalu diulang.
 * Folder audio-lokal ada di .gitignore, jadi musiknya tidak pernah ikut ke repo.
 */
export type Suasana = "menu" | "peta";

const urut = (berkas: Record<string, string>): string[] =>
  Object.keys(berkas).sort().map((k) => berkas[k]!);

const MENU = import.meta.glob<string>("../audio-lokal/menu/*.{ogg,mp3,m4a}", { eager: true, query: "?url", import: "default" });
const PETA = import.meta.glob<string>("../audio-lokal/peta/*.{ogg,mp3,m4a}", { eager: true, query: "?url", import: "default" });

export const MUSIK: Record<Suasana, string[]> = {
  menu: urut(MENU),
  peta: urut(PETA),
};
