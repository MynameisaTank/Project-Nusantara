interface Props {
  onMenu: () => void;
}

/* Pemilih tingkat bahasa pindah ke LevelDock (floating dock di dalam peta). */
export function Header({ onMenu }: Props) {
  return (
    <header className="topbar">
      <div className="header-actions"><button className="menu-return" type="button" onClick={onMenu}>← Menu</button></div>
    </header>
  );
}
