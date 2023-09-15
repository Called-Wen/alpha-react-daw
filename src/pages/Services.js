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
            <div
              className="card text-light"
              style={{ backgroundColor: "#27ae60", color: "#fff" }}
            >
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Web</h5>
                <p className="card-text">
                  Criamos aplicações web modernas e responsivas utilizando as
                  mais recentes tecnologias.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: "#27ae60", color: "#fff" }}
            >
              <div className="card-body text-light">
                <h5 className="card-title ">Desenvolvimento Móvel</h5>
                <p className="card-text">
                  Criamos aplicações móveis intuitivas e eficazes para Android e
                  iOS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: "#27ae60", color: "#fff" }}
            >
              {" "}
              <div className="card-body text-light">
                <h5 className="card-title ">Integrações de Sistemas</h5>
                <p className="card-text">
                  Implementamos integrações entre diferentes sistemas garantindo
                  eficiência.
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
