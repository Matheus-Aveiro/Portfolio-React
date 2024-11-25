import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  align-items: start;
`

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  width: 100%;
  margin-top: 16px;
  align-self: end;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.corDaBorda};
  }
`
