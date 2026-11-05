// @ts-nocheck
import React, { useState } from 'react';
import './JellyRadio.css';

const SIZES = { sm: [28, 12, 12], md: [36, 13, 16], lg: [44, 14, 20] };

export default function JellyRadio({
  items = ['Off', 'Low', 'Medium', 'High', 'Max'],
  value,
  defaultValue,
  onChange,
  chipColor = '#27272a',
  activeColor = '#f5f5f5',
  textColor = '#f5f5f5',
  activeTextColor = '#18181b',
  size = 'md',
  gap = 8,
  radius = 18,
  disabled = false,
  ariaLabel = 'Options',
  className = ''
}) {
  const [inner, setInner] = useState(defaultValue ?? (typeof items[0] === 'string' ? items[0] : items[0]?.value));
  const list = items.map(it => typeof it === 'string' ? { value: it, label: it } : it);
  const current = value ?? inner;
  const [h, font, px] = SIZES[size] ?? SIZES.md;
  const commit = (item, index) => {
    if (disabled || item.disabled || item.value === current) return;
    if (value === undefined) setInner(item.value);
    onChange?.(item.value, index);
  };
  return (
    <div role="radiogroup" aria-label={ariaLabel} data-disabled={disabled ? '' : undefined}
      className={`jelly-radio ${className}`.trim()}
      style={{ '--jr-chip': chipColor, '--jr-active': activeColor, '--jr-text': textColor,
        '--jr-active-text': activeTextColor, '--jr-gap': `${gap}px`, '--jr-radius': `${radius}px`,
        '--jr-h': `${h}px`, '--jr-font': `${font}px`, '--jr-px': `${px}px` }}>
      {list.map((item, index) => (
        <button key={item.value} type="button" role="radio" aria-checked={item.value === current}
          tabIndex={item.value === current ? 0 : -1} disabled={disabled || !!item.disabled}
          className="jelly-radio__chip" data-on={item.value === current ? 'true' : 'false'}
          onClick={() => commit(item, index)}
          onKeyDown={e => {
            let next = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % list.length;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + list.length) % list.length;
            if (e.key === 'Home') next = 0;
            if (e.key === 'End') next = list.length - 1;
            if (next !== null) { e.preventDefault(); commit(list[next], next); e.currentTarget.parentElement?.children[next]?.focus(); }
          }}>
          <span className="jelly-radio__skin">
            {item.icon ? <span className="jelly-radio__icon">{item.icon}</span> : null}
            <span className="jelly-radio__label">{item.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
