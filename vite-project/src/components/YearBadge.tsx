import { useEffect, useState } from "react";
import Shuffle from "./reactbits/Shuffle";
import "../styles/atlas-polish.css";

interface Props {
  year: number;
  playing: boolean;
}

/** Tahun terpilih di tengah atas peta. Saat diam, angka berganti dengan efek Shuffle. */
export function YearBadge({ year, playing }: Props) {
  const [settled, setSettled] = useState(year);

  useEffect(() => {
    // Saat diputar, selalu ikuti tahun terbaru supaya tidak ada angka lama saat di-pause.
    if (playing) {
      setSettled(year);
      return;
    }
    // Saat diam (mis. menggeser slider), tunda sedikit agar animasi tidak jalan di tiap langkah.
    const t = window.setTimeout(() => setSettled(year), 160);
    return () => window.clearTimeout(t);
  }, [year, playing]);

  return (
    <div className="year-badge" role="status" aria-label={`Tahun ${year} M`}>
      {playing ? (
        <span className="year-plain">{year}</span>
      ) : (
        <Shuffle
          key={settled}
          text={String(settled)}
          tag="span"
          className="year-shuffle"
          effect="slide"
          shuffleDirection="up"
          duration={0.45}
          shuffleTimes={2}
          animationMode="sequence"
          stagger={0.04}
          scrambleCharset="0123456789"
          threshold={0}
          rootMargin="0px"
          triggerOnce
          segera
          triggerOnHover={false}
          textAlign="left"
        />
      )}
      <span className="year-badge-suffix" aria-hidden="true">M</span>
    </div>
  );
}
