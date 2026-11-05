import { useState, type CSSProperties } from "react";
import { GLOSARIUM, KATEGORI } from "../data/era";
import type { Level, SejarahEvent } from "../types";
import { Decision } from "./Decision";
import { Icon } from "./Icon";
import { Quiz } from "./Quiz";
import { Story } from "./Story";

const LEVEL_NAMES: Record<Level, string> = { 1: "Dasar", 2: "Menengah", 3: "Lanjut" };

interface Props {
  event: SejarahEvent;
  level: Level;
  quizDone: boolean;
  wrong: number[];
  choice: string | undefined;
  onClose: () => void;
  onAnswer: (idx: number) => void;
  onChoose: (pilihanId: string) => void;
  onResetChoice: () => void;
}

export function StoryPanel({
  event: ev, level, quizDone, wrong, choice, onClose, onAnswer, onChoose, onResetChoice
}: Props) {
  const [term, setTerm] = useState<string | null>(null);
  const k = KATEGORI[ev.kategori];
  const key = `L${level}` as "L1" | "L2" | "L3";

  return (
    <aside className="panel">
      <div className="panel-head">
        <button type="button" className="close" aria-label="Tutup" onClick={onClose}>
          <Icon name="tutup" size={16} />
        </button>
        <span className="chip" style={{ "--c": k.warna } as CSSProperties}>
          <Icon name={ev.kategori} size={14} /> {k.label}
        </span>
        <h2>{ev.judul}</h2>
        <p className="meta">
          {ev.tahun} · {ev.lokasi.nama}
        </p>
      </div>

      <div className="panel-body">
        <section className="step">
          <h3>
            <span className="no">1</span> Cerita
            <span className="lvl-note">Bahasa {LEVEL_NAMES[level]}</span>
          </h3>
          <Story text={ev.cerita[key]} level={level} onTerm={setTerm} />
          {level >= 2 && term && GLOSARIUM[term] && (
            <div className="gloss">
              <strong>{term}:</strong> {GLOSARIUM[term]}
            </div>
          )}
          <details className="more">
            <summary>Catatan sejarawan</summary>
            <p>{ev.catatan}</p>
          </details>
          <details className="more">
            <summary>Sumber awal (periksa ulang)</summary>
            <ul>
              {ev.sumber.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </details>
        </section>

        <Quiz kuis={ev.kuis} done={quizDone} wrong={wrong} onAnswer={onAnswer} />

        <Decision
          keputusan={ev.keputusan}
          unlocked={quizDone}
          choice={choice}
          onChoose={onChoose}
          onReset={onResetChoice}
        />
      </div>
    </aside>
  );
}
