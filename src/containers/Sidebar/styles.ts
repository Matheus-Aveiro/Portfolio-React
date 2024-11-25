import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: ${(props) => (props.tipo === 'principal' ? '8px' : '16px')};
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  display: grid;
  justify-items: center;
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

export const IconLink = styled.a`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.corDeFundoBotao};
  }
`
