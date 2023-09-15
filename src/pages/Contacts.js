function Contacts() {
    return (
      <div className="container mt-3">
        <h1>Página de Contactos</h1>
        <div className="container mt-5">

  
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label style={{ color: "#3498db", fontWeight:'bold' }} htmlFor="name" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="mb-3">
                  <label style={{ color: "#3498db", fontWeight:'bold' }} htmlFor="email" className="form-label">
                    Endereço de Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="seuemail@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label style={{ color: "#3498db", fontWeight:'bold' }} htmlFor="message" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Sua mensagem aqui"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h4 style={{ color: "#27ae60" }}>Informações de Contato</h4>
              <p>
                <strong style={{ color: "#3498db" }}>
                  Endereço:
                </strong> Rua das Flores, 123, Maputo, Moçambique
              </p>
              <p>
                <strong style={{ color: "#3498db" }}>
                  Email:
                </strong> info@empresa.com
              </p>
              <p>
                <strong style={{ color: "#3498db" }}>
                  Telefone:
                </strong> +258 123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contacts;
  