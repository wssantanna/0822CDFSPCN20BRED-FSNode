import { useEffect, useState } from "react"


function App() {

  //https://fakestoreapi.com/products?limit=5

  const [produtos, definirProdutos] = useState([])

  // 1) Crie uma requisição utilizando useEffect para trazer resultados 
  // com limite de 10 e 20 primeiros produtos.
  const [numeroProdutos, definirNumeroProdutos] = useState()
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(resposta => resposta.json())
      .then(json => {
        console.count("Requisições") 
        definirProdutos(json)
      })
  }, [])

  return (
    <>    
      <div className="container">
        <div className="row">
          <div className="col">
            {
            /*
            
              1.1) Utilize o estado numeroProdutos 
              para disparar a função.
            */
            }
              <button onClick={() => {definirNumeroProdutos(10)}}>10</button>
              <button onClick={() => {definirNumeroProdutos(20)}}>20</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
          <div className="d-grid gap-5">

            {produtos.map(produto => (
              <div key={produto.id} className="card">
                <img src={produto.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{produto.title}</h5>
                  <p className="card-text">{produto.description}</p>
                  <a href="#" className="btn btn-primary">+ 1</a>
                </div>
              </div>
            ))}

          </div>
          </div>
        </div>
      </div>
    </>

    
  )
}

export default App
