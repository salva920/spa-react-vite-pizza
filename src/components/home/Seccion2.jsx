import imgCabecera from "../../assets/img/home/1-white.png"

function Seccion2() {
  return (
    <section className="mt-5 seccion2">
      <div className="d-flex justify-content-end w-100">
        <div className="contenido px-5 d-flex flex-column justify-content-center align-items-center">
          <div><img src={imgCabecera} /></div>
          <div className="mt-3">
            <p className="fs-1 lh-1 sec2text">SABOR UNICO</p>
          </div>
          <div>
            <p className="fs-1 lh-1 sec2text">MEJOR CALIDAD</p>
          </div>
          <div>
            <p className="fs-4 sec2subtext">Los ingredientes más frescos directo a tu mesa</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seccion2;
