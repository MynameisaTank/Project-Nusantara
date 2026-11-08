interface Props {
  onMenu: () => void;
}

export function Header({ onMenu }: Props) {
  return (
    <header className="topbar">
      <div className="header-actions"><button className="menu-return" type="button" onClick={onMenu}>← Menu</button></div>
    </header>
  );
}
