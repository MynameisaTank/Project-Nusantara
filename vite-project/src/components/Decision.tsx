import type { Keputusan } from "../types";

interface Props {
  keputusan: Keputusan;
  unlocked: boolean;
  choice: string | undefined;
  onChoose: (pilihanId: string) => void;
  onReset: () => void;
}

export function Decision({ keputusan: k, unlocked, choice, onChoose, onReset }: Props) {
  if (!unlocked) {
    return (
      <section className="step locked">
        <h3>
          <span className="no">3</span> Keputusanmu
        </h3>
        <p className="hint">Jawab kuis dengan benar untuk membuka bagian ini.</p>
      </section>
    );
  }

  const chosen = k.pilihan.find((p) => p.id === choice);
  const sejalan = !!chosen?.historis;

  return (
    <section className="step">
      <h3>
        <span className="no">3</span> Keputusanmu
      </h3>
      <p className="peran">Kamu sebagai {k.peran}</p>
      <p className="situasi">{k.situasi}</p>

      {!chosen ? (
        <div className="opts">
          {k.pilihan.map((p) => (
            <button key={p.id} type="button" className="opt" onClick={() => onChoose(p.id)}>
              {p.teks}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="choices">
            {k.pilihan.map((p) => {
              const mine = p.id === chosen.id;
              return (
                <article key={p.id} className={"choice" + (mine ? " mine" : "") + (p.historis ? " hist" : "")}>
                  <div className="tags">
                    {mine && <span className="tag mine">Pilihanmu</span>}
                    {p.historis && <span className="tag hist">Pilihan historis</span>}
                  </div>
                  <p className="teks">{p.teks}</p>
                  <p className="akibat">
                    <strong>Konsekuensi:</strong> {p.konsekuensi}
                  </p>
                </article>
              );
            })}
          </div>

          <div className={"verdict " + (sejalan ? "same" : "diff")}>
            <strong>
              {sejalan ? "Pilihanmu sama dengan yang terjadi dalam sejarah." : "Pilihanmu berbeda dari yang terjadi dalam sejarah."}
            </strong>
          </div>

          <div className="hasil">
            <h4>Yang sebenarnya terjadi</h4>
            <p>{k.hasilHistoris}</p>
          </div>

          <button type="button" className="again" onClick={onReset}>
            Pilih ulang
          </button>
        </>
      )}
    </section>
  );
}
