import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import './FlexCarousel.css';

export interface FlexCarouselItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

interface FlexCarouselProps {
  items: FlexCarouselItem[];
  intro?: 'rise' | 'bloom' | 'spin' | 'deal' | 'none';
  cardHeight?: number;
  gap?: number;
  radius?: number;
  squeeze?: number;
  focusOnClick?: boolean;
  autoplay?: boolean;
  interval?: number;
  captions?: boolean;
  className?: string;
}

export default function FlexCarousel({
  items,
  intro = 'rise',
  cardHeight = 0.68,
  gap = 18,
  radius = 3,
  squeeze = 0.2,
  focusOnClick = true,
  autoplay = false,
  interval = 5,
  captions = true,
  className = ''
}: FlexCarouselProps) {
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const root = useRef<HTMLDivElement>(null);
  const pointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
    deltaX.current = 0;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);
  const pointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    deltaX.current = event.clientX - startX.current;
  }, [dragging]);
  const pointerUp = useCallback(() => {
    if (!dragging) return;
    if (Math.abs(deltaX.current) > 35) setActive(index => (index + (deltaX.current < 0 ? 1 : -1) + items.length) % items.length);
    setDragging(false);
  }, [dragging, items.length]);
  const move = useCallback((direction: number) => {
    setFocused(false);
    setActive(index => (index + direction + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), intro === 'none' ? 0 : 180);
    return () => window.clearTimeout(timer);
  }, [intro]);
  useEffect(() => {
    if (!autoplay || focused || dragging || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => move(1), Math.max(2, interval) * 1000);
    return () => window.clearInterval(timer);
  }, [autoplay, focused, dragging, interval, move]);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'Escape') setFocused(false);
    };
    node.addEventListener('keydown', onKey);
    return () => node.removeEventListener('keydown', onKey);
  }, [move]);

  return <section
    ref={root}
    className={`flex-carousel ${ready ? 'is-ready' : ''} ${focused ? 'is-focused' : ''} ${dragging ? 'is-dragging' : ''} ${className}`}
    style={{ '--fc-card-height': `${Math.min(Math.max(cardHeight, 0.35), 0.9) * 100}%`, '--fc-gap': `${gap}px`, '--fc-radius': `${radius}px`, '--fc-squeeze': squeeze } as CSSProperties}
    role="region" aria-roledescription="carousel" aria-label="Galeri era sejarah Indonesia" tabIndex={0}
    onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}
    onMouseEnter={() => setFocused(true)} onMouseLeave={() => setFocused(false)}
  >
    <div className="flex-carousel__stage">
      {items.map((item, index) => {
        let offset = index - active;
        if (offset > items.length / 2) offset -= items.length;
        if (offset < -items.length / 2) offset += items.length;
        return <button
          type="button" key={`${item.title}-${index}`}
          className={`flex-carousel__card ${offset === 0 ? 'is-active' : ''}`}
          style={{ '--fc-offset': offset, '--fc-distance': Math.abs(offset) } as CSSProperties}
          onClick={() => {
            if (offset !== 0) setActive(index);
            else if (focusOnClick) setFocused(value => !value);
          }}
          aria-label={`${item.title || item.alt || `Era ${index + 1}`}${offset === 0 ? ', terpilih' : ', pilih era'}`}
          tabIndex={Math.abs(offset) > 2 ? -1 : 0}
        >
          <img src={item.src} alt={item.alt || ''} draggable={false} loading={index < 3 ? 'eager' : 'lazy'} onError={e => { e.currentTarget.style.visibility = 'hidden'; }} />
          <span className="flex-carousel__shade" />
          {!captions && (
            <span className="flex-carousel__card-label"><small>{item.subtitle}</small><strong>{item.title}</strong></span>
          )}
        </button>;
      })}
    </div>
    {captions && <div className="flex-carousel__caption">
      <div><h3>{items[active]?.title}</h3><p>{items[active]?.subtitle}</p></div>
      <div className="flex-carousel__controls">
        <span className="flex-carousel__count">{String(active + 1).padStart(2, '0')} <i>/</i> {String(items.length).padStart(2, '0')}</span>
        <button type="button" aria-label="Era sebelumnya" onPointerDown={e => e.stopPropagation()} onClick={() => move(-1)}>←</button>
        <button type="button" aria-label="Era berikutnya" onPointerDown={e => e.stopPropagation()} onClick={() => move(1)}>→</button>
      </div>
    </div>}
    <span className="flex-carousel__live" aria-live="polite">{items[active]?.title}, {active + 1} dari {items.length}</span>
  </section>;
}
