// 1) CSS: Estilo da página
import './Subtitulo.css'

// 2) Componente React
function Subtitulo(atributos) {

    // 2.1) Retorno de JSX (JavaScript XML)
    return (
      <>
        <h2>{atributos.texto}</h2>
      </>
    )
  }
  
  // 3) Exportação do Component React
  export default Subtitulo