import { useState } from "react";
import Header from "../utils/Header";

function Contacto() {
  // se crea un estado local que almacena los datos del formulario 
  // y los mensajes de notificación de error o exito
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [msg, setMsg] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  // funsion que se ejecuta cuando se envie el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // comprueba que los datos no esten vacios, si la condicion se cumple da error
    if (email.trim() == "" || nombre.trim() == "" || comentario.trim() == "") {
      setErrMsg(true);
      setMsg(false);
      return;
    }

    // si todo esta bien, retorna un mensaje de exito y rainicia el formulario
    setErrMsg(false);
    setMsg(true);

    setEmail("");
    setNombre("");
    setComentario("");
    return;
  };

  return (
    <div>
      <Header
        titulo="Contactanos"
        subtitulo="Dejanos saber tus opiniones y sugerencias."
      />

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col col-md-6 img-comentario d-none d-md-block"></div>
          <div className="col col-md-6 my-5 px-4 text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errMsg ? "is-invalid" : ""}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">Ingrese su email.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="nombre"
                  className={`form-control ${errMsg ? "is-invalid" : ""}`}
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <div className="invalid-feedback">Ingrese su nombre.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="comentario" className="form-label">
                  Comentario
                </label>
                <textarea
                  style={{ resize: "none" }}
                  className={`form-control comentario ${
                    errMsg ? "is-invalid" : ""
                  }`}
                  id="comentario"
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                <div className="invalid-feedback">Ingrese su comentario.</div>
                <div
                  className={`alert alert-success mt-3 ${msg ? "" : "d-none"}`}
                  style={{ fontFamily: "leckerliOne" }}
                  role="alert"
                >
                  Comentario enviado exitosamente, Muchas gracias.
                </div>

                <div
                  className={`alert alert-danger mt-3 ${
                    errMsg ? "" : "d-none"
                  }`}
                  style={{ fontFamily: "leckerliOne" }}
                  role="alert"
                >
                  ERROR!. Ingrese los datos correctamente.
                </div>
              </div>

              <button className="btn btn-success my-3 text-light w-100">
                ENVIAR COMENTARIO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
