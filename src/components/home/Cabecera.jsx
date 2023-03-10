import imgCabecera from "../../assets/img/home/1-white.png"
function Cabecera({toServicio}) {
  return (
    <div className="header-bg">
      <div className="header-contenido d-flex justify-content-center align-items-center h-100">
        <div className="header-item d-flex flex-column align-items-center">
          <div>
            <img src={imgCabecera} />
          </div>
          <div className="px-5 py-2 text-light">
            <h1>DISFRUTA</h1>
          </div>
          <div className="px-2 py-1 text-center text-light my-3">
            <h4 className="mt-1">de lo</h4>
          </div>
          <div className="w-100 py-2 text-light text-center">
            <h1>MEJOR</h1>
          </div>
          <div className="mt-5">
            <button className="btn btn-danger btn-lg w-100" onClick={() => toServicio.current.scrollIntoView()} > Disfruta Nuestro servicio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabecera;
