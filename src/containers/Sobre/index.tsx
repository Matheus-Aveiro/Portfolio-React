import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

// Definindo o tipo das props do componente
interface SobreProps {
  estaUsandoTemaDark: boolean
}

const Sobre = ({ estaUsandoTemaDark }: SobreProps) => {
  // Definindo o tema da URL da imagem com base no tema atual
  const temaImagem = estaUsandoTemaDark ? 'white' : 'dracula'

  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Sou Desenvolvedor Full Stack, apaixonado por tecnologia desde cedo e
        motivado pelo impacto que ela pode ter em conectar pessoas e simplificar
        o dia a dia. Trabalho tanto no frontend quanto no backend, utilizando
        ferramentas como React, Vue, TypeScript, Django e Docker para criar
        soluções robustas, escaláveis e acessíveis. Meu foco está em aplicar
        boas práticas de desenvolvimento para garantir a entrega de projetos
        organizados, eficientes e preparados para o futuro.
      </Paragrafo>
      <GithubSecao>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=matheus-aveiro&layout=compact&langs_count=7&theme=${temaImagem}`}
          alt="Estatísticas do GitHub"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
