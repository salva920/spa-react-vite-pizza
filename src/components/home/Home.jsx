import { useRef } from "react";
import Cabecera from "./Cabecera";
import Seccion1 from "./Seccion1";
import Seccion2 from "./Seccion2";

function Home() {
  const toServicio = useRef();
  return <div>
    <Cabecera toServicio={toServicio}/>
    <Seccion1 toServicio={toServicio} />
    <Seccion2 />
  </div>;
}

export default Home;
