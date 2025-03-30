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
  <div class="min-h-screen bg-gray-50/50">
    <div class="container max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] gap-8">
        <!-- Sidebar -->
        <aside class="md:sticky md:top-8 h-fit">
          <!-- Profile Section -->
          <div class="bg-white rounded-2xl border border-gray-200/75 p-8 shadow-sm">
            <div class="space-y-8">
              <Intro />
              <div class="h-px bg-gray-100"></div>
              <Details />
              <div class="h-px bg-gray-100"></div>
              <Socials />
              <div class="h-px bg-gray-100"></div>
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
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <NuxtLink to="https://www.netlify.com/" 
              class="group flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Icon icon="logos:netlify" class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span>Deployed and Hosted via Netlify</span>
          </NuxtLink>
          <NuxtLink to="https://github.com/jzone1366/zonejm" 
              class="group flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Icon icon="simple-icons:github" class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span>Last updated on 03/29/2025</span>
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
