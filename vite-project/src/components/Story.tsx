import { Fragment } from "react";
import { GLOSARIUM } from "../data/era";
import { escapeRegex } from "../lib/dom";
import type { Level } from "../types";

const terms = Object.keys(GLOSARIUM).sort((a, b) => b.length - a.length);
const termRe = terms.length
  ? new RegExp("\\b(" + terms.map(escapeRegex).join("|") + ")\\b", "gi")
  : null;

interface Props {
  text: string;
  level: Level;
  onTerm: (term: string) => void;
}

/** Teks cerita. Di level 2 dan 3, kemunculan pertama tiap istilah glosarium bisa diklik. */
export function Story({ text, level, onTerm }: Props) {
  if (level < 2 || !termRe) return <div className="story">{text}</div>;

  const used = new Set<string>();
  // split dengan grup penangkap: indeks ganjil = istilah yang cocok
  const parts = text.split(termRe);

  return (
    <div className="story">
      {parts.map((part, i) => {
        const key = part.toLowerCase();
        if (i % 2 === 1 && !used.has(key)) {
          used.add(key);
          return (
            <button key={i} type="button" className="term" onClick={() => onTerm(key)}>
              {part}
            </button>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </div>
  );
}
