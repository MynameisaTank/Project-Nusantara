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

const BATAS_PARAGRAF = 60; // kata per paragraf, dipotong di akhir kalimat
const BATAS_TEKS_PENDEK = 90; // di bawah ini tetap satu paragraf

function bagiParagraf(text: string): string[] {
  const kata = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
  if (kata(text) < BATAS_TEKS_PENDEK) return [text];
  // tidak memotong singkatan seperti "M.C. Ricklefs"
  const kalimat = text.split(/(?<=[a-z0-9)"][.!?])\s+(?=[A-Z"'])/);
  const hasil: string[] = [];
  let saatIni: string[] = [];
  let jumlah = 0;
  for (const k of kalimat) {
    saatIni.push(k);
    jumlah += kata(k);
    if (jumlah >= BATAS_PARAGRAF) {
      hasil.push(saatIni.join(" "));
      saatIni = [];
      jumlah = 0;
    }
  }
  if (saatIni.length) {
    if (hasil.length > 0 && jumlah < BATAS_PARAGRAF / 3) hasil[hasil.length - 1] += " " + saatIni.join(" ");
    else hasil.push(saatIni.join(" "));
  }
  return hasil;
}

export function Story({ text, level, onTerm }: Props) {
  const paragraf = bagiParagraf(text);
  if (level < 2 || !termRe) {
    return (
      <div className="story">
        {paragraf.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  }

  const used = new Set<string>(); // tiap istilah hanya jadi tombol sekali
  return (
    <div className="story">
      {paragraf.map((p, pi) => {
        const parts = p.split(termRe);
        return (
          <p key={pi}>
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
          </p>
        );
      })}
    </div>
  );
}
