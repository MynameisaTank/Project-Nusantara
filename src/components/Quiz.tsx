import type { Kuis } from "../types";

interface Props {
  kuis: Kuis;
  done: boolean;
  wrong: number[];
  onAnswer: (idx: number) => void;
}

export function Quiz({ kuis: q, done, wrong, onAnswer }: Props) {
  return (
    <section className="step">
      <h3>
        <span className="no">2</span> Uji pemahamanmu
      </h3>
      <p className="q">{q.tanya}</p>
      <div className="opts">
        {q.pilihan.map((txt, i) => {
          const isWrong = wrong.includes(i);
          const cls = "opt" + (done && i === q.benar ? " right" : isWrong ? " wrong" : "");
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={done || isWrong}
              onClick={() => onAnswer(i)}
            >
              {txt}
            </button>
          );
        })}
      </div>
      {done ? (
        <p className="feedback ok">
          <strong>Benar.</strong> {q.penjelasan}
        </p>
      ) : wrong.length > 0 ? (
        <p className="feedback no">Belum tepat. Baca ceritanya sekali lagi, lalu coba pilihan lain.</p>
      ) : null}
    </section>
  );
}
