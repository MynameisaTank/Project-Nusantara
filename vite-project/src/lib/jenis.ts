import type { SejarahEvent } from "../types";

/** Kejadian utama? Mengikuti `jenis`, atau `penting: true` dari versi sebelumnya. */
export const isUtama = (ev: Pick<SejarahEvent, "jenis" | "penting">) =>
  ev.jenis === "utama" || ev.penting === true;
