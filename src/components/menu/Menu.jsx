import Header from "../utils/Header";
import Lista from "./Lista";

function Menu() {
  return (
    <div>
      <Header titulo="Menú" subtitulo="Escoje la que prefieras de nuestra variedad de Pizzas." />
      <Lista />
    </div>
  );
}

export default Menu;
