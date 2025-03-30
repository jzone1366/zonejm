<template>
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
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
