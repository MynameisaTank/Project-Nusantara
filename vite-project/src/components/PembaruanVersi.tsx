import { terapkanPembaruan, usePwa } from "../lib/pwa";

export function PembaruanVersi() {
  const { pembaruanSiap } = usePwa();
  if (!pembaruanSiap) return null;
  return (
    <div className="pembaruan-versi" role="status">
      <span>Versi baru sudah siap.</span>
      <button type="button" onClick={terapkanPembaruan}>
        Muat ulang
      </button>
    </div>
  );
}
