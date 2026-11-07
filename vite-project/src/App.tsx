import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { CloudTransition } from "./components/CloudTransition";
import { Header } from "./components/Header";
import { LoadingScreen, MIN_LOADING_MS } from "./components/LoadingScreen";
import { bacaMode, deteksiPerangkat, LABEL_TINGKAT, ringkasanDeteksi, simpanMode, tingkatAktif, tingkatHemat, tingkatOtomatis, type Deteksi, type ModeGrafis, type Tingkat } from "./lib/perangkat";
import { siapkanGrafis, type Kemajuan } from "./lib/persiapan";
import { GrafisHematContext } from "./lib/grafis";
import "./styles/perangkat.css";
import "./styles/overlay-peta.css";
import { LevelDock } from "./components/LevelDock";
import { LegendaEropa } from "./components/LegendaEropa";
import { PembaruanVersi } from "./components/PembaruanVersi";

/** waktu minimal layar memuat sebelum pilihan era (globe) tampil */
const ERA_MIN_LOADING_MS = 4000;
import { MainMenu } from "./components/MainMenu";
const EraSelect = lazy(() => import("./components/EraSelect").then((module) => ({ default: module.EraSelect })));
import { ScreenCurtain } from "./components/ScreenCurtain";
const QuizMode = lazy(() => import("./components/QuizMode").then((module) => ({ default: module.QuizMode })));
import { QuizClipTransition } from "./components/QuizClipTransition";
const ExamReview = lazy(() => import("./components/ExamReview").then((module) => ({ default: module.ExamReview })));
import { useScreenTransition, type Screen } from "./hooks/useScreenTransition";
import { layarKecil } from "./lib/layar";
const MapView = lazy(() => import("./components/MapView").then((module) => ({ default: module.MapView })));
import { KingdomPanel } from "./components/KingdomPanel";
import { NowList } from "./components/NowList";
import { TimelineDrawer } from "./components/TimelineDrawer";
import { StoryPanel } from "./components/StoryPanel";
import { Timebar } from "./components/Timebar";
import { YearBadge } from "./components/YearBadge";
import { Icon } from "./components/Icon";
import { ERA } from "./data/era";
import { muatEra, type DataEra } from "./data/muatEra";
import type { Kerajaan } from "./data/kerajaan";

const TANPA_WILAYAH: Kerajaan[] = [];
/** Data kosong dipakai selama belum ada era yang dimuat (menu, pemilihan era, kuis, materi). */
const DATA_KOSONG: DataEra = { era: ERA, events: [], wilayah: TANPA_WILAYAH };
import { useAutoplay } from "./hooks/useAutoplay";
import { useProgress } from "./hooks/useProgress";
import { isActive } from "./lib/events";

export default function App() {
  const { screen, goTo, cut, curtainPhase, curtainVariant } = useScreenTransition("menu");
  // Tanda untuk watchdog di index.html: aplikasi sudah berhasil tampil, jadi pesan cadangan tidak perlu muncul.
  useEffect(() => {
    document.documentElement.dataset.siap = "1";
    try { sessionStorage.removeItem("nusantara-ulang-otomatis"); } catch { /* abaikan */ }
  }, []);
  // transisi clip ke mode kuis: kotak tombol asal, atau null bila tidak sedang berjalan
  const [klip, setKlip] = useState<{ asal: DOMRect; tujuan: Screen; kata: [string, string] } | null>(null);
  /** Di ponsel, tombol menu memakai transisi clip yang sama dengan Mode kuis; di layar lebar tetap transisi piksel. */
  const bukaDariMenu = (tujuan: Screen, kata: [string, string], asal?: DOMRect) => {
    if (asal && layarKecil()) setKlip({ asal, tujuan, kata });
    else goTo(tujuan, "pixel");
  };
  const { level, setLevel, done, choices, markQuizDone, choose, resetChoice } = useProgress();
  const [eraId, setEraId] = useState(ERA.id);
  // Data satu era baru diunduh ketika era itu dipilih (lihat data/muatEra.ts); sebelum itu dipakai data kosong.
  const [dataTermuat, setDataTermuat] = useState<DataEra | null>(null);
  const dataEra = dataTermuat && dataTermuat.era.id === eraId ? dataTermuat : DATA_KOSONG;
  const eraSiap = dataEra !== DATA_KOSONG;
  const era = dataEra.era;
  const events = dataEra.events;
  const eventById = useMemo(() => Object.fromEntries(events.map((ev) => [ev.id, ev])), [events]);
  const [year, setYear] = useState(ERA.tahunAwal);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [kingdomId, setKingdomId] = useState<string | null>(null);
  const [wrong, setWrong] = useState<Record<string, number[]>>({});
  const [bannerOpen, setBannerOpen] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);
  const [showClouds, setShowClouds] = useState(false);
  const [eraReady, setEraReady] = useState(false);
  const [eraMinDone, setEraMinDone] = useState(false);
  /* Pemasangan aset grafis: deteksi perangkat, lalu unduh modul dan gambar sebelum menu dibuka */
  const [deteksi, setDeteksi] = useState<Deteksi | null>(null);
  const [modeGrafis, setModeGrafis] = useState<ModeGrafis>(() => bacaMode());
  const [kemajuanGrafis, setKemajuanGrafis] = useState<Kemajuan | null>(null);
  const [grafisSiap, setGrafisSiap] = useState(false);
  const tingkat: Tingkat | null = deteksi ? tingkatAktif(modeGrafis, deteksi) : null;
  useEffect(() => {
    let batal = false;
    (async () => {
      const d = await deteksiPerangkat();
      if (batal) return;
      setDeteksi(d);
      await siapkanGrafis(tingkatAktif(bacaMode(), d), d.hemat, (k) => { if (!batal) setKemajuanGrafis(k); });
      if (!batal) setGrafisSiap(true);
    })();
    return () => { batal = true; };
  }, []);
  /* Tingkat Ringan dan Dasar: tanpa animasi dekoratif dan efek GPU yang mahal (lihat styles/ringan.css) */
  const hemat = tingkat !== null && tingkatHemat(tingkat);
  useEffect(() => {
    document.documentElement.classList.toggle("grafis-ringan", hemat);
  }, [hemat]);
  const [tampilkanWilayah, setTampilkanWilayah] = useState(true);
  const [darkMap, setDarkMap] = useState<boolean>(() => {
    try { return window.localStorage.getItem("peta-gelap") === "1"; } catch { return false; }
  });
  useEffect(() => {
    try { window.localStorage.setItem("peta-gelap", darkMap ? "1" : "0"); } catch { /* abaikan */ }
    document.documentElement.classList.toggle("ui-dark", darkMap);
  }, [darkMap]);
  const wilayah = dataEra.wilayah.length > 0 ? dataEra.wilayah : TANPA_WILAYAH;

  /**
   * Tampilkan layar memuat setiap kali masuk ke peta dari menu seleksi era, bukan hanya sekali.
   * Begitu selesai, lepaskan tirai awan yang bubar ke tepi layar sebelum peta benar-benar terlihat.
   */
  const [mapMinDone, setMapMinDone] = useState(false);
  useEffect(() => {
    if (!mapLoading) return;
    const timer = window.setTimeout(() => setMapMinDone(true), MIN_LOADING_MS);
    return () => window.clearTimeout(timer);
  }, [mapLoading]);
  // Layar memuat baru dilepas setelah waktu minimum berlalu DAN data era selesai diunduh.
  useEffect(() => {
    if (!mapLoading || !mapMinDone || !eraSiap) return;
    setMapLoading(false);
    // Perangkat lemah melewati tirai awan: ratusan lapisan transparan yang beranimasi membuat peta tersendat saat muncul.
    setShowClouds(!hemat);
    setMapMinDone(false);
  }, [mapLoading, mapMinDone, eraSiap, hemat]);

  // Pilihan keputusan tersimpan yang id-nya tidak lagi ada di peristiwanya dibuang saat data era dimuat.
  useEffect(() => {
    for (const ev of events) {
      const pilihan = choices[ev.id];
      if (pilihan && !ev.keputusan.pilihan.some((p) => p.id === pilihan)) resetChoice(ev.id);
    }
    // sengaja hanya saat data era berganti
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  /**
   * Layar pilihan era memuat globe dulu. Loading ditampilkan sampai globe siap
   * dan minimal ERA_MIN_LOADING_MS sudah berlalu, supaya tips sempat terbaca.
   */
  useEffect(() => {
    if (screen !== "eras") return;
    setEraReady(false);
    setEraMinDone(false);
    const timer = window.setTimeout(() => setEraMinDone(true), ERA_MIN_LOADING_MS);
    return () => window.clearTimeout(timer);
  }, [screen]);

  const active = useMemo(() => events.filter((ev) => isActive(ev, year)), [events, year]);

  /* Sebuah event selesai jika kuisnya benar DAN keputusan sudah dipilih */
  const selesai = useMemo(() => {
    const r: Record<string, true> = {};
    for (const ev of events) if (done[ev.id] && choices[ev.id]) r[ev.id] = true;
    return r;
  }, [done, choices, events]);
  const selesaiCount = Object.keys(selesai).length;
  const sejalanCount = events.filter(
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
    const d = (e: (typeof events)[number]) => Math.hypot(e.lokasi.lat - lat, (e.lokasi.lng - lng) * k);
    return events.filter((e) => e.id !== panelEvent.id).sort((a, b) => d(a) - d(b)).slice(0, 3);
  }, [panelEvent, events]);

  const stop = useCallback(() => setPlaying(false), []);
  useAutoplay(playing, year, era.akhir, setYear, stop, 120 / Math.min(speed, 1), Math.max(1, speed));

  const changeYear = (y: number) => {
    setPlaying(false);
    setYear(Math.max(era.mulai, Math.min(era.akhir, Math.round(y))));
  };

  /** Pilih peristiwa; jika belum aktif di tahun ini, linimasa ikut pindah ke awal peristiwa. */
  const pickEvent = (id: string) => {
    const ev = eventById[id];
    if (ev && !isActive(ev, year)) { setPlaying(false); setYear(ev.mulai); }
    setKingdomId(null);
    setSelectedId(id);
  };

  const pickKingdom = (id: string) => {
    setSelectedId(null);
    setKingdomId(id);
  };

  const kingdom = kingdomId ? wilayah.find((k) => k.id === kingdomId) : undefined;

  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (year >= era.akhir) setYear(era.mulai);
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
    if (selesaiCount + 1 === events.length) setBannerOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
        setKingdomId(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  let content;
  if (screen === "menu") {
    content = <MainMenu onStart={() => goTo("eras", "pixel")} onChooseEra={(asal) => bukaDariMenu("eras", ["PILIH", "ERA"], asal)} onOpenMateri={(asal) => bukaDariMenu("materi", ["MATERI", "UJIAN"], asal)} onOpenKuis={(asal) => setKlip({ asal, tujuan: "kuis", kata: ["MODE", "QUIZ"] })} tingkat={tingkat ?? "dasar"} mode={modeGrafis} terdeteksi={deteksi ? tingkatOtomatis(deteksi) : "dasar"} onModeChange={(m) => { setModeGrafis(m); simpanMode(m); }} diagnosis={deteksi ? ringkasanDeteksi(deteksi) : undefined} />;
  } else if (screen === "materi") {
    content = <ExamReview onBack={() => goTo("menu")} />;
  } else if (screen === "kuis") {
    content = <QuizMode onBack={() => goTo("menu")} />;
  } else if (screen === "eras") {
    content = <EraSelect tingkat={tingkat ?? "dasar"} onBack={() => goTo("menu")} onReady={() => setEraReady(true)} onSelectEra={(id) => {
      const janji = muatEra(id);
      if (!janji) return;
      setEraId(id);
      setSelectedId(null);
      setKingdomId(null);
      setPlaying(false);
      setBannerOpen(false);
      setMapLoading(true);
      setShowClouds(false);
      goTo("game");
      // Data era diunduh sambil layar memuat tampil; tahun awal ikut diatur begitu data siap.
      janji
        .then((data) => {
          setDataTermuat(data);
          setYear(data.era.tahunAwal);
        })
        .catch((galat) => {
          console.error("[era] data gagal diunduh:", galat);
          setMapLoading(false);
          window.alert("Data era belum bisa diunduh. Periksa sambungan internet, lalu coba lagi.");
          goTo("eras");
        });
    }} />;
  } else if (!eraSiap) {
    // Data era masih diunduh (jaringan lambat): tahan di layar memuat sampai siap.
    content = <LoadingScreen />;
  } else {
    content = (
    <>
      <Header onMenu={() => { setPlaying(false); setSelectedId(null); goTo("menu"); }} />

      <main className={"stage" + (panelEvent || kingdom ? " stage--panel" : "")}>
        <LevelDock level={level} onLevel={setLevel} />
        <LegendaEropa wilayah={wilayah} />
        {mapLoading && <LoadingScreen />}
        {showClouds && <CloudTransition ready onDone={() => setShowClouds(false)} />}
        <Suspense fallback={<LoadingScreen />}>
          <MapView
            active={active}
            events={events}
            year={year}
            done={selesai}
            selectedId={panelId}
            onSelect={pickEvent}
            wilayah={wilayah}
            tampilkanWilayah={tampilkanWilayah}
            onKingdomSelect={pickKingdom}
            darkMap={darkMap}
            ringan={hemat}
          />
        </Suspense>
        <NowList active={active} events={events} year={year} era={era} done={selesai} selectedId={panelId} onPick={pickEvent} onYear={changeYear} />
        <YearBadge year={year} playing={playing} />
        <TimelineDrawer events={events} year={year} selectedId={panelId} onPick={pickEvent} />

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

        {kingdom && (
          <KingdomPanel key={kingdom.id} kerajaan={kingdom} year={year} onClose={() => setKingdomId(null)} />
        )}

        {bannerOpen && (
          <div className="banner">
            <strong>Era selesai.</strong> Kamu sudah menyelesaikan semua misi di era “{era.nama}”.
            Keputusanmu sejalan dengan sejarah pada {sejalanCount} dari {events.length} peristiwa.
            <button type="button" className="x" aria-label="Tutup" onClick={() => setBannerOpen(false)}>
              <Icon name="tutup" size={14} />
            </button>
          </div>
        )}
      </main>

      <Timebar
        era={era}
        events={events}
        year={year}
        playing={playing}
        progress={`Misi selesai: ${selesaiCount}/${events.length}`}
        speed={speed}
        onSpeed={setSpeed}
        onYear={changeYear}
        onTogglePlay={togglePlay}
        wilayahTersedia={wilayah.length > 0}
        tampilkanWilayah={tampilkanWilayah}
        onToggleWilayah={() => setTampilkanWilayah((v) => !v)}
        darkMap={darkMap}
        onToggleDark={() => setDarkMap((v) => !v)}
      />
    </>
    );
  }

  if (!grafisSiap || tingkat === null) {
    return (
      <LoadingScreen
        label="Menyiapkan grafik untuk perangkatmu…"
        // Sebelum tingkat diketahui, dan di perangkat lemah, tidak ada dinding gambar yang berebut unduhan penting
        polos={tingkat === null || hemat}
        progres={kemajuanGrafis}
        detail={tingkat ? `Mode grafis: ${LABEL_TINGKAT[tingkat]}${kemajuanGrafis ? ` · ${kemajuanGrafis.keterangan}` : ""}` : "Memeriksa kemampuan perangkat…"}
      />
    );
  }

  return (
    <GrafisHematContext.Provider value={hemat}>
      <ScreenCurtain phase={curtainPhase} variant={curtainVariant} />
      <PembaruanVersi />
      {klip && <QuizClipTransition asal={klip.asal} kata={klip.kata} onCover={() => cut(klip.tujuan)} onDone={() => setKlip(null)} />}
      {screen === "eras" && !(eraReady && eraMinDone) && <LoadingScreen />}
      <Suspense fallback={<div style={{ position: "fixed", inset: 0, background: "#050606" }} />}>
        {content}
      </Suspense>
    </GrafisHematContext.Provider>
  );
}
