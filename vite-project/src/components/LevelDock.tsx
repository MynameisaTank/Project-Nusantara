import { IconBook, IconBooks, IconSchool } from "@tabler/icons-react";
import type { Level } from "../types";
import { FloatingDock, type DockItem } from "./ui/floating-dock";

const LEVEL_DOCK: { value: Level; title: string; Icon: typeof IconSchool }[] = [
  { value: 1, title: "Dasar", Icon: IconSchool },
  { value: 2, title: "Menengah", Icon: IconBook },
  { value: 3, title: "Lanjut", Icon: IconBooks },
];

export function LevelDock({ level, onLevel }: { level: Level; onLevel: (l: Level) => void }) {
  const items: DockItem[] = LEVEL_DOCK.map(({ value, title, Icon }) => ({
    title,
    href: "#",
    aktif: value === level,
    onSelect: () => onLevel(value),
    icon: <Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  }));
  const aktif = LEVEL_DOCK.find((l) => l.value === level)?.title ?? "";
  return (
    <div className="level-dock" role="group" aria-label="Tingkat bahasa">
      <p className="level-dock__label">Bahasa: {aktif}</p>
      <FloatingDock items={items} />
    </div>
  );
}
