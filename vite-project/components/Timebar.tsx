import { useMemo } from "react";
import type { Era, SejarahEvent } from "../types";
import { Icon } from "./Icon";

interface Props {
  era: Era;
  events: SejarahEvent[];
  year: number;
  playing: boolean;
  progress: string;
  onYear: (y: number) => void;
  onTogglePlay: () => void;
}

export function Timebar({ era, events, year, playing, progress, onYear, onTogglePlay }: Props) {
  const span = era.akhir - era.mulai;
  const marks = useMemo(
    () => events.map((event) => ({
      id: event.id,
      judul: event.judul,
      tahun: event.tahun,
      mulai: event.mulai,
      akhir: event.akhir
    })),
    [events]
  );

  return (
    <footer className="timebar" aria-label="Navigasi waktu">
      <div className="timebar-transport">
        <button
          type="button"
          className="transport-button"
          aria-label="Mundur satu tahun"
          onClick={() => onYear(Math.max(era.mulai, year - 1))}
          disabled={year <= era.mulai}
        >−</button>
        <button
          type="button"
          className="play"
          aria-label={playing ? "Jeda waktu" : "Putar waktu"}
          onClick={onTogglePlay}
        >
          <Icon name={playing ? "jeda" : "putar"} size={17} />
        </button>
        <button
          type="button"
          className="transport-button"
          aria-label="Maju satu tahun"
          onClick={() => onYear(Math.min(era.akhir, year + 1))}
          disabled={year >= era.akhir}
        >+</button>
      </div>

      <div className="slider-wrap">
        <div className="track-marks" aria-hidden="true">
          {marks.map((mark) => (
            <span
              key={mark.id}
              className={"mark" + (year >= mark.mulai && year <= mark.akhir ? " on" : "")}
              style={{ left: `${((mark.mulai - era.mulai) / span) * 100}%` }}
            />
          ))}
        </div>
        <input
          id="yearSlider"
          type="range"
          step={1}
          min={era.mulai}
          max={era.akhir}
          value={year}
          aria-label="Pilih tahun dalam linimasa"
          onChange={(event) => onYear(Number(event.target.value))}
        />
        <div className="range-ends">
          <span>{era.mulai}</span>
          <span className="progress">{progress}</span>
          <span>{era.akhir}</span>
        </div>
      </div>
    </footer>
  );
}
