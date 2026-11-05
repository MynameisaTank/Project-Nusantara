import { ERA } from "./data/era";
import { EVENTS } from "./data/events";
import type { AppState, SejarahEvent } from "./types";

export const eventById: Record<string, SejarahEvent> = {};
EVENTS.forEach((ev) => { eventById[ev.id] = ev; });

export const state: AppState = {
  year: ERA.tahunAwal,
  level: 2,
  done: {},
  wrong: {},
  selectedId: null,
  playing: false
};

export const isActive = (ev: SejarahEvent, year: number): boolean =>
  year >= ev.mulai && year <= ev.akhir;

export const doneCount = (): number =>
  EVENTS.filter((ev) => state.done[ev.id]).length;
