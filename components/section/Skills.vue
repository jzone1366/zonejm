<script setup lang="ts">
const skills: string[] = [
    'Python',
    'Golang',
    'Java',
    'Php',
    'Laravel',
    'AWS',
    'Kubernetes',
    'Docker',
    'Nuxt',
    'Vue.js',
    'PostgresSQL',
    'MySQL',
    'Web Development',
]
</script>
<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Skills</h2>
        <ul class="flex flex-wrap gap-2">
            <li v-for="skill in skills"
                class="px-4 py-2 text-sm rounded-md bg-slate-200 hover:bg-slate-300 transition duration-300" itemprop="knowsAbout">{{ skill }}</li>
        </ul>
    </section>
</template>
