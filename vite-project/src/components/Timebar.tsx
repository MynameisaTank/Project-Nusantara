import { useMemo } from "react";
import { Icon } from "./Icon";

export const SPEEDS = [0.25, 0.5, 1, 2, 4, 8];

interface Props {
  era: { mulai: number; akhir: number };
  events: import("../types").SejarahEvent[];
  year: number;
  playing: boolean;
  progress: string;
  speed: number;
  onYear: (y: number) => void;
  onTogglePlay: () => void;
  onSpeed: (speed: number) => void;
  wilayahTersedia?: boolean;
  tampilkanWilayah?: boolean;
  onToggleWilayah?: () => void;
  darkMap?: boolean;
  onToggleDark?: () => void;
}


export function Timebar({
  era, events, year, playing, progress, speed, onYear, onTogglePlay, onSpeed,
  wilayahTersedia, tampilkanWilayah, onToggleWilayah, darkMap, onToggleDark
}: Props) {
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
        <button
          type="button"
          className="transport-button speed"
          aria-label={`Kecepatan waktu ${speed}x, klik untuk mengganti`}
          title="Kecepatan waktu"
          onClick={() => onSpeed(SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length] ?? 1)}
        >{speed}x</button>
        {wilayahTersedia && (
          <button
            type="button"
            className={"transport-button wilayah-toggle" + (tampilkanWilayah ? " active" : "")}
            aria-label={tampilkanWilayah ? "Sembunyikan wilayah kerajaan" : "Tampilkan wilayah kerajaan"}
            aria-pressed={!!tampilkanWilayah}
            title="Wilayah kerajaan"
            onClick={onToggleWilayah}
          >Wilayah</button>
        )}
        {onToggleDark && (
          <button
            type="button"
            className={"transport-button dark-toggle" + (darkMap ? " active" : "")}
            aria-label={darkMap ? "Matikan mode gelap peta" : "Aktifkan mode gelap peta"}
            aria-pressed={!!darkMap}
            title="Mode gelap peta"
            onClick={onToggleDark}
          >◐</button>
        )}
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
