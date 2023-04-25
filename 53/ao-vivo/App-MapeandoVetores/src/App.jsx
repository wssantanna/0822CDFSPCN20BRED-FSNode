
function App() { 

  const produtos = [
    {
      nome: "Coca-cola",
      preco: "R$ 5.00"
    },
    {
      nome: "Pepsi",
      preco: "R$ 5.00"
    },
    {
      nome: "Misto quente",
      preco: "R$ 10.00"
    },
    {
      nome: "Suco",
      preco: "R$ 8.00"
    }
  ]

  // JSX = JavaScript XML
  return (
    <>
      <ul>
        {produtos.map((produto, indice) => {
          return <li key={indice}>{produto.nome} - {produto.preco}</li>
        })}
      </ul>
    </>
  )
}

export default App
