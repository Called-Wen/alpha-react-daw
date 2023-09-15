function About(){

    return (
        <div className="container mt-3">
            <h1>
                Página Sobre Nós
            </h1>
            <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <article>
            <h2 style={{ color: "#3498db" }}>Quem Somos??</h2>
            <p>
              Somos uma entidade responsável e dedicada, guiada por valores e
              princípios sólidos. Comprometemo-nos a impulsionar inovações,
              buscando constantemente elevar o nosso padrão para superar os
              desafios apresentados por outras organizações. Contamos com uma
              equipe diversificada, liderada pelo jovem desenvolvedor{" "}
              <strong>Wellington Macie</strong>, cujas habilidades em ferramentas
              como React são uma fonte valiosa e muitas vezes surpreendente de
              inovação.
            </p>
          </article>
        </div>
        <div className="col-md-6">
          <article>
            <h2 style={{ color: "#27ae60" }}>
              Desenvolvimento React
            </h2>
            <p>
              Reconhecemos a importância das tecnologias de ponta no mundo
              digital de hoje. Uma dessas tecnologias é o React, uma biblioteca
              JavaScript desenvolvida e mantida pelo Facebook. Ela é notável por
              sua eficiência e capacidade de criar interfaces de usuário
              interativas e dinâmicas.
            </p>
            <ul>
              <li>
                <i className="fa fa-check" style={{ color: "#e74c3c" }}></i>{" "}
                Componentização Avançada
              </li>
              <li>
                <i className="fa fa-check" style={{ color: "#e74c3c" }}></i>{" "}
                Virtual DOM
              </li>
              <li>
                <i className="fa fa-check" style={{ color: "#e74c3c" }}></i>{" "}
                Ampla Comunidade e Ecossistema
              </li>
              <li>
                <i className="fa fa-check" style={{ color: "#e74c3c" }}></i>{" "}
                SEO-Friendly
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
        </div>
    )
}

export default About;