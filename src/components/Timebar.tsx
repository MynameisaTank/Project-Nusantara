import { useMemo } from "react";
import { ERA } from "../data/era";
import { EVENTS } from "../data/events";
import { Icon } from "./Icon";

interface Props {
  year: number;
  playing: boolean;
  progress: string;
  onYear: (y: number) => void;
  onTogglePlay: () => void;
}

const span = ERA.akhir - ERA.mulai;

export function Timebar({ year, playing, progress, onYear, onTogglePlay }: Props) {
  const marks = useMemo(
    () => EVENTS.map((event) => ({
      id: event.id,
      judul: event.judul,
      tahun: event.tahun,
      mulai: event.mulai,
      akhir: event.akhir
    })),
    []
  );

  return (
    <footer className="timebar" aria-label="Navigasi waktu">
      <div className="timebar-current">
        <span className="timebar-label">TAHUN TERPILIH</span>
        <span className="year" aria-live="polite">{year}</span>
        <span className="year-suffix">M</span>
      </div>

      <div className="timebar-transport">
        <button
          type="button"
          className="transport-button"
          aria-label="Mundur satu tahun"
          onClick={() => onYear(Math.max(ERA.mulai, year - 1))}
          disabled={year <= ERA.mulai}
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
          onClick={() => onYear(Math.min(ERA.akhir, year + 1))}
          disabled={year >= ERA.akhir}
        >+</button>
      </div>

      <div className="slider-wrap">
        <div className="track-marks" aria-hidden="true">
          {marks.map((mark) => (
            <span
              key={mark.id}
              className={"mark" + (year >= mark.mulai && year <= mark.akhir ? " on" : "")}
              style={{ left: `${((mark.mulai - ERA.mulai) / span) * 100}%` }}
            />
          ))}
        </div>
        <input
          id="yearSlider"
          type="range"
          step={1}
          min={ERA.mulai}
          max={ERA.akhir}
          value={year}
          aria-label="Pilih tahun dalam linimasa"
          onChange={(event) => onYear(Number(event.target.value))}
        />
        <div className="range-ends">
          <span>{ERA.mulai}</span>
          <span className="progress">{progress}</span>
          <span>{ERA.akhir}</span>
        </div>
      </div>
    </footer>
  );
}
