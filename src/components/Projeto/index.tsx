import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Titulo</Titulo>
      <Paragrafo tipo="secundario">Descrição</Paragrafo>
      <LinkBotao>Deploy</LinkBotao>
      <LinkBotao>Repositório</LinkBotao>
    </Card>
  )
}

export default Projeto
