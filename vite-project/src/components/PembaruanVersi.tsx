import { terapkanPembaruan, usePwa } from "../lib/pwa";

/** Spanduk kecil di bawah layar saat versi baru aplikasi sudah diunduh dan menunggu dipakai. */
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
