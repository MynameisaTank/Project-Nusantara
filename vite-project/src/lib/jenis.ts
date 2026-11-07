
import type { SejarahEvent } from "../types";

/**
 * Kejadian utama ditandai dengan penting: true pada data event.
 * Data era 1 (events.ts) masih memakai field lama `jenis: "utama"` yang bukan
 * bagian dari tipe SejarahEvent; cek keduanya supaya era 1 tidak selalu dianggap sampingan.
 */
export const isUtama = (ev: Pick<SejarahEvent, "penting"> & { jenis?: string }): boolean =>
  ev.penting === true || ev.jenis === "utama";
