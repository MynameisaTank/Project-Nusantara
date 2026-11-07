import { useState } from "react";
import type { Kerajaan } from "../data/kerajaan";

interface Entri {
  nama: string;
  warna: string;
  keterangan: string;
}

/** Warna negara Eropa seperti yang dipakai di data wilayah (lihat wilayahEra2.ts dan wilayahEra3.ts). */
const LEGENDA: Entri[] = [
  { nama: "Portugis", warna: "#4a90c8", keterangan: "Melaka dan pos-pos di Nusa Tenggara seperti Solor dan Larantuka." },
  { nama: "Spanyol", warna: "#c0392b", keterangan: "Ternate pada abad ke-16 dan 17, bersaing dengan Portugis dan VOC." },
  { nama: "Belanda (VOC dan Hindia Belanda)", warna: "#e8803a", keterangan: "Wilayah yang langsung dikuasai VOC atau pemerintah Hindia Belanda." },
  { nama: "Kerajaan di bawah Belanda", warna: "#ec9a5c", keterangan: "Kerajaan sekutu atau boneka VOC, seperti Banten, Cirebon, dan Mataram." },
  { nama: "Belanda (NICA)", warna: "#d99a4e", keterangan: "Pemerintahan sipil Belanda yang kembali setelah 1945." },
  { nama: "Inggris", warna: "#7d5fb8", keterangan: "Kekuasaan Inggris di Jawa, Melaka, Singapura, dan Sarawak." },
];

/** Legenda yang bisa diciutkan di pojok kiri bawah peta. Entri yang dipakai di era ini ditebalkan. */
export function LegendaEropa({ wilayah }: { wilayah: Kerajaan[] }) {
  // Dimulai tertutup di semua ukuran layar: terbuka, legenda menimpa kartu indeks peristiwa di kiri atas.
  // Warna negara tetap terlihat sekilas lewat deretan titik di kapsul tertutup.
  const [terbuka, setTerbuka] = useState(false);
  const warnaEra = new Set(wilayah.map((k) => k.warna));
  return (
    <aside className="legenda-eropa" aria-label="Legenda negara Eropa">
      <button
        type="button"
        className="legenda-eropa__toggle"
        aria-expanded={terbuka}
        onClick={() => setTerbuka((v) => !v)}
      >
        <span>Legenda<span className="legenda-eropa__sub"> negara Eropa</span></span>
        {!terbuka && (
          <span className="legenda-eropa__titik" aria-hidden="true">
            {LEGENDA.map((e) => (
              <i key={e.nama} style={{ background: e.warna }} />
            ))}
          </span>
        )}
        <span aria-hidden="true">{terbuka ? "−" : "+"}</span>
      </button>
      {terbuka && (
        <div className="legenda-eropa__isi">
          <ul>
            {LEGENDA.map((e) => (
              <li key={e.nama} className={warnaEra.has(e.warna) ? "is-aktif" : undefined}>
                <i style={{ background: e.warna }} aria-hidden="true" />
                <span>
                  <strong>{e.nama}</strong>
                  <small>{e.keterangan}</small>
                </span>
              </li>
            ))}
          </ul>
          <p className="legenda-eropa__catatan">
            Warna wilayah mengikuti negara yang berkuasa pada tahun yang dipilih. Ketika VOC lalu Hindia Belanda
            memperluas pengaruh, makin banyak kerajaan berada di bawah Belanda, sehingga warnanya ikut oranye.
            Geser tahun di bawah peta untuk melihat perubahannya.
          </p>
        </div>
      )}
    </aside>
  );
}
