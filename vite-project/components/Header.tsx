import type { Era } from "../types";
import type { Level } from "../types";

const LEVELS: { value: Level; label: string }[] = [
  { value: 1, label: "Dasar" },
  { value: 2, label: "Menengah" },
  { value: 3, label: "Lanjut" }
];

interface Props {
  era: Era;
  level: Level;
  onLevel: (l: Level) => void;
  onMenu: () => void;
}

export function Header({ era, level, onLevel, onMenu }: Props) {
  return (
    <header className="topbar">
      <div className="brand">
        <h1>Nusantara Bersamaan</h1>
        <p className="subtitle">Ketika peristiwa-peristiwa sejarah bertemu dalam satu masa.</p>
        <p className="era">
          {era.nama} · {era.mulai}–{era.akhir} M
        </p>
      </div>
      <div className="header-actions"><button className="menu-return" type="button" onClick={onMenu}>← Menu</button><div className="levels" role="group" aria-label="Tingkat bahasa">
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
      </div></div>
    </header>
  );
}
