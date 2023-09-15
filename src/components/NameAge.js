import React from "react";
import HelloWorld from "./HelloWorld";


function NameAge(){
    return(
        <div className="container mt-3">
            <HelloWorld />
            <h4>
                Meus Dados
            </h4>
            <p>
                Wellington Macie, 24 anos de idade.
            </p>
        </div>
    )

}


export default NameAge;