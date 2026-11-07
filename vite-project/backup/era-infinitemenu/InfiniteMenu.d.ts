import type { CSSProperties, ReactNode, Ref } from "react";

export interface InfiniteMenuItem {
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface InfiniteMenuHandle {
  /** Melangkah ke tile berikutnya: 1 untuk kanan, -1 untuk kiri. */
  step: (direction: 1 | -1) => void;
}

export interface InfiniteMenuProps {
  items?: InfiniteMenuItem[];
  count?: number;
  tileSize?: number;
  roundness?: number;
  zoom?: number;
  pullBack?: number;
  stretch?: number;
  inertia?: number;
  autoplay?: number;
  grayscale?: boolean;
  dim?: number;
  intro?: boolean;
  showInfo?: boolean;
  renderInfo?: (item: InfiniteMenuItem, index: number, moving: boolean) => ReactNode;
  theme?: "dark" | "light";
  accentColor?: string;
  backgroundColor?: string;
  onActiveChange?: (item: InfiniteMenuItem, index: number) => void;
  onItemClick?: (item: InfiniteMenuItem, index: number) => void;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<InfiniteMenuHandle>;
}

declare const InfiniteMenu: (props: InfiniteMenuProps) => JSX.Element;
export default InfiniteMenu;
