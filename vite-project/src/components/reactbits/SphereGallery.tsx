import { forwardRef, type MutableRefObject, type PointerEvent, Suspense, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Canvas, extend, type ThreeElement, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

const TAU = Math.PI * 2;
const MAX_TILT = Math.PI / 4;
const ROWS = 7;
const COLUMNS = 12;
const LATITUDE_RANGE = 85;
const GAP = 0.015;
const PADDING = 0;
const CORNER_RADIUS = 0.03;
const FOV = 70;
const CAMERA_DISTANCE = 2;
const DIVE_DISTANCE = 0.12;
const DIVE_MS = 1600;
const DRAG_THRESHOLD = 6;

export type SphereGalleryItem = {
  src: string;
  title?: string;
  description?: string;
};

export type SphereGalleryHandle = {
  step: (direction: 1 | -1) => void;
};

type LayoutTile = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  latitude: number;
  width: number;
  height: number;
  span: THREE.Vector2;
  item: number;
};

type Orientation = {
  spin: number;
  tilt: number;
  targetSpin: number;
  targetTilt: number;
  autoSpin: boolean;
  dive: boolean;
  moved: boolean;
};

const TileMaterial = shaderMaterial(
  {
    uMap: new THREE.Texture(),
    uLatitude: 0,
    uAngularSpan: new THREE.Vector2(1, 1),
    uImageAspect: 1,
    uTileSize: new THREE.Vector2(1, 1),
    uGap: 0,
    uPadding: 0.1,
    uRadius: 0.1,
    uBackground: new THREE.Color("#0b0b0b"),
    uBackgroundAlpha: 0,
    uOpacity: 1,
    uReveal: 0,
  },
  /* glsl */ `
    uniform float uLatitude;
    uniform vec2 uAngularSpan;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      float longitude = (uv.x - 0.5) * uAngularSpan.x;
      float latitude = uLatitude + (uv.y - 0.5) * uAngularSpan.y;
      vec3 spherePosition = vec3(
        cos(latitude) * sin(longitude),
        sin(latitude) * cos(uLatitude) - cos(latitude) * sin(uLatitude) * cos(longitude),
        1.0 - cos(latitude) * cos(uLatitude) * cos(longitude) - sin(latitude) * sin(uLatitude)
      );
      gl_Position = projectionMatrix * modelViewMatrix * vec4(spherePosition, 1.0);
    }
  `,
  /* glsl */ `
    uniform sampler2D uMap;
    uniform float uImageAspect;
    uniform vec2 uTileSize;
    uniform float uGap;
    uniform float uPadding;
    uniform float uRadius;
    uniform vec3 uBackground;
    uniform float uBackgroundAlpha;
    uniform float uOpacity;
    uniform float uReveal;
    varying vec2 vUv;

    float sdRoundBox(vec2 point, vec2 halfSize, float radius) {
      vec2 corner = abs(point) - halfSize + radius;
      return min(max(corner.x, corner.y), 0.0) + length(max(corner, 0.0)) - radius;
    }

    void main() {
      vec2 point = (vUv - 0.5) * uTileSize;
      vec2 halfTile = uTileSize * 0.5 - uGap;
      vec2 imageUv = vUv;
      float tileAspect = uTileSize.x / uTileSize.y;
      if (uImageAspect > tileAspect) {
        imageUv.x = (imageUv.x - 0.5) * (tileAspect / uImageAspect) + 0.5;
      } else {
        imageUv.y = (imageUv.y - 0.5) * (uImageAspect / tileAspect) + 0.5;
      }
      vec3 color = texture2D(uMap, imageUv).rgb;

      float boxDistance = sdRoundBox(point, halfTile, uRadius);
      float boxAntialias = fwidth(boxDistance);
      float alpha = smoothstep(boxAntialias, -boxAntialias, boxDistance);

      gl_FragColor = vec4(color, alpha * uOpacity * uReveal);
    }
  `,
);

extend({ TileMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    tileMaterial: ThreeElement<typeof TileMaterial>;
  }
}

function buildLayout(itemCount: number): LayoutTile[] {
  const tiles: LayoutTile[] = [];
  const orienter = new THREE.Object3D();
  const latRange = THREE.MathUtils.degToRad(LATITUDE_RANGE);
  const latSpan = (latRange * 2) / ROWS;
  let index = 0;

  for (let row = 0; row < ROWS; row++) {
    const latitude = -latRange + (row + 0.5) * latSpan;
    const cosLat = Math.cos(latitude);
    const ringColumns = Math.max(1, Math.round(COLUMNS * cosLat));
    const lonSpan = TAU / ringColumns;

    for (let col = 0; col < ringColumns; col++) {
      const longitude = (col + (row % 2) / 2) * lonSpan;
      const position = new THREE.Vector3(
        cosLat * Math.cos(longitude),
        Math.sin(latitude),
        cosLat * Math.sin(longitude),
      );
      orienter.position.copy(position);
      orienter.lookAt(0, 0, 0);
      tiles.push({
        position,
        quaternion: orienter.quaternion.clone(),
        latitude,
        width: lonSpan * cosLat,
        height: latSpan,
        span: new THREE.Vector2(lonSpan, latSpan),
        item: index % Math.max(1, itemCount),
      });
      index++;
    }
  }
  return tiles;
}

type SphereProps = {
  urls: string[];
  tiles: LayoutTile[];
  orientation: MutableRefObject<Orientation>;
  onFront: (item: number) => void;
  onFocus: (tile: LayoutTile) => void;
  sesuaiKebutuhan: boolean;
};

function Sphere({ urls, tiles, orientation, onFront, onFocus, sesuaiKebutuhan }: SphereProps) {
  const textures = useTexture(urls);
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);
  const groupRef = useRef<THREE.Group>(null);
  const frontRef = useRef(-1);
  // dipakai ulang tiap frame supaya tidak menumpuk sampah memori
  const dunia = useMemo(() => new THREE.Vector3(), []);
  const sudut = useMemo(() => new THREE.Euler(), []);

  useFrame((_, delta) => {
    const state = orientation.current;

    if (state.dive) {
      camera.position.z += (DIVE_DISTANCE - camera.position.z) * (1 - Math.exp(-delta * 2.2));
    } else {
      if (state.autoSpin) state.targetSpin += delta * 0.05;
      state.spin += (state.targetSpin - state.spin) * (1 - Math.exp(-delta * 6));
      state.tilt += (state.targetTilt - state.tilt) * (1 - Math.exp(-delta * 6));
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = state.spin;
      groupRef.current.rotation.x = state.tilt;
    }

    let best = 0;
    let bestZ = -Infinity;
    sudut.set(state.tilt, state.spin, 0);
    tiles.forEach((tile, index) => {
      dunia.copy(tile.position).applyEuler(sudut);
      if (dunia.z > bestZ) {
        bestZ = dunia.z;
        best = index;
      }
    });
    const front = tiles[best]?.item ?? -1;
    if (front !== frontRef.current) {
      frontRef.current = front;
      onFront(front);
    }

    if (sesuaiKebutuhan) {
      const bergerak =
        state.dive ||
        state.autoSpin ||
        Math.abs(state.targetSpin - state.spin) > 1e-4 ||
        Math.abs(state.targetTilt - state.tilt) > 1e-4;
      if (bergerak) invalidate();
    }
  });

  return (
    <group ref={groupRef}>
      {tiles.map((tile, index) => {
        const texture = textures[tile.item % textures.length];
        const image = texture?.image as HTMLImageElement | undefined;
        const aspect = image && image.height ? image.width / image.height : 1;
        return (
          <mesh
            key={index}
            position={tile.position}
            quaternion={tile.quaternion}
            onClick={(event) => {
              event.stopPropagation();
              if (orientation.current.moved || orientation.current.dive) return;
              onFocus(tile);
            }}
          >
            <planeGeometry args={[tile.width, tile.height, 8, 8]} />
            <tileMaterial
              key={TileMaterial.key}
              uMap={texture}
              uLatitude={tile.latitude}
              uAngularSpan={tile.span}
              uImageAspect={aspect}
              uTileSize={new THREE.Vector2(tile.width, tile.height)}
              uGap={GAP}
              uPadding={PADDING}
              uRadius={CORNER_RADIUS}
              uBackground={new THREE.Color("#0b0b0b")}
              uBackgroundAlpha={0}
              uReveal={1}
              side={THREE.DoubleSide}
              transparent
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

type SphereGalleryProps = {
  items: SphereGalleryItem[];
  onItemClick?: (item: SphereGalleryItem, index: number) => void;
  onActiveChange?: (item: SphereGalleryItem, index: number) => void;
  autoSpin?: boolean;
  className?: string;
  onReady?: () => void;
  dpr?: number | [number, number];
  antialias?: boolean;
  /** gambar ulang hanya saat ada gerakan */
  sesuaiKebutuhan?: boolean;
};

/** Mundurkan kamera di layar tegak supaya bola muat di lebar layar. */
function SesuaikanKamera() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);
  useEffect(() => {
    const aspek = size.width / Math.max(1, size.height);
    const jarakMuat = 1.8 / aspek;
    camera.position.z = Math.max(CAMERA_DISTANCE, jarakMuat);
  }, [camera, size]);
  return null;
}

// supaya sentuhan di luar Canvas bisa meminta frame baru di mode sesuai kebutuhan
function JembatanInvalidasi({ tujuan }: { tujuan: MutableRefObject<(() => void) | null> }) {
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    tujuan.current = () => invalidate();
    return () => {
      tujuan.current = null;
    };
  }, [invalidate, tujuan]);
  return null;
}

function ReadyNotifier({ onReady }: { onReady?: () => void }) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);
  return null;
}

const SphereGallery = forwardRef<SphereGalleryHandle, SphereGalleryProps>(function SphereGallery(
  { items, onItemClick, onActiveChange, autoSpin = true, className = "", onReady, dpr = [1, 2], antialias = true, sesuaiKebutuhan = false },
  ref,
) {
  const invalidasi = useRef<(() => void) | null>(null);
  const mintaBingkai = () => invalidasi.current?.();
  const tiles = useMemo(() => buildLayout(items.length), [items.length]);
  const urls = useMemo(() => items.map((item) => item.src), [items]);
  const orientation = useRef<Orientation>({ spin: 0, tilt: 0, targetSpin: 0, targetTilt: 0, autoSpin, dive: false, moved: false });
  const [active, setActive] = useState(0);
  const [diving, setDiving] = useState(false);
  const drag = useRef({ active: false, x: 0, y: 0, spin: 0, tilt: 0 });
  const surface = useRef<HTMLDivElement>(null);
  const diveTimer = useRef(0);

  useImperativeHandle(ref, () => ({
    step: (direction) => {
      if (orientation.current.dive) return;
      orientation.current.autoSpin = false;
      orientation.current.targetSpin -= (direction * TAU) / COLUMNS;
      mintaBingkai();
    },
  }));

  const open = (index: number) => {
    if (orientation.current.dive) return;
    orientation.current.dive = true;
    mintaBingkai();
    setDiving(true);
    const item = items[index];
    window.clearTimeout(diveTimer.current);
    diveTimer.current = window.setTimeout(() => {
      if (item) onItemClick?.(item, index);
    }, DIVE_MS);
  };

  const focusTile = (tile: LayoutTile) => {
    const state = orientation.current;
    if (state.dive) return;
    const { x, y, z } = tile.position;
    const spin = -Math.atan2(x, z);
    const tilt = THREE.MathUtils.clamp(Math.atan2(y, Math.hypot(x, z)), -MAX_TILT, MAX_TILT);
    const turns = Math.round((state.spin - spin) / TAU) * TAU;
    state.autoSpin = false;
    state.targetSpin = spin + turns;
    state.targetTilt = tilt;
    mintaBingkai();
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (orientation.current.dive) return;
    const state = orientation.current;
    drag.current = { active: true, x: event.clientX, y: event.clientY, spin: state.targetSpin, tilt: state.targetTilt };
    state.autoSpin = false;
    state.moved = false;
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current.active || !surface.current || orientation.current.dive) return;
    const deltaX = event.clientX - current.x;
    const deltaY = event.clientY - current.y;
    if (Math.abs(deltaX) > DRAG_THRESHOLD || Math.abs(deltaY) > DRAG_THRESHOLD) orientation.current.moved = true;
    const width = surface.current.offsetWidth;
    orientation.current.targetSpin = current.spin - (deltaX / width) * TAU;
    orientation.current.targetTilt = THREE.MathUtils.clamp(current.tilt - (deltaY / width) * Math.PI, -MAX_TILT, MAX_TILT);
    mintaBingkai();
  };

  const onPointerUp = () => {
    drag.current.active = false;
    window.setTimeout(() => {
      orientation.current.moved = false;
    }, 0);
  };

  const handleFront = (index: number) => {
    setActive(index);
    const item = items[index];
    if (item) onActiveChange?.(item, index);
  };

  const current = items[active];

  return (
    <div
      ref={surface}
      className={`sphere-gallery${diving ? " is-diving" : ""}${className ? ` ${className}` : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Canvas
        camera={{ position: [0, 0, CAMERA_DISTANCE], fov: FOV, near: 0.01 }}
        dpr={dpr}
        frameloop={sesuaiKebutuhan ? "demand" : "always"}
        gl={{ alpha: true, antialias }}
      >
        <SesuaikanKamera />
        <JembatanInvalidasi tujuan={invalidasi} />
        <Suspense fallback={null}>
          {items.length > 0 && (
            <Sphere
              urls={urls}
              tiles={tiles}
              orientation={orientation}
              onFront={handleFront}
              onFocus={focusTile}
              sesuaiKebutuhan={sesuaiKebutuhan}
            />
          )}
          <ReadyNotifier onReady={onReady} />
        </Suspense>
      </Canvas>
      {current && (
        <div className="sphere-gallery__info">
          {current.title && <h2 className="sphere-gallery__title">{current.title}</h2>}
          {current.description && <p className="sphere-gallery__description">{current.description}</p>}
          {onItemClick && (
            <button type="button" className="sphere-gallery__action" onClick={() => open(active)}>
              Masuk
            </button>
          )}
        </div>
      )}
      <div className="sphere-gallery__veil" aria-hidden="true" />
    </div>
  );
});

export default SphereGallery;
