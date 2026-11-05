import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { KATEGORI } from "../data/era";
import { EVENTS } from "../data/events";
import type { KategoriId, SejarahEvent } from "../types";

interface Props {
  active: SejarahEvent[];
  year: number;
  done: Record<string, true>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CATEGORY_SYMBOLS: Record<KategoriId, string> = {
  politik: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 13 16 6l11 7H5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 26h18M9 14v10m5-10v10m4-10v10m5-10v10M6 27h20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  perang: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m8 5 3 1 13 17-2 3L6 9l2-4Zm16 0-3 1L8 23l2 3L26 9l-2-4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m5 7 3-3 3 3M21 25l3 3 3-3M24 7l3-3 2 3M5 25l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  perdagangan: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4v19M16 6 7 20h9M18 10l8 10h-8M5 23c3 3 6 3 11 3s8 0 11-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28h24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  budaya: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 8c5-2 9-1 12 2v17c-3-3-7-4-12-2V8Zm24 0c-5-2-9-1-12 2v17c3-3 7-4 12-2V8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 13c2-.4 4 0 5 1m-5 3c2-.4 4 0 5 1m6-4c2-1 3-1 5-1m-5 5c2-1 3-1 5-1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

const CATEGORY_LABEL: Record<KategoriId, string> = {
  politik: "Politik",
  perang: "Konflik",
  perdagangan: "Perdagangan",
  budaya: "Budaya"
};

function eventIcon(category: KategoriId, color: string) {
  const symbol = CATEGORY_SYMBOLS[category];
  return L.divIcon({
    className: "atlas-event-icon",
    html: `<span class="atlas-event-badge atlas-event-badge--${category}" style="--event-color:${color}" role="img" aria-label="${CATEGORY_LABEL[category]}"><span class="atlas-event-symbol">${symbol}</span></span>`,
    iconSize: L.point(52, 52),
    iconAnchor: L.point(26, 26),
    popupAnchor: L.point(0, -24)
  });
}

/** Geographic cloud anchors; the inner artwork animates while Leaflet keeps each cloud
 * attached to its map coordinate during pan and zoom. */
const CLOUDS = [
  { lat: 5.0, lng: 96.8, scale: 1.05, speed: 46, delay: -12 },
  { lat: 2.5, lng: 103.4, scale: 0.82, speed: 58, delay: -31 },
  { lat: -1.0, lng: 108.4, scale: 1.18, speed: 52, delay: -7 },
  { lat: -6.0, lng: 112.0, scale: 0.90, speed: 64, delay: -43 },
  { lat: 3.0, lng: 117.4, scale: 1.00, speed: 55, delay: -22 },
  { lat: -4.8, lng: 122.5, scale: 1.15, speed: 49, delay: -37 },
  { lat: 1.8, lng: 128.3, scale: 0.86, speed: 62, delay: -16 },
  { lat: -5.5, lng: 133.8, scale: 1.10, speed: 57, delay: -48 },
  { lat: -1.5, lng: 140.0, scale: 0.92, speed: 67, delay: -27 }
] as const;

function cloudIcon(scale: number, speed: number, delay: number) {
  return L.divIcon({
    className: "atlas-cloud-icon",
    html: `<span class="atlas-cloud-drift" style="--cloud-scale:${scale};--cloud-speed:${speed}s;--cloud-delay:${delay}s" aria-hidden="true"><svg class="atlas-cloud-art" viewBox="0 0 180 88" focusable="false"><defs><linearGradient id="atlas-cloud-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".94"/><stop offset="1" stop-color="#edf5f5" stop-opacity=".70"/></linearGradient></defs><path d="M35 67C17 67 9 56 12 43c2-11 12-18 25-18 5-17 20-25 37-20 12 3 19 12 21 23 17-8 36 1 38 18 16-2 28 8 27 21-1 13-11 20-26 20H35Z" fill="url(#atlas-cloud-fill)" stroke="#fff" stroke-opacity=".72" stroke-width="2"/><path d="M34 67c18 7 91 8 125-1" fill="none" stroke="#d7e5e6" stroke-opacity=".6" stroke-width="2"/></svg></span>`,
    iconSize: L.point(180, 88),
    iconAnchor: L.point(90, 44)
  });
}

export function MapView({ active, year, done, selectedId, onSelect }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const el = elRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      zoomControl: false,
      minZoom: 4,
      maxZoom: 12,
      maxBounds: L.latLngBounds([[-18, 88], [14, 150]]),
      maxBoundsViscosity: 0.72,
      scrollWheelZoom: true,
      preferCanvas: true
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);
    map.fitBounds([[-10.5, 95], [6, 141]]);

    // Terrain basemap: shaded land relief plus ocean-floor/bathymetric rendering.
    // This replaces the previous plain OpenStreetMap tile source.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 13,
        opacity: 1,
        attribution: "Tiles &copy; Esri — sources include GEBCO, NOAA, Garmin, and the GIS User Community"
      }
    ).addTo(map);

    // Geographic names and reference labels sit above the terrain.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 13,
        opacity: 0.92,
        attribution: "Labels &copy; Esri"
      }
    ).addTo(map);

    // Clouds occupy their own non-interactive pane: above map tiles, below event markers.
    map.createPane("cloudPane");
    const cloudPane = map.getPane("cloudPane");
    if (cloudPane) {
      cloudPane.style.zIndex = "450";
      cloudPane.style.pointerEvents = "none";
    }
    const cloudLayer = L.layerGroup().addTo(map);
    for (const cloud of CLOUDS) {
      L.marker([cloud.lat, cloud.lng], {
        pane: "cloudPane",
        icon: cloudIcon(cloud.scale, cloud.speed, cloud.delay),
        interactive: false,
        keyboard: false
      }).addTo(cloudLayer);
    }

    const layer = L.layerGroup().addTo(map);
    const markers = new Map<string, L.Marker>();

    for (const ev of EVENTS) {
      const category = KATEGORI[ev.kategori];
      const marker = L.marker([ev.lokasi.lat, ev.lokasi.lng], {
        icon: eventIcon(ev.kategori, category.warna),
        title: `${ev.judul} (${ev.tahun})`,
        alt: `${CATEGORY_LABEL[ev.kategori]}: ${ev.judul}, ${ev.tahun}`,
        riseOnHover: true,
        keyboard: true
      });

      marker.on("click", () => onSelectRef.current(ev.id));
      markers.set(ev.id, marker);
    }

    mapRef.current = map;
    layerRef.current = layer;
    markersRef.current = markers;

    const resize = () => map.invalidateSize({ pan: false });
    const timer = window.setTimeout(resize, 180);
    window.addEventListener("resize", resize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resize);
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const activeIds = new Set(active.map((event) => event.id));

    for (const event of EVENTS) {
      const marker = markersRef.current.get(event.id);
      if (!marker) continue;

      if (activeIds.has(event.id)) {
        if (!layer.hasLayer(marker)) layer.addLayer(marker);
        requestAnimationFrame(() => {
          const element = marker.getElement();
          const badge = element?.querySelector(".atlas-event-badge");
          if (!badge) return;
          badge.classList.toggle("is-new", year - event.mulai >= 0 && year - event.mulai <= 15);
          badge.classList.toggle("is-complete", !!done[event.id]);
          badge.classList.toggle("is-selected", selectedId === event.id);
        });
      } else if (layer.hasLayer(marker)) {
        layer.removeLayer(marker);
      }
    }
  }, [active, year, done, selectedId]);

  useEffect(() => {
    const map = mapRef.current;
    const event = EVENTS.find((item) => item.id === selectedId);
    if (!map || !event) return;

    const zoom = Math.max(map.getZoom(), event.lokasi.presisi === "situs" ? 8 : 6);
    const desktop = window.innerWidth > 860;
    const offset = L.point(desktop ? 155 : 0, desktop ? 0 : window.innerHeight * 0.12);
    const target = map.project([event.lokasi.lat, event.lokasi.lng], zoom).add(offset);
    map.flyTo(map.unproject(target, zoom), zoom, { duration: 0.65, easeLinearity: 0.25 });
  }, [selectedId]);

  return <div id="map" ref={elRef} role="application" aria-label="Peta interaktif Nusantara" />;
}
