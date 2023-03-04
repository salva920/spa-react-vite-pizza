import Header from "../utils/Header";

function About() {
  return (
    <div>
      <Header
        titulo="Nuestra Empresa"
        subtitulo="Estamos orgullosos de cocinar para usted."
      />
      <div className="container my-5 text-start">
        <div className="p-5 contenido-texto fs-5">
          <p>
            En <strong>Pizza Club</strong> trabajamos día tras día con energía e
            ilusión para ofrecerte el sabor de la auténtica pizza.
          </p>
          <p>
            Esta aventura ha iniciado en 2009, donde nuestro propósito es
            convertirte en el verdadero protagonista de nuestras pizzerías,
            haciéndote disfrutar de una experiencia gastronómica de calidad en
            un ambiente acogedor, familiar y relajado.
          </p>
          <p>
            ¿El secreto? Pizzas irresistibles, crujientes y con personalidad.
            Todas nuestras pizzas están elaboradas con masas de obrador propio e
            ingredientes de primera calidad. Sin olvidar la variedad de
            productos como: pastas, ensaladas, complementos y postres, que harán
            aún mejor tu experiencia.Contamos con más de 60 sucursales en el
            país, compartiendo los mismos valores e ideales. En todas nuestras
            pizzerías podrás comer, recoger tu pedido y en los días de pereza
            cuentas con nuestro servicio a domicilio.
          </p>
          <p>
            <strong>
              Te esperamos en cualquiera de nuestras sucursales, para que a
              partir de ahora se convierta en tu pizzería favorita.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
