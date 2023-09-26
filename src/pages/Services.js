function Services() {
  return (
    <div className="container mt-3">
      <h1>Página de Serviços</h1>
      <div className="container mt-5">
        <h2 className="t mb-4" style={{ color: "#3498db" }}>
          Nossos Serviços
        </h2>

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card text-light" style={{ backgroundColor: "#27ae60", color: "#fff" }}>
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento de Catálogo Online</h5>
                <p className="card-text">
                  Desenvolvemos catálogos online modernos e intuitivos, proporcionando acesso fácil e rápido à sua coleção de livros.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ backgroundColor: "#27ae60", color: "#fff" }}>
              <div className="card-body text-light">
                <h5 className="card-title ">Gestão de Empréstimos e Devoluções</h5>
                <p className="card-text">
                  Oferecemos soluções para a gestão eficiente de empréstimos e devoluções de livros, facilitando o controle da sua biblioteca.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ backgroundColor: "#27ae60", color: "#fff" }}>
              <div className="card-body text-light">
                <h5 className="card-title ">Sistema de Reservas Online</h5>
                <p className="card-text">
                  Implementamos sistemas de reservas online para que seus usuários possam agendar a retirada de livros de forma prática e conveniente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
