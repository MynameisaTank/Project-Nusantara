import { useState, type CSSProperties } from "react";
import { DETAIL_KERAJAAN, KOLONIAL_RINGKAS, penguasaPadaTahun, type DetailKerajaan, type Penguasa } from "../data/kerajaanDetail";
import { detailPenguasa, inisialNama } from "../data/penguasaDetail";
import type { Kerajaan } from "../data/kerajaan";
import { kekuatanPadaTahun } from "../lib/kekuasaan";
import { Icon } from "./Icon";
import { CometCard } from "./ui/comet-card";
import "../styles/kingdom-panel.css";
import "../styles/panel-card.css";

interface Props {
  kerajaan: Kerajaan;
  year: number;
  onClose: () => void;
}

function labelKekuatan(p: number): string {
  if (p <= 0) return "Tidak aktif";
  if (p < 0.35) return "Lemah";
  if (p < 0.7) return "Sedang";
  return "Kuat";
}

export function KingdomPanel({ kerajaan: k, year, onClose }: Props) {
  const isKolonial = k.jenis === "kolonial";
  // potongan wilayah era 3 berbagi detail lewat `grup` (mis. semua potongan Hindia Belanda)
  const detailId = k.grup ?? k.id;
  const kolonialRingkas = isKolonial ? KOLONIAL_RINGKAS[detailId] : undefined;
  const detail: DetailKerajaan | undefined = DETAIL_KERAJAAN[detailId] ?? (kolonialRingkas ? { ringkasan: kolonialRingkas, penguasa: [] } : undefined);
  const kekuatan = kekuatanPadaTahun(k, year);
  const penguasa = penguasaPadaTahun(detail, year);
  // penguasa yang sedang dibuka detailnya; null berarti tampilan kerajaan
  const [terpilih, setTerpilih] = useState<Penguasa | null>(null);

  return (
    <CometCard className="panel-card">
      <aside className="panel kingdom-panel" aria-label={`Detail ${k.nama}`}>
        <div className="panel-head">
          <button type="button" className="close" aria-label="Tutup" onClick={onClose}>
            <Icon name="tutup" size={16} />
          </button>
          <span className="chip" style={{ "--c": k.warna } as CSSProperties}>{k.chip ?? (isKolonial ? "Wilayah kolonial" : "Kerajaan")}</span>
          <h2>{k.nama}</h2>
          <p className="meta">{detail?.tahunDidirikan ? `Berdiri: ${detail.tahunDidirikan}` : "Tahun berdiri belum tercatat"}</p>
        </div>

        <div className="panel-body">
          {terpilih ? (
            <PenguasaView kerajaanId={detailId} kerajaanNama={k.nama} penguasa={terpilih} onKembali={() => setTerpilih(null)} />
          ) : (
            <>
              <section className="step">
                <h3>Pada tahun {year}</h3>
                <p className="kingdom-stat">
                  <span>Penguasa</span>
                  <strong>
                    {penguasa ? (
                      <button type="button" className="kingdom-ruler-btn" onClick={() => setTerpilih(penguasa)}>
                        {penguasa.nama}{penguasa.perkiraan ? " (perkiraan)" : ""}
                      </button>
                    ) : detail && detail.penguasa.length > 0 ? "Tidak tercatat pada tahun ini" : "Data penguasa belum tersedia"}
                  </strong>
                </p>
                <p className="kingdom-stat">
                  <span>Kekuatan</span>
                  <strong>{labelKekuatan(kekuatan)}</strong>
                </p>
                <div className="kingdom-meter" aria-hidden="true">
                  <span style={{ width: `${Math.round(kekuatan * 100)}%`, background: k.warna }} />
                </div>
              </section>

              {k.catatan && (
                <section className="step">
                  <h3>Di wilayah ini</h3>
                  <p className="kingdom-ringkas">{k.catatan}</p>
                </section>
              )}

              {detail && (
                <section className="step">
                  <h3>Tentang</h3>
                  <p className="kingdom-ringkas">{detail.ringkasan}</p>
                </section>
              )}

              {detail?.negaraBoneka && (
                <section className="step">
                  <h3>Hubungan dengan VOC</h3>
                  <p className="kingdom-ringkas">{detail.negaraBoneka}</p>
                </section>
              )}

              {detail && detail.penguasa.length > 0 && (
                <section className="step">
                  <h3>Daftar penguasa</h3>
                  <ul className="kingdom-rulers">
                    {detail.penguasa.map((p) => (
                      <li key={`${p.nama}-${p.mulai}`} className={year >= p.mulai && year <= p.akhir ? "is-current" : ""}>
                        <span className="kingdom-ruler-years">{p.perkiraan ? "~" : ""}{p.mulai}–{p.akhir}</span>
                        <button type="button" className="kingdom-ruler-btn" onClick={() => setTerpilih(p)}>{p.nama}</button>
                      </li>
                    ))}
                  </ul>
                  <p className="kingdom-note">Tanda ~ berarti tanggal masih perkiraan atau sumber berselisih. Klik nama penguasa untuk melihat rinciannya.</p>
                </section>
              )}
            </>
          )}
        </div>
      </aside>
    </CometCard>
  );
}

interface PenguasaViewProps {
  kerajaanId: string;
  kerajaanNama: string;
  penguasa: Penguasa;
  onKembali: () => void;
}

/** Detail satu penguasa: gelar, masa berkuasa, biografi singkat, dan sorotan. */
function PenguasaView({ kerajaanId, kerajaanNama, penguasa, onKembali }: PenguasaViewProps) {
  const bio = detailPenguasa(kerajaanId, penguasa.nama);

  return (
    <>
      <button type="button" className="kingdom-back" onClick={onKembali}>
        ← Kembali ke {kerajaanNama}
      </button>

      <section className="step">
        {bio?.foto ? (
          <figure className="kingdom-foto">
            <img src={bio.foto.src} alt={penguasa.nama} loading="lazy" />
            <figcaption>
              {bio.foto.keterangan}
              <span className="kingdom-foto-sumber">
                {bio.foto.jenis.charAt(0).toUpperCase() + bio.foto.jenis.slice(1)} · {bio.foto.lisensi} · {bio.foto.penulis} ·{" "}
                <a href={bio.foto.halaman} target="_blank" rel="noreferrer">Wikimedia Commons</a>
              </span>
            </figcaption>
          </figure>
        ) : (
          <div className="kingdom-foto-kosong" aria-hidden="true">
            <span>{inisialNama(penguasa.nama)}</span>
            <small>Foto belum tersedia</small>
          </div>
        )}
        <h3>Penguasa</h3>
        <p className="kingdom-ruler-nama">{penguasa.nama}</p>
        {bio?.gelar && <p className="kingdom-ruler-gelar">{bio.gelar}</p>}
        <p className="kingdom-ruler-masa">
          {penguasa.perkiraan ? "~" : ""}{penguasa.mulai}–{penguasa.akhir}
        </p>
      </section>

      {bio ? (
        <>
          <section className="step">
            <h3>Tentang</h3>
            {bio.tentang.map((paragraf) => (
              <p key={paragraf.slice(0, 40)} className="kingdom-ringkas kingdom-paragraf">{paragraf}</p>
            ))}
          </section>
          {bio.sorotan.length > 0 && (
            <section className="step">
              <h3>Sorotan</h3>
              <ul className="kingdom-sorotan">
                {bio.sorotan.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <section className="step">
          <p className="kingdom-ringkas">Rincian tentang penguasa ini belum ditulis.</p>
        </section>
      )}

      <p className="kingdom-note">Tanggal masa berkuasa mengikuti data kerajaan. Sumber sejarah untuk beberapa penguasa berbeda-beda, dan tanda ~ menandai tanggal yang masih perkiraan.</p>
    </>
  );
}
