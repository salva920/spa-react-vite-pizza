// componente BrowserRouter de la libreria react-router-dom
// que almacena la ubicación actual en la barra de direcciones del navegador
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
// importacion de las rutas con transiciones
import AnimatedRoutes from "./components/utils/AnimatedRoutes";

// importacion de los componentes de navbar y footer
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark text-light">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
