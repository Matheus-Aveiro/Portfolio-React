import { Card, LinkBotao, BotaoContainer } from './styles'
import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

interface ProjetoProps {
  name: string
  description: string | null
  html_url: string
  homepage?: string | null
}

const Projeto = ({ name, description, html_url, homepage }: ProjetoProps) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">{description || 'Sem descrição'}</Paragrafo>
    <BotaoContainer>
      <LinkBotao href={html_url} target="_blank" rel="noopener noreferrer">
        Repositório
      </LinkBotao>
      {homepage && (
        <LinkBotao href={homepage} target="_blank" rel="noopener noreferrer">
          Deploy
        </LinkBotao>
      )}
    </BotaoContainer>
  </Card>
)

export default Projeto
