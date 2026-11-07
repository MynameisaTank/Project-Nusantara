import { useMemo, useState } from "react";
import type { SejarahEvent } from "../types";
import { isUtama } from "../lib/jenis";

interface Props {
  active: SejarahEvent[];
  /** semua peristiwa di era ini, dipakai saat pencarian (tidak terbatas tahun sekarang) */
  events: SejarahEvent[];
  year: number;
  era: { mulai: number; akhir: number };
  done: Record<string, true>;
  selectedId: string | null;
  onPick: (id: string) => void;
  /** lompat ke tahun tertentu (dipakai saat peristiwa masa depan dipilih dari hasil pencarian) */
  onYear: (year: number) => void;
}

const BELUM_TERJADI = "Kejadian ini belum terjadi";

export function NowList({ active, events, year, era, done, selectedId, onPick, onYear }: Props) {
  const [open, setOpen] = useState(() => window.innerWidth > 860);
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLocaleLowerCase("id");
  const searching = normalized.length > 0;

  // Saat mencari: semua peristiwa era. Saat tidak mencari: hanya yang aktif tahun ini.
  // Pencarian hanya mencocokkan judul, lokasi, dan kategori, supaya isi peristiwa masa depan tidak bocor.
  const filtered = useMemo(() => {
    if (!searching) return active;
    return [...events]
      .filter((event) =>
        `${event.judul} ${event.lokasi.nama} ${event.kategori}`.toLocaleLowerCase("id").includes(normalized)
      )
      .sort((a, b) => a.mulai - b.mulai);
  }, [active, events, normalized, searching]);

  const pick = (event: SejarahEvent) => {
    if (searching && event.mulai > year) {
      // peristiwa belum terjadi: pindah ke tahun mulainya, lalu baru bisa dibuka
      onYear(event.mulai);
      return;
    }
    onPick(event.id);
  };

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
            <span>{searching ? `${filtered.length} hasil di seluruh era` : `${filtered.length} ditampilkan`}</span>
            <span>{era.mulai}–{era.akhir} M</span>
          </div>

          <ul className="event-list">
            {filtered.length === 0 && (
              <li className="event-empty">
                {searching
                  ? "Tidak ada peristiwa yang cocok dengan pencarian."
                  : active.length === 0
                    ? "Tidak ada peristiwa aktif pada tahun ini. Geser linimasa untuk menjelajah."
                    : "Tidak ada peristiwa yang cocok dengan pencarian."}
              </li>
            )}
            {filtered.map((event) => {
              const belumTerjadi = searching && event.mulai > year;
              return (
                <li key={event.id}>
                  <button
                    type="button"
                    className={`event-row${selectedId === event.id ? " is-selected" : ""}${done[event.id] ? " is-complete" : ""}${isUtama(event) ? " is-utama" : " is-sampingan"}${belumTerjadi ? " is-future" : ""}`}
                    onClick={() => pick(event)}
                    aria-current={selectedId === event.id ? "true" : undefined}
                  >
                    <span className={`event-category event-category--${event.kategori}`} aria-hidden="true" title={event.kategori} />
                    <span className="event-row-copy">
                      <span className="event-title">{event.judul}</span>
                      <span className="event-meta">{event.tahun} · {event.lokasi.nama}</span>
                      {searching && (
                        <span className="event-desc">{belumTerjadi ? BELUM_TERJADI : event.ringkas}</span>
                      )}
                    </span>
                    {done[event.id] && <span className="event-check" aria-label="Selesai">✓</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
