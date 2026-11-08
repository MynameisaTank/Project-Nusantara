import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { KATEGORI } from "../data/era";
import type { Kerajaan } from "../data/kerajaan";
import type { SejarahEvent } from "../types";
import { isUtama } from "../lib/jenis";
import { kekuatanPadaTahun, opasitasWilayah } from "../lib/kekuasaan";
import { MODA_LABEL, MODA_SVG } from "../lib/moda";
import { perjalananDekat } from "../lib/perjalanan";
import { layarKecil } from "../lib/layar";
import "../styles/jenis-event.css";
import "../styles/perjalanan.css";
import "../styles/wilayah.css";

const DURASI_PERJALANAN_MS = 9000;
const BAGIAN_JALAN = 0.85;
const AMBANG_LABEL_WILAYAH = 0.12;

interface Props {
  active: SejarahEvent[];
  events: SejarahEvent[];
  year: number;
  done: Record<string, true>;
  selectedId: string | null;
  onSelect: (id: string) => void;
  wilayah: Kerajaan[];
  tampilkanWilayah: boolean;
  onKingdomSelect: (id: string) => void;
  darkMap?: boolean;
  /** perangkat lemah: tanpa relief dan animasi ubin, bentuk wilayah lebih sederhana */
  ringan?: boolean;
}

const RETINA_ASLI = L.Browser.retina;

// Lebar label diperkirakan dari jumlah huruf supaya tidak perlu mengukur DOM.
const LEBAR_HURUF_LABEL = 6.4;
const PADDING_LABEL = 20;
const TINGGI_LABEL = 20;

/** Di layar sempit, sembunyikan label yang menabrak label kerajaan yang lebih kuat. */
function tipiskanLabel(
  map: L.Map,
  layer: L.LayerGroup,
  labels: Map<string, L.Marker>,
  kekuatan: Map<string, number>,
  nama: Map<string, string>
): void {
  const kandidat = [...labels].filter(([, marker]) => layer.hasLayer(marker));
  kandidat.sort((a, b) => (kekuatan.get(b[0]) ?? 0) - (kekuatan.get(a[0]) ?? 0));
  const terpakai: [number, number, number, number][] = [];
  for (const [id, marker] of kandidat) {
    const titik = map.latLngToContainerPoint(marker.getLatLng());
    const setengahLebar = ((nama.get(id)?.length ?? 8) * LEBAR_HURUF_LABEL + PADDING_LABEL) / 2;
    const kotak: [number, number, number, number] = [
      titik.x - setengahLebar,
      titik.y - TINGGI_LABEL / 2,
      titik.x + setengahLebar,
      titik.y + TINGGI_LABEL / 2
    ];
    const bentrok = terpakai.some(
      (k) => kotak[0] < k[2] && kotak[2] > k[0] && kotak[1] < k[3] && kotak[3] > k[1]
    );
    marker.getElement()?.classList.toggle("is-tersembunyi", bentrok);
    if (!bentrok) terpakai.push(kotak);
  }
}

function centroid(ring: [number, number][]): [number, number] {
  if (ring.length === 0) return [0, 0];
  let lat = 0, lng = 0;
  for (const [a, b] of ring) { lat += a; lng += b; }
  return [lat / ring.length, lng / ring.length];
}

const EVENT_SYMBOLS: Record<string, string> = {
  politik: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 13 16 6l11 7H5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 26h18M9 14v10m5-10v10m4-10v10m5-10v10M6 27h20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  perang: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m8 5 3 1 13 17-2 3L6 9l2-4Zm16 0-3 1L8 23l2 3L26 9l-2-4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m5 7 3-3 3 3M21 25l3 3 3-3M24 7l3-3 3 3M5 25l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  perdagangan: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4v19M16 6 7 20h9M18 10l8 10h-8M5 23c3 3 6 3 11 3s8 0 11-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28h24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  agama: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4v24M7 11h18M9 11c0 7 3 11 7 11s7-4 7-11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  diplomasi: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9h22v14H5zM9 14h14M9 18h9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m12 5 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  budaya: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 8c5-2 9-1 12 2v17c-3-3-7-4-12-2V8Zm24 0c-5-2-9-1-12 2v17c3-3 7-4 12-2V8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 13c2-.4 4 0 5 1m-5 3c2-.4 4 0 5 1m6-4c2-1 3-1 5-1m-5 5c2-1 3-1 5-1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

function makeEventIcon(categoryId: string, color: string, kind: "utama" | "sampingan") {
  const symbol = EVENT_SYMBOLS[categoryId] ?? EVENT_SYMBOLS.politik;

  return L.divIcon({
    className: "atlas-marker-shell",
    html: `
      <span class="atlas-marker atlas-marker--${categoryId} atlas-marker--${kind}" style="--marker-color:${color}" role="img">
        <span class="atlas-marker-symbol">${symbol}</span>
      </span>
    `,
    iconSize: L.point(36, 36),
    iconAnchor: L.point(18, 18)
  });
}

export function MapView({ active, events, year, done, selectedId, onSelect, wilayah, tampilkanWilayah, onKingdomSelect, darkMap, ringan = false }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const wilayahLayerRef = useRef<L.LayerGroup | null>(null);
  const wilayahPolyRef = useRef<Map<string, L.Polygon>>(new Map());
  const wilayahLabelRef = useRef<Map<string, L.Marker>>(new Map());
  const kekuatanLabelRef = useRef<Map<string, number>>(new Map());
  const namaLabelRef = useRef<Map<string, string>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const onKingdomRef = useRef(onKingdomSelect);
  onKingdomRef.current = onKingdomSelect;
  // Dibaca saat peta dibuat.
  const ringanRef = useRef(ringan);
  ringanRef.current = ringan;

  useEffect(() => {
    const el = elRef.current;
    if (!el || mapRef.current) return;

    const hemat = ringanRef.current;
    // Kanvas 1x di perangkat lemah: garis sedikit lebih lembut, tapi jauh lebih ringan.
    (L.Browser as { retina: boolean }).retina = hemat ? false : RETINA_ASLI;
    const map = L.map(el, {
      zoomControl: false,
      minZoom: 4,
      maxZoom: 10,
      maxBounds: L.latLngBounds([[-18, 88], [14, 150]]),
      maxBoundsViscosity: 0.72,
      scrollWheelZoom: true,
      preferCanvas: true,
      fadeAnimation: !hemat,
      markerZoomAnimation: !hemat
    });

    mapRef.current = map;

    L.control.zoom({ position: "bottomright" }).addTo(map);
    map.fitBounds([[-10.5, 95], [6, 141]]);

    // World_Topo_Map sudah punya label, jadi tidak perlu lapisan referensi lagi.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 13,
        opacity: 1,
        ...(hemat ? { keepBuffer: 1, updateWhenZooming: false } : {}),
        attribution:
          "Tiles &copy; Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, and the GIS user community"
      }
    ).addTo(map);

    // Relief tipis; dilewati di ponsel karena menggandakan permintaan ubin.
    if (!hemat && !layarKecil()) {
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 13,
          opacity: 0.12,
          attribution: "Hillshade &copy; Esri"
        }
      ).addTo(map);
    }

    const layer = L.layerGroup().addTo(map);
    const markers = new Map<string, L.Marker>();

    for (const ev of events) {
      const category = KATEGORI[ev.kategori] ?? KATEGORI.politik;
      const icon = makeEventIcon(String(ev.kategori), category.warna, isUtama(ev) ? "utama" : "sampingan");

      const marker = L.marker([ev.lokasi.lat, ev.lokasi.lng], {
        icon,
        title: `${ev.judul} (${ev.tahun})`,
        alt: `${ev.judul}, ${ev.tahun}`,
        riseOnHover: true,
        keyboard: true
      });

      marker.on("click", () => onSelectRef.current(ev.id));
      marker.on("keypress", (event: L.LeafletEvent) => {
        if ((event as unknown as KeyboardEvent).key === "Enter") {
          onSelectRef.current(ev.id);
        }
      });

      markers.set(ev.id, marker);
    }

    layerRef.current = layer;
    markersRef.current = markers;

    const resize = () => map.invalidateSize({ pan: false });
    const timer = window.setTimeout(resize, 150);
    window.addEventListener("resize", resize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resize);
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
      markersRef.current.clear();
    };
  }, [events]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const activeIds = new Set(active.map((event) => event.id));
    const terlihat: { event: SejarahEvent; marker: L.Marker }[] = [];

    for (const event of events) {
      const marker = markersRef.current.get(event.id);
      if (!marker) continue;

      if (activeIds.has(event.id)) {
        if (!layer.hasLayer(marker)) layer.addLayer(marker);
        terlihat.push({ event, marker });
      } else if (layer.hasLayer(marker)) {
        layer.removeLayer(marker);
      }
    }

    // Satu frame untuk semua penanda, karena efek ini sering jalan saat autoplay.
    const bingkai = requestAnimationFrame(() => {
      for (const { event, marker } of terlihat) {
        const visual = marker.getElement()?.querySelector(".atlas-marker");
        if (!visual) continue;

        visual.classList.toggle(
          "is-new",
          year - event.mulai >= 0 && year - event.mulai <= 15
        );
        visual.classList.toggle("is-complete", !!done[event.id]);
        visual.classList.toggle("is-selected", selectedId === event.id);
      }
    });
    return () => cancelAnimationFrame(bingkai);
  }, [active, events, year, done, selectedId]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const layer = L.layerGroup();
    const polys = new Map<string, L.Polygon>();
    const labels = new Map<string, L.Marker>();
    const nama = new Map<string, string>();
    for (const k of wilayah) {
      const kolonial = k.jenis === "kolonial";
      const poly = L.polygon(k.wilayah, {
        color: k.warna,
        weight: kolonial ? 2 : 1,
        dashArray: kolonial ? "4 3" : undefined,
        opacity: 0,
        fillColor: k.warna,
        fillOpacity: 0,
        interactive: true,
        smoothFactor: ringanRef.current ? 2.5 : 1
      });
      polys.set(k.id, poly);
      layer.addLayer(poly);

      poly.on("click", () => onKingdomRef.current(k.id));
      if (!kolonial && !k.tanpaLabel) {
        const [lat, lng] = k.labelPoint ?? centroid(k.wilayah[0] ?? []);
        const label = L.marker([lat, lng], {
          icon: L.divIcon({
            className: "wilayah-label-shell",
            html: `<span class="wilayah-label" style="--label-color:${k.warna}">${k.nama}</span>`,
            iconSize: L.point(0, 0),
            iconAnchor: L.point(0, 0)
          }),
          interactive: true,
          keyboard: false
        });
        label.on("click", () => onKingdomRef.current(k.id));
        labels.set(k.id, label);
        nama.set(k.id, k.nama);
      }
    }

    wilayahLayerRef.current = layer;
    wilayahPolyRef.current = polys;
    wilayahLabelRef.current = labels;
    namaLabelRef.current = nama;
    kekuatanLabelRef.current = new Map();

    return () => {
      layer.remove();
      wilayahLayerRef.current = null;
      wilayahPolyRef.current = new Map();
      wilayahLabelRef.current = new Map();
      namaLabelRef.current = new Map();
      kekuatanLabelRef.current = new Map();
    };
  }, [wilayah]);

  useEffect(() => {
    const map = mapRef.current;
    const layer = wilayahLayerRef.current;
    if (!map || !layer) return;

    if (!tampilkanWilayah) {
      if (map.hasLayer(layer)) layer.remove();
      return;
    }
    if (!map.hasLayer(layer)) layer.addTo(map);

    for (const k of wilayah) {
      const poly = wilayahPolyRef.current.get(k.id);
      if (!poly) continue;
      const kekuatan = kekuatanPadaTahun(k, year);
      const fillOpacity = opasitasWilayah(kekuatan);
      poly.setStyle({ fillOpacity, opacity: fillOpacity > 0 ? Math.min(0.55, fillOpacity + 0.2) : 0 });

      const label = wilayahLabelRef.current.get(k.id);
      if (label) {
        const tampakkanLabel = kekuatan >= AMBANG_LABEL_WILAYAH;
        if (tampakkanLabel && !layer.hasLayer(label)) layer.addLayer(label);
        if (!tampakkanLabel && layer.hasLayer(label)) layer.removeLayer(label);
        kekuatanLabelRef.current.set(k.id, kekuatan);
      }
    }
    if (layarKecil()) tipiskanLabel(map, layer, wilayahLabelRef.current, kekuatanLabelRef.current, namaLabelRef.current);
  }, [year, tampilkanWilayah, wilayah]);

  // Tabrakan label hanya berubah saat zoom, bukan saat digeser.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !tampilkanWilayah || !layarKecil()) return;
    const tipiskan = () => {
      const layer = wilayahLayerRef.current;
      if (layer) tipiskanLabel(map, layer, wilayahLabelRef.current, kekuatanLabelRef.current, namaLabelRef.current);
    };
    map.on("zoomend", tipiskan);
    return () => {
      map.off("zoomend", tipiskan);
    };
  }, [tampilkanWilayah, wilayah]);

  useEffect(() => {
    const map = mapRef.current;
    const event = events.find((item) => item.id === selectedId);
    if (!map || !event) return;

    const zoom = Math.max(
      map.getZoom(),
      event.lokasi.presisi === "situs" ? 8 : 6
    );
    const desktop = window.innerWidth > 860;
    const offset = L.point(
      desktop ? 155 : 0,
      desktop ? 0 : window.innerHeight * 0.12
    );
    const target = map
      .project([event.lokasi.lat, event.lokasi.lng], zoom)
      .add(offset);

    map.flyTo(map.unproject(target, zoom), zoom, {
      duration: 0.65,
      easeLinearity: 0.25
    });
  }, [selectedId, events]);

  const aktifKey = active.map((event) => event.id).join(",");

  useEffect(() => {
    const map = mapRef.current;
    const pusat = events.find((event) => event.id === selectedId);
    if (!map || !pusat || !active.some((event) => event.id === pusat.id)) return;

    const layer = L.layerGroup().addTo(map);
    const warna = (KATEGORI[pusat.kategori] ?? KATEGORI.politik).warna;
    const perjalanan = perjalananDekat(pusat, active).map((j) => {
      L.polyline(j.titik, {
        color: warna,
        weight: 2,
        dashArray: "4 6",
        opacity: 0.6,
        interactive: false
      }).addTo(layer);

      const marker = L.marker(j.awal, {
        icon: L.divIcon({
          className: "travel-marker",
          html: `<span class="travel-vessel" role="img" aria-label="${MODA_LABEL[j.moda]}" style="--travel-color:${warna}">${MODA_SVG[j.moda]}</span>`,
          iconSize: L.point(30, 30),
          iconAnchor: L.point(15, 15)
        }),
        interactive: false,
        keyboard: false
      }).addTo(layer);

      return { marker, titik: j.titik };
    });

    if (perjalanan.length === 0) return () => layer.remove();

    const diam = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (diam) {
      for (const { marker, titik } of perjalanan) {
        const tengah = titik[Math.floor(titik.length / 2)];
        if (tengah) marker.setLatLng(tengah);
      }
      return () => layer.remove();
    }

    const mulai = performance.now();
    let frameId = 0;

    const frame = (now: number) => {
      perjalanan.forEach(({ marker, titik }, i) => {
        const fase = ((now - mulai) / DURASI_PERJALANAN_MS + i / perjalanan.length) % 1;
        if (fase > BAGIAN_JALAN) {
          marker.setOpacity(0);
        } else {
          marker.setOpacity(1);
          const posisi = (fase / BAGIAN_JALAN) * (titik.length - 1);
          const segmen = Math.min(Math.floor(posisi), titik.length - 2);
          const u = posisi - segmen;
          const a = titik[segmen];
          const b = titik[segmen + 1];
          if (!a || !b) return;
          const [lat0, lng0] = a;
          const [lat1, lng1] = b;
          marker.setLatLng([lat0 + (lat1 - lat0) * u, lng0 + (lng1 - lng0) * u]);
          const arah = lng1 < lng0 ? -1 : 1;
          const vessel = marker.getElement()?.querySelector<HTMLElement>(".travel-vessel");
          if (vessel) vessel.style.transform = `scaleX(${arah})`;
        }
      });
      frameId = requestAnimationFrame(frame);
    };
    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
      layer.remove();
    };
  }, [selectedId, events, aktifKey]);

  return (
    <div
      id="map"
      ref={elRef}
      className={darkMap ? "map-dark" : undefined}
      role="application"
      aria-label="Peta interaktif Nusantara"
    />
  );
}
