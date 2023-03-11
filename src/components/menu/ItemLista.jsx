// componente de item del menu
function ItemLista({ nombre, archivo }) {
  return (
    <div className="col mb-3">
      <div className="text-center text-light d-inline-block pizza-item">
        <img src={`/src/assets/img/pizzas/${archivo}`} alt={archivo} />
        <h4 className="py-2" style={{ fontFamily: "leckerliOne" }}>
          {nombre}
        </h4>
      </div>
    </div>
  );
}

export default ItemLista;
