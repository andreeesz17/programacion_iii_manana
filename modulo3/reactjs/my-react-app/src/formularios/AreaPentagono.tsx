import { useState } from "react";

export default function AreaPentagono() {
  const [lado, setLado] = useState("");
  const [apotema, setApotema] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const l = Number(lado);
    const a = Number(apotema);

    const perimetro = 5 * l;
    const area = (perimetro * a) / 2;

    alert(`El area del pentagono es: ${area}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Área de un Pentágono</h3>

      <input
        type="number"
        placeholder="Lado"
        value={lado}
        onChange={(e) => setLado(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Apotema"
        value={apotema}
        onChange={(e) => setApotema(e.target.value)}
      />
      <br />

      <button type="submit">Calcular</button>
    </form>
  );
}
