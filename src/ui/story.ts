import { GLOSARIUM } from "../data/era";
import { escapeHtml, escapeRegex } from "../lib/dom";
import type { Level } from "../types";

const glossTerms = Object.keys(GLOSARIUM).sort((a, b) => b.length - a.length);
const glossRe = glossTerms.length
  ? new RegExp("\\b(" + glossTerms.map(escapeRegex).join("|") + ")\\b", "gi")
  : null;

/** Teks cerita -> HTML. Di level 2 dan 3, istilah glosarium (kemunculan pertama) bisa diklik. */
export function renderStory(text: string, level: Level): string {
  let html = escapeHtml(text);
  if (level >= 2 && glossRe) {
    const used: Record<string, boolean> = {};
    html = html.replace(glossRe, (m) => {
      const key = m.toLowerCase();
      if (used[key]) return m;
      used[key] = true;
      return `<button type="button" class="term" data-term="${key}">${m}</button>`;
    });
  }
  return html;
}
