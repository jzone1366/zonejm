<template>
    <div class="space-y-4">
        <div class="flex items-center gap-2 mb-4">
            <div class="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                <Icon icon="heroicons:code-bracket" class="w-3.5 h-3.5 text-blue-600" />
            </div>
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">Skills</h3>
        </div>
        <div class="flex flex-wrap gap-2.5">
            <div v-for="skill in skills"
                class="group flex items-center gap-2.5 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                itemprop="knowsAbout">
                <Icon 
                    :icon="skill.icon" 
                    class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" 
                    :ssr="true" 
                />
                <span class="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">{{ skill.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

const skills = [
    // Languages
    {"name": "Python", "icon": "logos:python"},
    {"name": "Golang", "icon": "logos:go"},
    {"name": "Java", "icon": "logos:java"},
    {"name": "JavaScript", "icon": "logos:javascript"},
    {"name": "TypeScript", "icon": "logos:typescript-icon"},
    {"name": "PHP", "icon": "logos:php"},
    {"name": "C#", "icon": "logos:c-sharp"},
    {"name": "CSS", "icon": "logos:css-3"},

    // Frontend Frameworks
    {"name": "React", "icon": "logos:react"},
    {"name": "Vue.js", "icon": "logos:vue"},
    {"name": "Angular.js", "icon": "logos:angular-icon"},
    {"name": "Nuxt", "icon": "logos:nuxt-icon"},
    {"name": "Vite", "icon": "logos:vitejs"},

    // Backend Frameworks
    {"name": "Laravel", "icon": "logos:laravel"},
    {"name": "Node.js", "icon": "logos:nodejs-icon"},
    {"name": "Nest.js", "icon": "logos:nestjs"},
    {"name": ".NET", "icon": "logos:dotnet"},

    // Cloud & Infrastructure
    {"name": "AWS", "icon": "logos:aws"},
    {"name": "GCP", "icon": "logos:google-cloud"},
    {"name": "Kubernetes", "icon": "logos:kubernetes"},
    {"name": "Docker", "icon": "logos:docker-icon"},

    // Databases
    {"name": "PostgreSQL", "icon": "logos:postgresql"},
    {"name": "MySQL", "icon": "logos:mysql"},
    {"name": "MongoDB", "icon": "logos:mongodb"},

    // APIs & Tools
    {"name": "GraphQL", "icon": "logos:graphql"}
]
</script>
