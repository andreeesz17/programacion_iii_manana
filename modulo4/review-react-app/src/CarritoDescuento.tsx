import { useCallback, useState } from "react";

export default function CarritoDescuento() {
  const [items, setItems] = useState([
    { id: 1, nombre: "Camiseta", precio: 15, cant: "1" },
    { id: 2, nombre: "Gorra", precio: 10, cant: "1" },
    { id: 3, nombre: "Botella", precio: 8, cant: "1" },
  ]);

  const [total, setTotal] = useState<number | null>(null);

  const cambiar = useCallback((id: number, v: string) => {
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, cant: v } : x)));
  }, []);

  const cobrar = useCallback(() => {
    const sub = items.reduce((a, x) => a + x.precio * (parseFloat(x.cant) || 0), 0);
    const desc = sub >= 50 ? sub * 0.1 : 0;
    const t = sub - desc;

    setTotal(t);
    alert("Total: " + t);
  }, [items]);

  return (
    <div>
      <h2>Carrito</h2>

      {items.map((x) => (
        <div key={x.id}>
          <span>
            {x.nombre} {x.precio}
          </span>
          <input
            type="number"
            value={x.cant}
            onChange={(e) => cambiar(x.id, e.target.value)}
          />
        </div>
      ))}

      <button onClick={cobrar}>Cobrar</button>

      <p>{total ?? "...."}</p>
    </div>
  );
}
