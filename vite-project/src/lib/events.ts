import type { SejarahEvent } from "../types";

export const isActive = (ev: SejarahEvent, year: number): boolean =>
  year >= ev.mulai && year <= ev.akhir;
