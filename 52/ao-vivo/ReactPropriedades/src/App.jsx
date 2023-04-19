
// 3) Importação do Componente Titulo
import Cabecalho from './componentes/Cabecalho/Cabecalho'
// import { Titulo, Subtitulo } from './componentes'

// 1) CSS: Estilo da página
import './App.css'

// 2) Componente React
function App() {

  const titulos = {
    titulo: "titulo",
    subtitulo: "subtitulo"
  }

  // 2.1) Retorno de JSX (JavaScript XML)
  return (
    <>    
      <Cabecalho titulos={titulos} />
    </>
  )
}

export default App
