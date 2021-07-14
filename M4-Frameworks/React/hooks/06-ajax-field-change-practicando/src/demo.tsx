// Tenemos un listado de resultado de busqueda (esto viene de un servidor), 
// y queremos que cada vez que introduzcamos un cambio en un input de filtrado, 
// envíe una petición a servidor para obtener la nueva lista filtrada y mostrarla.

// Como usar Debounce (es decir esperar un poquito a que el usuario termine de teclear para enviar la petición, ahorrando así llamadas XHR innecesarias).

import React from "react";
import { useDebounce } from "use-debounce";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500)
  const [userCollection, setUserCollection] = React.useState([]);

  // Load full list when the component gets mounted and filter gets updated

  // React.useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
  //     .then((response) => response.json())
  //     .then((data) => setUserCollection(data));
  // }, [filter]);

  // llamadas XHR reducidas:
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then((response) => response.json())
      .then((data) => setUserCollection(data));
  }, [debouncedFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
