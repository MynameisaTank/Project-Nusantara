import { useMemo, useState } from "react";
import type { SejarahEvent } from "../types";

interface Props {
  active: SejarahEvent[];
  done: Record<string, true>;
  selectedId: string | null;
  onPick: (id: string) => void;
}

export function NowList({ active, done, selectedId, onPick }: Props) {
  const [open, setOpen] = useState(() => window.innerWidth > 860);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("id");
    if (!normalized) return active;
    return active.filter((event) =>
      `${event.judul} ${event.lokasi.nama} ${event.kategori}`
        .toLocaleLowerCase("id")
        .includes(normalized)
    );
  }, [active, query]);

  return (
    <aside className={`event-explorer${open ? " is-open" : ""}`} aria-label="Indeks peristiwa">
      <button
        className="explorer-heading"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="explorer-kicker">INDEKS WAKTU</span>
        <span className="explorer-heading-main">
          <strong>{active.length}</strong>
          <span>peristiwa pada tahun ini</span>
        </span>
        <span className={`explorer-chevron${open ? " is-open" : ""}`} aria-hidden="true">⌄</span>
      </button>

      {open && (
        <div className="explorer-content">
          <label className="explorer-search">
            <span className="sr-only">Cari peristiwa atau lokasi</span>
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari peristiwa atau lokasi"
            />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Hapus pencarian">×</button>}
          </label>

          <div className="event-list-meta">
            <span>{filtered.length} ditampilkan</span>
            <span>1200–1400 M</span>
          </div>

          <ul className="event-list">
            {filtered.length === 0 && (
              <li className="event-empty">
                {active.length === 0
                  ? "Tidak ada peristiwa aktif pada tahun ini. Geser linimasa untuk menjelajah."
                  : "Tidak ada peristiwa yang cocok dengan pencarian."}
              </li>
            )}
            {filtered.map((event) => (
              <li key={event.id}>
                <button
                  type="button"
                  className={`event-row${selectedId === event.id ? " is-selected" : ""}${done[event.id] ? " is-complete" : ""}`}
                  onClick={() => onPick(event.id)}
                  aria-current={selectedId === event.id ? "true" : undefined}
                >
                  <span className={`event-category event-category--${event.kategori}`} aria-hidden="true" />
                  <span className="event-row-copy">
                    <span className="event-title">{event.judul}</span>
                    <span className="event-meta">{event.tahun} · {event.lokasi.nama}</span>
                  </span>
                  {done[event.id] && <span className="event-check" aria-label="Selesai">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
