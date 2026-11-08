
import type { SejarahEvent } from "../types";

// Data era 1 masih memakai field lama `jenis: "utama"`, jadi keduanya dicek.
export const isUtama = (ev: Pick<SejarahEvent, "penting"> & { jenis?: string }): boolean =>
  ev.penting === true || ev.jenis === "utama";
