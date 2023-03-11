import pizza from "../../assets/img/icons/pizza.png";
import restaurante from "../../assets/img/icons/restaurante.png";
import menu from "../../assets/img/icons/menu.png";
import ruedaPizza from "../../assets/img/home/pizza.png";

function Seccion1({toServicio}) {
  return (
    <section className="seccion1 container" ref={toServicio}>
      <img src={ruedaPizza} alt="" className="pizza-rueda d-none d-lg-block" />

      <div className="my-5 w-100 text-center text-danger seccion-titulo">
        <h1>SERVICIOS</h1>
      </div>

      <div className="row justify-content-end">
        <div className="col col-lg-10">
          <p className="servicios-p fs-5 mx-5">
            Pizza Club se ha convertido en una cadena de comida rápida donde el
            principal compromiso es brindarle a nuestros clientes pizzas con un
            sabor único, ingredientes de alta calidad y un servicio de primera.
            Nos diferenciamos por utilizar vegetales frescos, no recortamos en
            gastos usando vegetales enlatados ni previamente cortados en
            nuestras pizzas.
          </p>

          <div className="row mt-3 px-2">
            <div className="col-12 col-md-4 px-3 text-center">
              <div className="my-3">
                <img
                  src={pizza}
                  alt="pizza"
                  className="rounded-circle p-2 bg-success"
                />
              </div>

              <p className="fs-5">
                Nos esforzamos por brindar las pizzas de mejor sabor usando los
                ingredientes más frescos. Nos comprometemos a usar solo
                ingredientes de calidad.
              </p>
            </div>
            <div className="col-12 col-md-4 px-3 text-center">
              <div className="my-3">
                <img
                  src={menu}
                  alt="menu"
                  className="rounded-circle p-2 bg-success"
                />
              </div>

              <p className="fs-5">
                Tenemos un amplio menú de sabores. Disfrute de nuestra variedad
                de pizzas además de otros servicios de comida. Trabajamos cada
                día para brindar la mejor combinación de sabores.
              </p>
            </div>
            <div className="col-12 col-md-4 px-3 text-center">
              <div className="my-3">
                <img
                  src={restaurante}
                  alt="restaurante"
                  className="rounded-circle p-2 bg-success"
                />
              </div>

              <p className="fs-5">
                En Pizza Club nos esforzamos diariamente para ofrecer el mejor
                servicio a nuestros clientes, tratando de ofrecer la mejor
                experiencia en un ambiente familiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seccion1;
