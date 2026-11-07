import type { SejarahEvent } from "../types";

/** Menentukan apakah event termasuk kejadian utama. */
export const isUtama = (ev: Pick<SejarahEvent, "jenis" | "penting">) =>
  ev.jenis === "utama" || ev.penting === true;
