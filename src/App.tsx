import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { BorderRight, Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaLight : temaDark}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <BorderRight></BorderRight>
        <div></div>
        <main>
          <Sobre estaUsandoTemaDark={estaUsandoTemaDark} />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
