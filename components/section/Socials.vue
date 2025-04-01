<template>
    <div class="space-y-4">
        <div class="flex items-center gap-2 mb-4">
            <div class="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                <Icon icon="heroicons:user-group" class="w-3.5 h-3.5 text-blue-600" />
            </div>
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connect With Me</h3>
        </div>
        <div class="space-y-2.5">
            <NuxtLink to="https://github.com/jzone1366"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-200 p-2.5 rounded-xl hover:bg-gray-50/80 hover:shadow-sm">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <Icon icon="simple-icons:github" class="w-5 h-5" />
                </div>
                <span class="font-medium">GitHub</span>
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/in/zonejm"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 text-gray-600 hover:text-[#0A66C2] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                    <Icon icon="simple-icons:linkedin" class="w-5 h-5" />
                </div>
                <span class="font-medium">LinkedIn</span>
            </NuxtLink>
            <NuxtLink to="https://www.kaggle.com/zonejm"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 text-gray-600 hover:text-[#20BEFF] transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                    <Icon icon="simple-icons:kaggle" class="w-5 h-5" />
                </div>
                <span class="font-medium">Kaggle</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
