import { useState, useId } from 'react';

export default function MayorDeTres() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  console.log(id1);
  console.log(id2);
  console.log(id3);

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [mayor, setMayor] = useState<number | null>(null);

  const calcularMayor = () => {
    const a = Number(n1);
    const b = Number(n2);
    const c = Number(n3);

    if (n1 === '' || n2 === '' || n3 === '') {
      alert('Ingrese los tres números');
      return;
    }

    let m = a;

    if (b > m) {
      m = b;
    }

    if (c > m) {
      m = c;
    }

    setMayor(m);
  };

  return (
    <div>
      <h3>Mayor de tres números</h3>

      <label htmlFor={id1}>Número 1</label><br />
      <input
        id={id1}
        type="number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />
      <br />

      <label htmlFor={id2}>Número 2</label><br />
      <input
        id={id2}
        type="number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />
      <br />

      <label htmlFor={id3}>Número 3</label><br />
      <input
        id={id3}
        type="number"
        value={n3}
        onChange={(e) => setN3(e.target.value)}
      />
      <br />

      <button onClick={calcularMayor}>Calcular</button>

      {mayor !== null && (
        <p>El número mayor es: <strong>{mayor}</strong></p>
      )}
    </div>
  );
}
