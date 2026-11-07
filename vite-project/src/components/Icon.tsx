import { ICONS, type IconName } from "../lib/icons";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const ic = ICONS[name] ?? ICONS.politik;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      {...(ic.fill
        ? { fill: "currentColor", stroke: "none" }
        : { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" })}
    >
      <path d={ic.d} />
    </svg>
  );
}
