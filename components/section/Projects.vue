<script setup>
import { Icon } from '@iconify/vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const { repositories, loading, error, fetchGithubData, formatSize } = useGithub({
  username: 'jzone1366',
  reposPerPage: 6 // Show 6 most recent projects
})

onMounted(() => {
  fetchGithubData()
})
</script>

<template>
  <div>
    <div class="flex items-center gap-3 mb-8">
      <h2 class="text-2xl font-bold text-gray-900">Projects</h2>
      <div class="flex-grow border-t border-gray-200"></div>
    </div>

    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="text-red-600 text-center py-12">
      Failed to load projects. Please try again later.
    </div>

    <div v-else class="space-y-6">
      <Disclosure v-for="(project, index) in repositories" 
          :key="project.name"
          :defaultOpen="index === 0"
          v-slot="{ open }"
          class="group relative bg-white rounded-2xl border border-gray-200/75 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200">
        <div class="p-8">
          <!-- Project Header -->
          <div class="flex items-start gap-4 mb-4">
            <div class="relative">
              <div class="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                <Icon icon="mdi:github" class="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                <h3 class="text-lg font-semibold text-gray-900">
                  <a :href="project.html_url" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">
                    {{ project.name }}
                  </a>
                </h3>
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  <Icon icon="mdi:star" class="w-3 h-3" />
                  {{ project.stargazers_count }}
                </span>
                <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700">
                  {{ new Date(project.updated_at).toLocaleDateString() }}
                </span>
              </div>
              <span class="block text-blue-600 font-medium">
                {{ project.language }}
              </span>
            </div>
            <DisclosureButton class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200">
              <span>{{ open ? 'Hide Details' : 'View Details' }}</span>
              <Icon icon="heroicons:chevron-down" class="w-4 h-4 transform transition-transform duration-200" :class="{ 'rotate-180': open }" />
            </DisclosureButton>
          </div>

          <!-- Description -->
          <div>
            <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
            
            <!-- Topics Tags -->
            <div v-if="project.topics?.length" class="flex flex-wrap gap-2">
              <span v-for="topic in project.topics" 
                    :key="topic"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                {{ topic }}
              </span>
            </div>
          </div>

          <!-- Additional Details -->
          <DisclosurePanel class="mt-4 pt-4 border-t border-gray-100">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="text-sm font-medium text-gray-900 mb-2">Repository Details</h4>
                <dl class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Created:</dt>
                    <dd class="text-gray-900">{{ new Date(project.created_at).toLocaleDateString() }}</dd>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Size:</dt>
                    <dd class="text-gray-900">{{ formatSize(project.size) }}</dd>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Default Branch:</dt>
                    <dd class="text-gray-900">{{ project.default_branch }}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 mb-2">Statistics</h4>
                <dl class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Forks:</dt>
                    <dd class="text-gray-900">{{ project.forks_count }}</dd>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Watchers:</dt>
                    <dd class="text-gray-900">{{ project.watchers_count }}</dd>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <dt class="text-gray-500">Visibility:</dt>
                    <dd class="text-gray-900">{{ project.private ? 'Private' : 'Public' }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  </div>
</template> 