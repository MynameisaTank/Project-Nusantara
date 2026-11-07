import { useMemo, useState } from "react";
import type { SejarahEvent } from "../types";
import { isUtama } from "../lib/jenis";

interface Props {
  events: SejarahEvent[];
  year: number;
  selectedId: string | null;
  onPick: (id: string) => void;
}

export function TimelineDrawer({ events, year, selectedId, onPick }: Props) {
  const [open, setOpen] = useState(false);

  const utama = useMemo(
    () => events.filter(isUtama).slice().sort((a, b) => a.mulai - b.mulai),
    [events]
  );

  return (
    <div className="timeline-drawer">
      <button
        type="button"
        className="timeline-drawer-handle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`timeline-drawer-chevron${open ? " is-open" : ""}`} aria-hidden="true">⌃</span>
        Garis waktu peristiwa utama
        <span className="timeline-drawer-count">{utama.length}</span>
      </button>

      {open && (
        <div className="timeline-drawer-panel" role="region" aria-label="Garis waktu peristiwa utama">
          <ul className="timeline-drawer-list">
            {utama.map((event) => (
              <li key={event.id}>
                <button
                  type="button"
                  className={`timeline-drawer-row${selectedId === event.id ? " is-selected" : ""}${year >= event.mulai && year <= event.akhir ? " is-active" : ""}`}
                  onClick={() => {
                    onPick(event.id);
                    setOpen(false);
                  }}
                >
                  <span className="timeline-drawer-year">{event.tahun}</span>
                  <span className="timeline-drawer-copy">
                    <span className="timeline-drawer-title">{event.judul}</span>
                    <span className="timeline-drawer-place">{event.lokasi.nama}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="timeline-drawer-note">
            Peristiwa sampingan belum ditambahkan ke garis waktu ini; akan menyusul setelah datanya lengkap.
          </p>
        </div>
      )}
    </div>
  );
}
