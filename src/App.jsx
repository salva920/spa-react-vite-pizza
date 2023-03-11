// componente BrowserRouter de la libreria react-router-dom
// que almacena la ubicación actual en la barra de direcciones del navegador
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
// importacion de las rutas con transiciones
import AnimatedRoutes from "./components/utils/AnimatedRoutes";

// importacion de los componentes de navbar y footer
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import { useRef, useState } from "react";

import nocturno from "./assets/img/icons/nocturno.png";
import soleado from "./assets/img/icons/soleado.png";

function App() {
  const [oscuro, setOscuro] = useState(true);

  const handleClick = () => setOscuro(!oscuro);

  return (
    <BrowserRouter>
      <div className={oscuro ? "bg-dark text-light" : ""}>
        <Navbar tema={oscuro}/>
        <AnimatedRoutes />
        <Footer />

        <button
          className={`btn ${oscuro ? "btn-dark" : "btn-secondary"} modo-oscuro`}
          onClick={handleClick}
        >
          {oscuro ? (
            <img src={nocturno} width="32" style={{filter: "invert(100%)"}}/>
          ) : (
            <img src={soleado} width="32" />
          )}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
