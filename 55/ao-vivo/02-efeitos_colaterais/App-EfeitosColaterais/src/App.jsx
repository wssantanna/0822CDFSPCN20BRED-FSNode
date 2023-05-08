import { useEffect, useState } from "react"

function App() {
  const [numero, definiNumero] = useState(0)
  const [nome, definirNome] = useState("Digite seu nome")

  useEffect(() => {
    console.count("useEffect")
    document.title = `Você clicou ${numero} vezes`
  },[numero])

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <div className="d-grid gap-2">
            <span>Você clicou {numero} vezes</span>
            <button 
              className="btn btn-primary"
              onClick={() => definiNumero((numeroAtual) => numeroAtual + 1)}
            >
              +1
            </button>
			<hr />
			<h2>{nome || "Sem nome"}</h2>
            <input 
              className="form-control"
              type="text"
              onChange={(e) => definirNome(e.target.value)} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
