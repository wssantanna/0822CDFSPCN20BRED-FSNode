import Titulo from '../Titulo/Titulo'
import Subtitulo from '../Subtitulo/Subtitulo'

// 1) CSS: Estilo da página
import './Cabecalho.css'

// Props = Propriedades 
// 2) Componente React
function Cabecalho(atributos) {

    // 2.1) Retorno de JSX (JavaScript XML)
    return (
      <>
        <Titulo texto={atributos.titulos.titulo} />
        <Subtitulo texto={atributos.titulos.subtitulo} />
      </>
    )
  }
  
  // 3) Exportação do Component React
  export default Cabecalho