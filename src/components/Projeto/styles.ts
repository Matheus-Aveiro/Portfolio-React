import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  display: grid;
  flex-direction: column;
  align-items: flex-start; /* Alinha os itens no início */
`

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: start; /* Alinha os botões à direita */
  gap: 8px; /* Espaço entre os botões */
  width: 100%; /* Garante que os botões ocupem toda a largura */
  margin-top: 16px; /* Espaço entre o conteúdo e os botões */
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  cursor: pointer;
`
