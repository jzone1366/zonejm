<template>
    <div class="flex flex-wrap gap-3">
        <div v-for="skill in skills"
            class="group flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            itemprop="knowsAbout">
            <Icon 
                :icon="skill.icon" 
                class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" 
                :ssr="true" 
            />
            <span class="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">{{ skill.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

const skills = [
    {"name": "Python", "icon": "logos:python"},
    {"name": "Golang", "icon": "logos:go"},
    {"name": "Java", "icon": "logos:java"},
    {"name": "JavaScript", "icon": "logos:javascript"},
    {"name": "TypeScript", "icon": "logos:typescript-icon"},
    {"name": "PHP", "icon": "logos:php"},
    {"name": "React", "icon": "logos:react"},
    {"name": "Vite", "icon": "logos:vitejs"},
    {"name": "Vue.js", "icon": "logos:vue"},
    {"name": "Nuxt", "icon": "logos:nuxt-icon"},
    {"name": "Laravel", "icon": "logos:laravel"},
    {"name": "AWS", "icon": "logos:aws"},
    {"name": "GCP", "icon": "logos:google-cloud"},
    {"name": "Kubernetes", "icon": "logos:kubernetes"},
    {"name": "Docker", "icon": "logos:docker-icon"},
    {"name": "PostgreSQL", "icon": "logos:postgresql"},
    {"name": "MySQL", "icon": "logos:mysql"}
]
</script>
