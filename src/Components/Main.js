import React from "react";

export default function Main({nome,idade, tecnologia}) {
    return(
        <div>
            <h2>Nome: <span>{nome}</span></h2>
            <h2>Idade: <span>{idade}</span></h2>
            <h2>Tecnologia: <span>{tecnologia}</span></h2>
        </div>
    
    )
}