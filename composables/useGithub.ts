import { ref } from 'vue'

interface Repository {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  html_url: string
  topics: string[]
  updated_at: string
  created_at: string
  private: boolean
  default_branch: string
  size: number
  languages_url: string
}

interface GithubStats {
  followers: number
  following: number
  public_repos: number
  totalStars: number
  languages: string[]
}

interface GithubConfig {
  username: string
  reposPerPage?: number
}

export function useGithub(config: GithubConfig) {
  const loading = ref(true)
  const error = ref<Error | null>(null)
  const repositories = ref<Repository[]>([])
  const stats = ref<GithubStats>({
    followers: 0,
    following: 0,
    public_repos: 0,
    totalStars: 0,
    languages: []
  })

  const baseUrl = 'https://api.github.com'

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${baseUrl}/users/${config.username}`)
      const userData = await response.json()
      
      if (response.status !== 200) {
        throw new Error(userData.message || 'Failed to fetch user data')
      }
      
      stats.value.followers = userData.followers
      stats.value.following = userData.following
      stats.value.public_repos = userData.public_repos
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching user data:', err)
    }
  }

  const fetchRepositories = async () => {
    try {
      const response = await fetch(`${baseUrl}/users/${config.username}/repos?sort=updated&per_page=${config.reposPerPage || 6}`)
      const data = await response.json()
      
      if (response.status !== 200) {
        throw new Error(data.message || 'Failed to fetch repositories')
      }
      
      repositories.value = data

      // Calculate total stars
      stats.value.totalStars = data.reduce((acc: number, repo: Repository) => acc + repo.stargazers_count, 0)

      // Fetch languages for each repository
      const languageStats: Record<string, number> = {}
      await Promise.all(
        data.map(async (repo: Repository) => {
          const languagesResponse = await fetch(repo.languages_url)
          const languages = await languagesResponse.json()
          
          if (languagesResponse.status === 200) {
            Object.keys(languages).forEach(lang => {
              languageStats[lang] = (languageStats[lang] || 0) + 1
            })
          }
        })
      )

      // Sort languages by usage count
      stats.value.languages = Object.entries(languageStats)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([language]) => language)

    } catch (err) {
      error.value = err as Error
      console.error('Error fetching repositories:', err)
    }
  }

  const fetchGithubData = async () => {
    loading.value = true
    error.value = null
    
    try {
      await Promise.all([
        fetchUserData(),
        fetchRepositories()
      ])
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching GitHub data:', err)
    } finally {
      loading.value = false
    }
  }

  // Format size to human readable format
  const formatSize = (size: number): string => {
    if (size < 1024) return `${size} KB`
    return `${(size / 1024).toFixed(1)} MB`
  }

  return {
    repositories,
    stats,
    loading,
    error,
    fetchGithubData,
    formatSize
  }
} 