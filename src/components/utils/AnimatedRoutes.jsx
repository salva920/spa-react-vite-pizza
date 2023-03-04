import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contacto from "../contacto/Contacto";
import Menu from "../menu/Menu";
import { useState, useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default AnimatedRoutes;
