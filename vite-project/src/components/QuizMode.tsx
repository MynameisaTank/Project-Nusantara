import { useEffect, useRef, useState } from "react";
import { ambilSoal, jumlahTersedia, useBankSoalSiap, type EraKuis, type Kesulitan, type Soal } from "../lib/kuis";
import { QuizCover, ERA_OPSI } from "./QuizCover";
import { PergantianSoal, type Arah, type PergantianHandle } from "./QuizPageTransition";
import "../styles/quiz-mode.css";

interface Props { onBack: () => void; }
interface PropsKuis extends Props { pergantian: { current: PergantianHandle | null }; }

type Fase = "atur" | "main" | "hasil";
interface Jawaban { benar: boolean; pilih: number | null; poin: number; }

const HURUF = ["A", "B", "C", "D"];

const ARAH_SOAL: Arah[] = ["kanan", "bawah", "kiri", "atas"];
const arahUntuk = (i: number): Arah => ARAH_SOAL[i % ARAH_SOAL.length] ?? "kanan";

const ERA_ROMAWI: Record<number, string> = { 1: "I", 2: "II", 3: "III" };

// Overlay transisi dirender di luar semua layar supaya animasinya tidak terputus saat layar berganti.
export function QuizMode({ onBack }: Props) {
  const pergantian = useRef<PergantianHandle>(null);
  return (
    <>
      <QuizKuis onBack={onBack} pergantian={pergantian} />
      <PergantianSoal ref={pergantian} />
    </>
  );
}

function QuizKuis({ onBack, pergantian }: PropsKuis) {
  const [fase, setFase] = useState<Fase>("atur");
  const [era, setEra] = useState<EraKuis>("semua");
  const [kesulitan, setKesulitan] = useState<Kesulitan>("campur");
  const [jumlah, setJumlah] = useState(10);
  const [waktu, setWaktu] = useState(20);
  const [soal, setSoal] = useState<Soal[]>([]);
  const [idx, setIdx] = useState(0);
  const [hasil, setHasil] = useState<Jawaban[]>([]);
  const [sisaMs, setSisaMs] = useState(0);
  const sedangGanti = useRef(false);
  const bankSiap = useBankSoalSiap();

  const tersedia = jumlahTersedia(era, kesulitan);
  const jumlahEfektif = Math.min(jumlah, tersedia);
  const sudahJawab = hasil.length > idx;
  const aktif = soal[idx];

  const jawab = (pilih: number | null) => {
    if (sudahJawab || !aktif) return;
    const benar = pilih === aktif.benar;
    const poin = benar ? (waktu > 0 ? 100 + Math.round((100 * sisaMs) / (waktu * 1000)) : 100) : 0;
    setHasil((h) => [...h, { benar, pilih, poin }]);
  };

  const ganti = (arah: Arah, aksi: () => void) => {
    const p = pergantian.current;
    if (!p) {
      aksi();
      return;
    }
    if (sedangGanti.current) return;
    sedangGanti.current = true;
    p.jalankan(arah, aksi, () => {
      sedangGanti.current = false;
    });
  };

  const mulai = () => {
    const daftar = ambilSoal(era, kesulitan, jumlahEfektif);
    if (daftar.length === 0) return;
    ganti(arahUntuk(0), () => {
      setSoal(daftar);
      setIdx(0);
      setHasil([]);
      setSisaMs(waktu * 1000);
      setFase("main");
    });
  };

  const lanjut = () => {
    const akhir = idx + 1 >= soal.length;
    ganti(arahUntuk(idx + 1), () => {
      if (akhir) {
        setFase("hasil");
        return;
      }
      setIdx((i) => i + 1);
      setSisaMs(waktu * 1000);
    });
  };

  useEffect(() => {
    if (fase !== "main" || waktu === 0 || sudahJawab) return;
    const t = window.setInterval(() => setSisaMs((s) => Math.max(0, s - 100)), 100);
    return () => window.clearInterval(t);
  }, [fase, waktu, sudahJawab, idx]);

  // waktu habis dihitung jawaban kosong
  useEffect(() => {
    if (fase === "main" && waktu > 0 && !sudahJawab && sisaMs === 0) jawab(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sisaMs, fase, sudahJawab]);

  // 1–4 untuk memilih, Enter atau Spasi untuk lanjut
  useEffect(() => {
    if (fase !== "main") return;
    const onKey = (e: KeyboardEvent) => {
      const nomor = Number(e.key) - 1;
      if (!sudahJawab && aktif && Number.isInteger(nomor) && nomor >= 0 && nomor < aktif.pilihan.length) jawab(nomor);
      else if (sudahJawab && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        lanjut();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, sudahJawab, idx, soal]);

  if (!bankSiap) return <main className="qz" aria-busy="true" aria-label="Memuat soal" />;

  if (fase === "atur") {
    return (
      <QuizCover
        era={era}
        onEra={setEra}
        kesulitan={kesulitan}
        onKesulitan={setKesulitan}
        jumlah={jumlah}
        onJumlah={setJumlah}
        waktu={waktu}
        onWaktu={setWaktu}
        onMulai={mulai}
        onBack={onBack}
      />
    );
  }

  if (fase === "hasil") {
    const total = hasil.reduce((s, h) => s + h.poin, 0);
    const benarN = hasil.filter((h) => h.benar).length;
    const akurasi = soal.length ? Math.round((benarN / soal.length) * 100) : 0;
    return (
      <main className="qz">
        <header className="qz-bar">
          <button type="button" className="qz-back" onClick={onBack}>← Menu</button>
          <span className="qz-brand">Hasil kuis</span>
        </header>

        <section className="qz-result">
          <div className="qz-result-head">
            <p className="qz-kicker">Skor akhir</p>
            <p className="qz-score"><span>{total}</span> poin</p>
          </div>
          <dl className="qz-stats">
            <div><dt>Benar</dt><dd>{benarN} / {soal.length}</dd></div>
            <div><dt>Akurasi</dt><dd>{akurasi}%</dd></div>
            <div><dt>Periode</dt><dd>{ERA_OPSI.find((o) => o.nilai === era)?.judul}</dd></div>
          </dl>
          <div className="qz-result-aksi">
            <button type="button" className="qz-cta" onClick={mulai}>MAIN LAGI →</button>
            <button type="button" className="qz-ghost" onClick={() => setFase("atur")}>Ubah konfigurasi</button>
          </div>

          <p className="qz-kicker qz-kicker--tinggi">Tinjauan</p>
          <ol className="qz-review">
            {soal.map((s, i) => {
              const h = hasil[i];
              return (
                <li key={s.id + i} className={h?.benar ? "is-benar" : "is-salah"}>
                  <div className="qz-review-head">
                    <span className="qz-review-no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="qz-review-tanya">{s.tanya}</span>
                    <span className="qz-review-poin">{h?.benar ? `+${h.poin}` : "0"}</span>
                  </div>
                  <p className="qz-review-jawab">
                    {h?.pilih === null || h?.pilih === undefined ? "Tidak dijawab" : `Jawabanmu: ${s.pilihan[h.pilih]}`}
                    {!h?.benar && <> · Jawaban benar: {s.pilihan[s.benar]}</>}
                  </p>
                  <p className="qz-review-penjelasan">{s.penjelasan}</p>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    );
  }

  if (!aktif) return null;
  const persen = waktu > 0 ? (sisaMs / (waktu * 1000)) * 100 : 100;
  const benarSoal = sudahJawab && hasil[idx]?.benar;
  const totalSementara = hasil.reduce((s, h) => s + h.poin, 0);
  const detikSisa = Math.ceil(sisaMs / 1000);
  return (
    <main className="qz qz--main">
      <header className="qz-bar qz-bar--main">
        <button type="button" className="qz-back" onClick={() => setFase("atur")}>← Keluar</button>
        <span className="qz-brand">Pertanyaan {idx + 1} dari {soal.length}</span>
        <span className="qz-points">{totalSementara} poin</span>
      </header>
      <div className="qz-progress" aria-hidden="true"><span style={{ width: `${(idx / soal.length) * 100}%` }} /></div>

      <div className="qz-stage">
        <article className="qz-question-card">
          <div className="qz-question-meta">
            <span>Era {ERA_ROMAWI[aktif.era] ?? aktif.era} · {aktif.tahun}</span>
            <span>{aktif.lokasi}</span>
            {waktu > 0 && (
              <span className={"qz-clock" + (detikSisa <= 5 && !sudahJawab ? " is-kritis" : "")} role="timer" aria-label={`Sisa ${detikSisa} detik`}>
                {detikSisa} dtk
              </span>
            )}
          </div>
          {waktu > 0 && (
            <div className="qz-timer" aria-hidden="true"><span style={{ width: `${persen}%` }} /></div>
          )}
          <h2 className="qz-event">{aktif.judul}</h2>
          {aktif.gambar && <img className="qz-img" src={aktif.gambar} alt="" loading="lazy" />}
          <p className="qz-question">{aktif.tanya}</p>

          <div className="qz-answers">
            {aktif.pilihan.map((txt, i) => {
              const isBenar = sudahJawab && i === aktif.benar;
              const isPilihSalah = sudahJawab && hasil[idx]?.pilih === i && !isBenar;
              const kelas = ["qz-answer"]
                .concat(isBenar ? ["is-benar"] : [])
                .concat(isPilihSalah ? ["is-salah"] : [])
                .concat(sudahJawab && !isBenar && !isPilihSalah ? ["is-redup"] : [])
                .join(" ");
              return (
                <button key={i} type="button" className={kelas} disabled={sudahJawab} onClick={() => jawab(i)}>
                  <span className="qz-answer-huruf">{HURUF[i]}</span>
                  <span className="qz-answer-teks">{txt}</span>
                  {isBenar && <span className="qz-answer-tanda" aria-hidden="true">✓</span>}
                  {isPilihSalah && <span className="qz-answer-tanda" aria-hidden="true">✕</span>}
                </button>
              );
            })}
          </div>

          {sudahJawab && (
            <div className={"qz-feedback " + (benarSoal ? "is-benar" : "is-salah")} aria-live="polite">
              <p className="qz-feedback-judul">
                {benarSoal ? `Benar — +${hasil[idx]?.poin ?? 0}` : hasil[idx]?.pilih === null ? "Waktu habis" : "Belum tepat"}
              </p>
              <p className="qz-feedback-penjelasan">{aktif.penjelasan}</p>
              <button type="button" className="qz-cta" onClick={lanjut}>
                {idx + 1 >= soal.length ? "LIHAT HASIL →" : "LANJUT →"}
              </button>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
