import { useEffect, useState } from "react";
import { loadStore, saveStore } from "../lib/store";
import type { Level } from "../types";

/** Level bahasa, kuis, dan keputusan pemain, tersimpan di localStorage. */
export function useProgress() {
  const [saved] = useState(loadStore);
  const [level, setLevel] = useState<Level>(saved.level);
  const [done, setDone] = useState(saved.done);
  const [choices, setChoices] = useState(saved.choices);

  useEffect(() => {
    saveStore({ level, done, choices });
  }, [level, done, choices]);

  const markQuizDone = (id: string) => setDone((d) => (d[id] ? d : { ...d, [id]: true }));
  const choose = (id: string, pilihanId: string) =>
    setChoices((c) => (c[id] ? c : { ...c, [id]: pilihanId }));
  const resetChoice = (id: string) =>
    setChoices((c) => {
      const { [id]: _removed, ...rest } = c;
      return rest;
    });

  return { level, setLevel, done, choices, markQuizDone, choose, resetChoice };
}
