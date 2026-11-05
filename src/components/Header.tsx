import { ERA } from "../data/era";
import type { Level } from "../types";

const LEVELS: { value: Level; label: string }[] = [
  { value: 1, label: "Dasar" },
  { value: 2, label: "Menengah" },
  { value: 3, label: "Lanjut" }
];

interface Props {
  level: Level;
  onLevel: (l: Level) => void;
}

export function Header({ level, onLevel }: Props) {
  return (
    <header className="topbar">
      <div className="brand">
        <h1>Nusantara Bersamaan</h1>
        <p className="era">
          Era: {ERA.nama} ({ERA.mulai}–{ERA.akhir} M)
        </p>
      </div>
      <div className="levels" role="group" aria-label="Tingkat bahasa">
        <span className="levels-label">Bahasa:</span>
        {LEVELS.map((l) => (
          <button
            key={l.value}
            type="button"
            className={"lvl" + (l.value === level ? " active" : "")}
            aria-pressed={l.value === level}
            onClick={() => onLevel(l.value)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
}
