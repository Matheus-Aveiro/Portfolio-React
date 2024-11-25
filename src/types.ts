export interface RepoData {
  id: number
  node_id: string
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}
