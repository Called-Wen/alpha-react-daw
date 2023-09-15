import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="container mt-3">
      <h1>Página Inicial</h1>
      <h4>Seja Bem Vindo a Lista de Exercícios <p style={{ color: "#27ae60", fontWeight:'bold', display:'inline' }}>Resolvidos!</p> com React.</h4>

      <ol>
        <li>
          {" "}
          <Link to="/Ex1"> Exercício 1</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex2"> Exercício 2</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex3"> Exercício 3</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex4"> Exercício 4</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex5"> Exercício 5</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex6"> Exercício 6</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex7"> Exercício 7</Link>
        </li>
        <li>
          {" "}
          <Link to="/Ex8"> Exercício 8</Link>
        </li>
      </ol>

    </div>
  );
}

export default Home;
