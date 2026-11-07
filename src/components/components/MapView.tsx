import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { KATEGORI } from "../data/era";
import type { SejarahEvent } from "../types";
import { isUtama } from "../lib/jenis";
import "../styles/jenis-event.css";

interface Props {
  events: SejarahEvent[];
  active: SejarahEvent[];
  year: number;
  done: Record<string, true>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/**
 * Category-specific inline SVG emblems.
 * Keep this lookup independent from the KATEGORI type so existing event data
 * and category definitions do not need to change.
 */
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

export function MapView({ events, active, year, done, selectedId, onSelect }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const el = elRef.current;
    if (!el || mapRef.current) return;

    // React StrictMode/dev hot-reload can leave Leaflet's private container
    // marker behind if an earlier setup failed before its cleanup was returned.
    const leafletEl = el as HTMLDivElement & { _leaflet_id?: number };
    if (leafletEl._leaflet_id) {
      delete leafletEl._leaflet_id;
    }

    const map = L.map(el, {
      zoomControl: false,
      minZoom: 4,
      maxZoom: 10,
      maxBounds: L.latLngBounds([[-18, 88], [14, 150]]),
      maxBoundsViscosity: 0.72,
      scrollWheelZoom: true,
      preferCanvas: true
    });

    // Store the instance immediately so cleanup still works if tile setup fails.
    mapRef.current = map;

    L.control.zoom({ position: "bottomright" }).addTo(map);
    map.fitBounds([[-10.5, 95], [6, 141]]);

    // A single labeled, full-color basemap. Do not stack a separate
    // Reference/World_Reference_Overlay: World_Topo_Map already has labels.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 13,
        opacity: 1,
        attribution:
          "Tiles &copy; Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, and the GIS user community"
      }
    ).addTo(map);

    // Subtle hillshade gives mountain relief while preserving land colors.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 13,
        opacity: 0.12,
        attribution: "Hillshade &copy; Esri"
      }
    ).addTo(map);

    const layer = L.layerGroup().addTo(map);
    const markers = new Map<string, L.Marker>();

    try {
      for (const ev of events) {
        // Be defensive: imported/legacy event data may contain an unknown
        // category, while a customized era.ts may omit the politics fallback.
        const categoryId = String(ev.kategori ?? "politik");
        const category = KATEGORI?.[ev.kategori] ?? KATEGORI?.politik;
        const markerColor = category?.warna ?? "#8a5a2b";
        const icon = makeEventIcon(categoryId, markerColor, isUtama(ev) ? "utama" : "sampingan");

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
    } catch (error) {
      // Do not leave a half-initialized Leaflet map on the container.
      map.remove();
      mapRef.current = null;
      throw error;
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

    for (const event of events) {
      const marker = markersRef.current.get(event.id);
      if (!marker) continue;

      if (activeIds.has(event.id)) {
        if (!layer.hasLayer(marker)) layer.addLayer(marker);

        requestAnimationFrame(() => {
          const markerElement = marker.getElement();
          const visual = markerElement?.querySelector(".atlas-marker");
          if (!visual) return;

          visual.classList.toggle(
            "is-new",
            year - event.mulai >= 0 && year - event.mulai <= 15
          );
          visual.classList.toggle("is-complete", !!done[event.id]);
          visual.classList.toggle("is-selected", selectedId === event.id);
        });
      } else if (layer.hasLayer(marker)) {
        layer.removeLayer(marker);
      }
    }
  }, [events, active, year, done, selectedId]);

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

  return (
    <div
      id="map"
      ref={elRef}
      role="application"
      aria-label="Peta interaktif Nusantara"
    />
  );
}
