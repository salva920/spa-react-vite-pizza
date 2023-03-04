import { useEffect, useState } from "react";
import ItemLista from "./ItemLista";

function Lista() {
  const [pizzas, setPizzas] = useState([]);
  const listaPizzas = async () => {
    const response = await fetch("/src/assets/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    listaPizzas();
  }, []);

  return (
    <div className="container text-center my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {pizzas.map((item, i) => (
          <ItemLista key={i} nombre={item.nombre} ruta={item.ruta} />
        ))}
      </div>
    </div>
  );
}

export default Lista;
