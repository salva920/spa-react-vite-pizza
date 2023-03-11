// elemento Link que permite al usuario navegar a otra página como si fuera una etiqueta 'a' de html
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
function Navbar({ tema }) {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        tema ? "bg-dark navbar-dark" : "bg-secondary navbar-light"
      }`}
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="img" width="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to={"/"} className="nav-link px-3">
              Inicio
            </Link>
            <Link to={"/menu"} className="nav-link px-3">
              Menú
            </Link>
            <Link to={"/contacto"} className="nav-link px-3">
              Contactanos
            </Link>
            <Link to={"/about"} className="nav-link px-3">
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
