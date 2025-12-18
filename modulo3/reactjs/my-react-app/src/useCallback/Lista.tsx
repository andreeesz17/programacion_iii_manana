
import { useCallback } from 'react';

interface ListaProps {
  items: any[];
}

export default function Lista({ items }: ListaProps) {
  const handleClick = useCallback((item: any) => {
    console.log("Seleccionado:", item);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}*3={item * 3}</button>
        </li>
      ))}
    </ul>
  );
}
