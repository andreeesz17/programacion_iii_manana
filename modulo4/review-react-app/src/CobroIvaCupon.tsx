import { useRef, useState } from "react";

export default function CobroIvaCupon() {
  const [total, setTotal] = useState<number | null>(null);

  const montoRef: any = useRef(null);
  const ivaRef: any = useRef(null);
  const cuponRef: any = useRef(null);

  const calcular = () => {
    const monto = parseFloat(montoRef.current.value);
    const iva = parseFloat(ivaRef.current.value);
    const cupon = cuponRef.current.value;

    if (isNaN(monto) || monto <= 0 || isNaN(iva)) {
      alert("Ingrese valores válidos");
      return;
    }

    const cupones = ["PROMO10", "PROMO20", "VIP30"];
    const descs = [0.1, 0.2, 0.3];

    let desc = 0;
    for (let i = 0; i < cupones.length; i++) {
      if (cupones[i] === cupon) {
        desc = descs[i];
      }
    }

    const sub = monto + monto * iva;
    const t = sub - sub * desc;

    setTotal(t);
    alert("Total: " + t);
  };

  return (
    <div>
      <h2>Cobro</h2>

      <input ref={montoRef} type="number" placeholder="Monto" />
      <br />

      <select ref={ivaRef} defaultValue="0.12">
        <option value="0">0%</option>
        <option value="0.12">12%</option>
        <option value="0.15">15%</option>
      </select>
      <br />

      <select ref={cuponRef} defaultValue="">
        <option value="">Sin cupón</option>
        <option value="PROMO10">PROMO10</option>
        <option value="PROMO20">PROMO20</option>
        <option value="VIP30">VIP30</option>
      </select>
      <br />

      <button onClick={calcular}>Calcular</button>

      <p>{total ?? "...."}</p>
    </div>
  );
}
