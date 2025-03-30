<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Experience from '~/components/section/Experience.vue'
import Education from '~/components/section/Education.vue'
import Weather from '~/components/section/Weather.vue'
import Skills from '~/components/section/Skills.vue'
import Intro from '~/components/section/Intro.vue'
import Details from '~/components/section/Details.vue'
import Socials from '~/components/section/Socials.vue'

useHead({
    title: "JMZ | Software Engineering Leader | AI Nerd"
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container max-w-6xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
        <!-- Sidebar -->
        <aside class="md:sticky md:top-8 h-fit">
          <!-- Profile Section -->
          <div class="bg-white rounded-2xl border border-gray-200/75 p-6">
            <div class="space-y-6">
              <Intro />
              <Details />
              <Socials />
              <Skills />
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="space-y-8">
          <Experience />
          <Education />
          <Weather />
        </main>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t border-gray-200 mt-12">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex justify-between items-center text-sm text-gray-600">
          <NuxtLink to="https://www.netlify.com/" class="hover:text-blue-600 transition-colors">
            Deployed and Hosted via Netlify
          </NuxtLink>
          <NuxtLink to="https://github.com/jzone1366/zonejm" class="hover:text-blue-600 transition-colors">
            Last updated on 03/29/2025
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
