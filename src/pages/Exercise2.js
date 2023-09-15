import { useState } from "react";

function Exercise2() {
    const [contador, setContador] = useState(0);

    const increment = () => {
      setContador(contador + 1);
    };
  
    const decrement = () => {
      setContador(contador - 1);
    };
  
    const estiloDoH2 = {
      color: "#32527b",
      fontSize: "24px",
      display: "inline-block",
    };
    
    if (contador >= 30) {
      estiloDoH2.color = "red";
    }
  return (
    <div className="container mt-3">
    <h1>
        Exercício nr2
    </h1>
    <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
    <button className="btn btn-outline-success " onClick={increment}>
      <span>&#x2191;</span>
    </button>
    <h2 className="px-4" style={estiloDoH2}>Contador: {contador}</h2>
    <button className="btn btn-outline-danger " onClick={decrement}>
      <span>&#x2193;</span>
    </button>
  </div>

    </div>
</div>



  );
}

export default Exercise2;
