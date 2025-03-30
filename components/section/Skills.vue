<template>
    <section>
        <ul class="flex flex-wrap gap-2">
            <li v-for="skill in skills"
                class="flex items-center gap-1 px-3 py-2 text-sm rounded-md bg-slate-200 hover:bg-slate-300 transition duration-300" itemprop="knowsAbout">
                <Icon :icon="'lineicons:' + skill.icon" class="w-5 h-5 inline-flex" :ssr="true" />
                {{ skill.name }}
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
const skills  = [
    {"name": "Python", "icon": "python" },
    {"name": "Golang", "icon": "go" },
    {"name": "Java", "icon": "java" },
    {"name": "JavaScript", "icon": "javascript"},
    {"name": "TypeScript", "icon": "typescript"},
    {"name": "Php", "icon": "php" },
    {"name": "React", "icon": "react"},
    {"name": "Vite", "icon": "vite"},
    {"name": "Vuejs", "icon": "vuejs"},
    {"name": "Nuxt", "icon": "nuxt"},
    {"name": "Laravel", "icon": "laravel"},
    {"name": "AWS", "icon": "aws"},
    {"name": "GCP", "icon": "google-cloud"},
    {"name": "Kubernetes", "icon": "kubernetes"},
    {"name": "Docker", "icon": "docker"},
    {"name": "PostgreSQL", "icon": "postgresql"},
    {"name": "MySQL", "icon": "mysql"},
]
</script>
