import pizza from '../../assets/img/icons/pizza.png'
import restaurante from '../../assets/img/icons/restaurante.png'
import menu from '../../assets/img/icons/menu.png'
import ruedaPizza from '../../assets/img/home/pizza.png'

function Seccion1() {
  return (
    <section className="seccion1 container">
      <img
        src={ruedaPizza}
        alt=""
        className="pizza-rueda d-none d-lg-block"
      />

      <div className="my-5 w-100 text-center text-danger seccion-titulo">
        <h1>SERVICIOS</h1>
      </div>

      <div className="row justify-content-end">
        <div className="col col-lg-10">
          <p className="servicios-p fs-5 mx-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos aperiam doloribus praesentium obcaecati similique ad
            adipisci ipsam fugit cupiditate cumque velit omnis quam ex, et
            voluptatibus odio veniam reiciendis exercitationem.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, mollitia incidunt. Magni, placeat! Exercitationem
                maxime saepe sunt ex facilis atque.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, mollitia incidunt. Magni, placeat! Exercitationem
                maxime saepe sunt ex facilis atque.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, mollitia incidunt. Magni, placeat! Exercitationem
                maxime saepe sunt ex facilis atque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seccion1;
