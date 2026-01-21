import { useState } from "react";

export function Suma() {
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");

  const suma = Number(texto1) + Number(texto2);

  return (
    <div>
      <input
        value={texto1}
        placeholder="Ingrese Numero 1"
        onChange={(e) => setTexto1(e.target.value)}
      />
      <input
        value={texto2}
        placeholder="Ingrese Numero 2"
        onChange={(e) => setTexto2(e.target.value)}
      />
      <p>{suma || '....'}</p>
    </div>
  );
}