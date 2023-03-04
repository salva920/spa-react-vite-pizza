function ItemLista({ nombre, ruta }) {
  return (
    <div className="col mb-3">
      <div className="text-center d-inline-block pizza-item">
        <img src={`/src/assets/img/pizzas/${ruta}`} alt={ruta} />
        <h4 className="py-2" style={{ fontFamily: "leckerliOne" }}>
          {nombre}
        </h4>
      </div>
    </div>
  );
}

export default ItemLista;
