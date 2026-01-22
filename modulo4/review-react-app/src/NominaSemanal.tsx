import { useMemo, useState } from "react";

export default function NominaSemanal() {
  const [valorHora, setValorHora] = useState("");
  const [dias, setDias] = useState([
    { dia: "Lunes", horas: "" },
    { dia: "Martes", horas: "" },
    { dia: "Miercoles", horas: "" },
    { dia: "Jueves", horas: "" },
    { dia: "Viernes", horas: "" },
  ]);

  const cambiarHoras = (i: number, v: string) => {
    setDias((prev) => prev.map((x, idx) => (idx === i ? { ...x, horas: v } : x)));
  };

  const pago = useMemo(() => {
    const v = parseFloat(valorHora);
    if (isNaN(v) || v <= 0) return 0;

    const h = dias.reduce((acc, d) => acc + (parseFloat(d.horas) || 0), 0);
    const extra = h > 40 ? h - 40 : 0;

    return Math.min(h, 40) * v + extra * v * 1.5;
  }, [dias, valorHora]);

  return (
    <div>
      <h2>Nomina semanal</h2>

      <input
        type="number"
        placeholder="Valor por hora"
        value={valorHora}
        onChange={(e) => setValorHora(e.target.value)}
      />
      <br />

      {dias.map((d, i) => (
        <div key={d.dia}>
          <span>{d.dia}: </span>
          <input
            type="number"
            placeholder="Horas"
            value={d.horas}
            onChange={(e) => cambiarHoras(i, e.target.value)}
          />
        </div>
      ))}

      <p>{pago ? pago : "...."}</p>
    </div>
  );
}
