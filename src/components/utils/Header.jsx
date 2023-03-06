// Componente Header que se usa en todas las paginas excepto la de inicio
// recibe como argumento titulo y subtitulo
function Header({ titulo, subtitulo }) {
return (
    <header className="header2">
      <div className="d-flex justify-content-start h-100 header-bg">
        <div className="d-flex flex-column justify-content-end mb-5 ms-5 pb-3">
          <div className="px-5 py-2">
            <h1>{titulo}</h1>
          </div>
          <div className="px-5 py-2">
            <h4>{subtitulo}</h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
