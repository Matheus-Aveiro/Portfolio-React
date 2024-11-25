import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

interface RepoData {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage?: string | null
}

const Projetos = () => {
  const [repositorios, setRepositorios] = useState<RepoData[]>([])

  // Lista de nomes dos projetos que você quer exibir
  const projetosPermitidos = [
    'Duck-Contacts',
    'Efood',
    'Waves-React',
    'Portfolio-React',
    'Project-FullStack-Twitter',
    'Waves-Bootstrap'
  ] // Substitua pelos nomes reais

  useEffect(() => {
    const fetchRepositorios = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/Matheus-Aveiro/repos'
        )
        const data: RepoData[] = await response.json()
        setRepositorios(data)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      }
    }

    fetchRepositorios()
  }, [])

  // Filtra os repositórios permitidos com base na lista de nomes
  const repositoriosFiltrados = repositorios.filter((repo) =>
    projetosPermitidos.includes(repo.name)
  )

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repositoriosFiltrados.map((repo) => (
          <Projeto
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            homepage={repo.homepage}
          />
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
