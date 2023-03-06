// componente que tiene la lista de todos los items del menu
import { useEffect, useState } from "react";
import ItemLista from "./ItemLista";

function Lista() {
  // estado local que tendra la lista de pizzas
  const [pizzas, setPizzas] = useState([]);

  // funcion para obtener los datos de las pizzas de un archivo json
  // y los agrega al estado
  const listaPizzas = async () => {
    const response = await fetch("/src/assets/pizzas.json");
    const data = await response.json();
    console.log(data);
    setPizzas(data);
  };

  // se usa useEffect para ejecutar la funcion listaPizzas cuando cargue la pagina
  useEffect(() => {
    listaPizzas();
  }, []);

  return (
    <div className="container text-center my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {pizzas.map((item, i) => (
          <ItemLista key={i} nombre={item.nombre} archivo={item.ruta} />
        ))}
      </div>
    </div>
  );
}

export default Lista;
