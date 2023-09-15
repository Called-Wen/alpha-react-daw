import { Link } from "react-router-dom";

function Exercise4() {
  return (
    <div className="container mt-3">
      <h1>Exercício nr4</h1>

      <div>
        <h4>
          O ciclo de vida foi programado para o componente do
          <h6>
            {" "}
            <Link to="/Ex3">exercício 3</Link>{" "}
          </h6>
        </h4>
      </div>
    </div>
  );
}

export default Exercise4;
