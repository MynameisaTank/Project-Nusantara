import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { MainMenu } from "./components/MainMenu";
import { EraSelect } from "./components/EraSelect";
const MapView = lazy(() => import("./components/MapView").then((module) => ({ default: module.MapView })));
import { NowList } from "./components/NowList";
import { StoryPanel } from "./components/StoryPanel";
import { Timebar } from "./components/Timebar";
import { YearBadge } from "./components/YearBadge";
import { Icon } from "./components/Icon";
import { ERA } from "./data/era";
import { EVENTS } from "./data/events";
import { useAutoplay } from "./hooks/useAutoplay";
import { useProgress } from "./hooks/useProgress";
import { eventById, isActive } from "./lib/events";

export default function App() {
  const [screen, setScreen] = useState<"menu" | "eras" | "game">("menu");
  const { level, setLevel, done, choices, markQuizDone, choose, resetChoice } = useProgress();
  const [year, setYear] = useState(ERA.tahunAwal);
  const [playing, setPlaying] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [wrong, setWrong] = useState<Record<string, number[]>>({});
  const [bannerOpen, setBannerOpen] = useState(false);

  const active = useMemo(() => EVENTS.filter((ev) => isActive(ev, year)), [year]);

  /* Sebuah event selesai jika kuisnya benar DAN keputusan sudah dipilih */
  const selesai = useMemo(() => {
    const r: Record<string, true> = {};
    for (const ev of EVENTS) if (done[ev.id] && choices[ev.id]) r[ev.id] = true;
    return r;
  }, [done, choices]);
  const selesaiCount = Object.keys(selesai).length;
  const sejalanCount = EVENTS.filter(
    (ev) => ev.keputusan.pilihan.find((p) => p.id === choices[ev.id])?.historis
  ).length;

  // Event yang dibuka tapi tidak lagi aktif di tahun ini -> tutup panel
  const selected = selectedId ? eventById[selectedId] : undefined;
  const panelEvent = selected && isActive(selected, year) ? selected : undefined;
  const panelId = panelEvent?.id ?? null;

  const nearby = useMemo(() => {
    if (!panelEvent) return [];
    const { lat, lng } = panelEvent.lokasi;
    const k = Math.cos((lat * Math.PI) / 180);
    const d = (e: (typeof EVENTS)[number]) => Math.hypot(e.lokasi.lat - lat, (e.lokasi.lng - lng) * k);
    return EVENTS.filter((e) => e.id !== panelEvent.id).sort((a, b) => d(a) - d(b)).slice(0, 3);
  }, [panelEvent]);

  const stop = useCallback(() => setPlaying(false), []);
  useAutoplay(playing, year, ERA.akhir, setYear, stop);

  const changeYear = (y: number) => {
    setPlaying(false);
    setYear(Math.max(ERA.mulai, Math.min(ERA.akhir, Math.round(y))));
  };

  /** Pilih peristiwa; jika belum aktif di tahun ini, linimasa ikut pindah ke awal peristiwa. */
  const pickEvent = (id: string) => {
    const ev = eventById[id];
    if (ev && !isActive(ev, year)) { setPlaying(false); setYear(ev.mulai); }
    setSelectedId(id);
  };

  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (year >= ERA.akhir) setYear(ERA.mulai);
    setPlaying(true);
  };

  const answer = (idx: number) => {
    if (!panelEvent || done[panelEvent.id]) return;
    if (idx === panelEvent.kuis.benar) {
      markQuizDone(panelEvent.id);
    } else {
      setWrong((w) => {
        const list = w[panelEvent.id] ?? [];
        return list.includes(idx) ? w : { ...w, [panelEvent.id]: [...list, idx] };
      });
    }
  };

  const decide = (pilihanId: string) => {
    if (!panelEvent || !done[panelEvent.id] || choices[panelEvent.id]) return;
    choose(panelEvent.id, pilihanId);
    if (selesaiCount + 1 === EVENTS.length) setBannerOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (screen === "menu") {
    return <MainMenu onStart={() => setScreen("eras")} onChooseEra={() => setScreen("eras")} />;
  }

  if (screen === "eras") {
    return <EraSelect onBack={() => setScreen("menu")} onSelectEra={(id) => {
      if (id !== ERA.id) return;
      setYear(ERA.tahunAwal);
      setSelectedId(null);
      setPlaying(false);
      setBannerOpen(false);
      setScreen("game");
    }} />;
  }

  return (
    <>
      <Header level={level} onLevel={setLevel} onMenu={() => { setPlaying(false); setSelectedId(null); setScreen("menu"); }} />

      <main className="stage">
        <Suspense fallback={<div className="map-loading">Memuat peta Nusantara…</div>}>
          <MapView
            active={active}
            year={year}
            done={selesai}
            selectedId={panelId}
            onSelect={pickEvent}
          />
        </Suspense>
        <NowList active={active} done={selesai} selectedId={panelId} onPick={pickEvent} />
        <YearBadge year={year} playing={playing} />

        {panelEvent && (
          <StoryPanel
            key={panelEvent.id}
            event={panelEvent}
            nearby={nearby}
            onPickNearby={pickEvent}
            level={level}
            quizDone={!!done[panelEvent.id]}
            wrong={wrong[panelEvent.id] ?? []}
            choice={choices[panelEvent.id]}
            onClose={() => setSelectedId(null)}
            onAnswer={answer}
            onChoose={decide}
            onResetChoice={() => resetChoice(panelEvent.id)}
          />
        )}

        {bannerOpen && (
          <div className="banner">
            <strong>Era selesai.</strong> Kamu sudah menyelesaikan semua misi di era “{ERA.nama}”.
            Keputusanmu sejalan dengan sejarah pada {sejalanCount} dari {EVENTS.length} peristiwa.
            Esai akhir era dan era berikutnya akan hadir di versi selanjutnya.
            <button type="button" className="x" aria-label="Tutup" onClick={() => setBannerOpen(false)}>
              <Icon name="tutup" size={14} />
            </button>
          </div>
        )}
      </main>

      <Timebar
        year={year}
        playing={playing}
        progress={`Misi selesai: ${selesaiCount}/${EVENTS.length}`}
        onYear={changeYear}
        onTogglePlay={togglePlay}
      />
    </>
  );
}
