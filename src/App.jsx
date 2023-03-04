import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./components/utils/AnimatedRoutes";
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
