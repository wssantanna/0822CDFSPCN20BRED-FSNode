// 1) CSS: Estilo da página
import './Titulo.css'

// Props = Propriedades 
// 2) Componente React
function Titulo(atributos) {
// function Titulo({ texto }) {

    // 2.1) Retorno de JSX (JavaScript XML)
    return (
      <>
        <h1 className="titulo">{atributos.texto}</h1>
        {/* <h1>{texto}</h1> */}
      </>
    )
  }
  
  // 3) Exportação do Component React
  export default Titulo