<script setup>
import { Icon } from '@iconify/vue'

const stats = ref({
  followers: 0,
  following: 0,
  publicRepos: 0,
  totalStars: 0,
  languages: []
})

const loading = ref(true)

// Fetch GitHub stats
const fetchGithubStats = async () => {
  try {
    // Fetch user data
    const userResponse = await fetch('https://api.github.com/users/jzone1366')
    const userData = await userResponse.json()
    
    // Fetch repositories for language stats
    const reposResponse = await fetch('https://api.github.com/users/jzone1366/repos?per_page=100')
    const reposData = await reposResponse.json()
    
    // Calculate language stats
    const languageStats = {}
    reposData.forEach(repo => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
      }
    })
    
    // Sort languages by count
    const sortedLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([language]) => language)
    
    // Calculate total stars
    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
    
    stats.value = {
      followers: userData.followers,
      following: userData.following,
      publicRepos: userData.public_repos,
      totalStars,
      languages: sortedLanguages
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchGithubStats()
})
</script>

<template>
  <div>
    <div class="flex items-center gap-2 mb-4">
      <div class="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
        <Icon icon="mdi:github" class="w-3.5 h-3.5 text-blue-600" />
      </div>
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">GitHub Stats</h3>
    </div>

    <div v-if="loading" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
    </div>

    <div v-else class="space-y-4">
      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Followers Card -->
        <div class="bg-white rounded-xl border border-gray-200/75 p-3 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
          <div class="flex flex-col items-center text-center">
            <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
              <Icon icon="mdi:account-group" class="w-4 h-4 text-blue-600" />
            </div>
            <div class="text-xs text-gray-600">Followers</div>
            <div class="text-lg font-bold text-gray-900">{{ stats.followers }}</div>
          </div>
        </div>

        <!-- Following Card -->
        <div class="bg-white rounded-xl border border-gray-200/75 p-3 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
          <div class="flex flex-col items-center text-center">
            <div class="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mb-2">
              <Icon icon="mdi:account-multiple" class="w-4 h-4 text-green-600" />
            </div>
            <div class="text-xs text-gray-600">Following</div>
            <div class="text-lg font-bold text-gray-900">{{ stats.following }}</div>
          </div>
        </div>

        <!-- Public Repos Card -->
        <div class="bg-white rounded-xl border border-gray-200/75 p-3 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
          <div class="flex flex-col items-center text-center">
            <div class="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center mb-2">
              <Icon icon="mdi:source-repository" class="w-4 h-4 text-purple-600" />
            </div>
            <div class="text-xs text-gray-600">Repos</div>
            <div class="text-lg font-bold text-gray-900">{{ stats.publicRepos }}</div>
          </div>
        </div>

        <!-- Total Stars Card -->
        <div class="bg-white rounded-xl border border-gray-200/75 p-3 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
          <div class="flex flex-col items-center text-center">
            <div class="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center mb-2">
              <Icon icon="mdi:star" class="w-4 h-4 text-yellow-600" />
            </div>
            <div class="text-xs text-gray-600">Stars</div>
            <div class="text-lg font-bold text-gray-900">{{ stats.totalStars }}</div>
          </div>
        </div>
      </div>

      <!-- Top Languages Card -->
      <div class="bg-white rounded-xl border border-gray-200/75 p-4 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <Icon icon="mdi:code-braces" class="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <div class="text-xs text-gray-600">Top Languages</div>
            <div class="text-sm font-semibold text-gray-900">Most Used</div>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="language in stats.languages" 
                :key="language"
                class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
            {{ language }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template> 