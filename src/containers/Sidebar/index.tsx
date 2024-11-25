import Avatar from '../../components/Avatar'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa' // Importa os ícones
import {
  Descricao,
  BotaoTema,
  SidebarContainer,
  SocialLinks,
  IconLink
} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Descricao tipo="principal" fontSize={20}>
        Matheus Aveiro
      </Descricao>
      <Descricao tipo="secundario" fontSize={12}>
        Engenheiro Full-Stack
      </Descricao>
      <SocialLinks>
        <IconLink
          href="https://www.linkedin.com/in/aveiromat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/aveiromat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </IconLink>
        <IconLink
          href="https://www.Github.com/matheus-aveiro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </IconLink>
      </SocialLinks>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
