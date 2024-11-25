import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 32px;
  margin-bottom: 32px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
