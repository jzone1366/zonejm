<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Experience from '~/components/section/Experience.vue'
import Education from '~/components/section/Education.vue'
import Weather from '~/components/section/Weather.vue'
import Skills from '~/components/section/Skills.vue'

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
              <!-- Image and Name -->
              <div class="text-center">
                <div class="mb-4">
                  <NuxtPicture
                    src="/selfie.jpg"
                    alt="Image of Josh"
                    itemprop="image"
                    :imgAttrs="{class:'w-32 h-32 rounded-full object-cover object-[center_60%] mx-auto ring-4 ring-gray-50 shadow-lg'}"
                  />
                </div>
                <h1 itemprop="name" class="text-2xl font-bold text-gray-900">Joshua Zone</h1>
                <h2 class="text-lg text-blue-600 font-medium">Software Engineering Leader</h2>
              </div>

              <!-- Bio -->
              <div class="prose prose-sm max-w-none text-gray-600">
                <p class="leading-relaxed">
                  Principal Architect | Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership. Proven expertise in distributed systems, microservices, cloud-native architecture, and API strategy. Skilled at leading cross-functional teams, optimizing infrastructure, reducing costs, and improving system resilience. Passionate about fostering innovation, mentoring teams, and aligning technical strategies with business objectives. Seeking a leadership role to drive engineering excellence and scalable solutions.
                </p>
              </div>

              <!-- Contact Details -->
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-gray-900 uppercase tracking-wider">Contact Details</h3>
                <div class="space-y-2">
                  <NuxtLink to="mailto:jzone1229@google.com" 
                    class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50/50">
                    <Icon icon="heroicons:envelope" class="w-5 h-5" />
                    <span>Email</span>
                  </NuxtLink>
                  <a href="/resume.pdf" download
                    class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50/50">
                    <Icon icon="heroicons:document-arrow-down" class="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                  <div class="flex items-center gap-2 text-gray-600 p-2">
                    <Icon icon="heroicons:map-pin" class="w-5 h-5" />
                    <span>Atlanta, GA, USA</span>
                  </div>
                </div>
              </div>

              <!-- Connect With Me -->
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-gray-900 uppercase tracking-wider">Connect With Me</h3>
                <div class="space-y-2">
                  <NuxtLink to="https://github.com/jzone1366"
                    class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50">
                    <Icon icon="simple-icons:github" class="w-5 h-5" />
                    <span>GitHub</span>
                  </NuxtLink>
                  <NuxtLink to="https://linkedin.com/in/zonejm"
                    class="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] transition-colors p-2 rounded-lg hover:bg-blue-50/50">
                    <Icon icon="simple-icons:linkedin" class="w-5 h-5" />
                    <span>LinkedIn</span>
                  </NuxtLink>
                  <NuxtLink to="https://www.kaggle.com/zonejm"
                    class="flex items-center gap-2 text-gray-600 hover:text-[#20BEFF] transition-colors p-2 rounded-lg hover:bg-blue-50/50">
                    <Icon icon="simple-icons:kaggle" class="w-5 h-5" />
                    <span>Kaggle</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Skills -->
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-gray-900 uppercase tracking-wider">Skills</h3>
                <div class="flex flex-wrap gap-2">
                  <Skills />
                </div>
              </div>
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
            Last updated on 02/18/2025
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
