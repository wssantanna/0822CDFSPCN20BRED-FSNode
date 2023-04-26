
//import React from "react"
import { useState } from "react"

function Contador() {
    
    //const [valor, definirValor] = React.useState(0);
    const [valor, definirValor] = useState(0);

    return (
        <>
          <h1>Valor: {valor}</h1>
          <button 
            className="btn btn-primary"
            onClick={() => {
              definirValor(valor+1)
            }}
          >
            +1
          </button>
        </>
      )
}

export default Contador