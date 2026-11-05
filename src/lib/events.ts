import { EVENTS } from "../data/events";
import type { SejarahEvent } from "../types";

export const eventById: Record<string, SejarahEvent> = Object.fromEntries(
  EVENTS.map((ev) => [ev.id, ev])
);

export const isActive = (ev: SejarahEvent, year: number): boolean =>
  year >= ev.mulai && year <= ev.akhir;
