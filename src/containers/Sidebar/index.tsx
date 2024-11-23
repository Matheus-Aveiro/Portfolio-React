import Avatar from '../../components/Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
