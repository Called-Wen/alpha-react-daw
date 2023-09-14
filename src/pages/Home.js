import React, { useState } from "react";

function Home() {
  const [contador, setContador] = useState(0);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  const estiloDoH2 = {
    color: '#32527b',       
    fontSize: '24px',    
    display: 'inline-block'   
  };

  //Condição de renderização
  
  if (contador >= 30) {
    estiloDoH2.color = 'red'; 
  }
  return (
    <div className="container mt-3">
      <h1>Home Page</h1>

      <div>
        <button className="btn btn-outline-success" onClick={increment}>
          <span>&#x2191;</span>
        </button>
        <h2  style={estiloDoH2}>Contador: {contador}</h2>
        <button className="btn btn-outline-danger " onClick={decrement}>
          <span>&#x2193;</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
