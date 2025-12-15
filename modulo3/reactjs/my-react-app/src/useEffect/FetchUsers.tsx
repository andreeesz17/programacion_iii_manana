import { useEffect, useState } from 'react';

export default function FetchUsers() {
  const [users, setUsers] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Usuario:</h3>
      {users ? (
        users.map((user:any, i:any) =>
            <>
            <li key={i}>
                {user.name} - {user.email}
            </li>
            </>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}






























































//Andrés Zambrano
