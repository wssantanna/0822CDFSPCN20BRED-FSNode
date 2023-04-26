import { useState } from "react"

function Form() {

    const [mensagem, definirMensagem] = useState(null)

    return (
        <>
            <h1 className="display-1">{mensagem}</h1>
            <input 
                type="text" 
                className="form-control"
                onChange={(evento) => { 
                    definirMensagem(evento.target.value)
                }}
            />
        </>
    )
} 

export default Form