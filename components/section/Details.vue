<template>
    <div class="space-y-3">
        <h3 class="text-sm font-medium text-gray-900 uppercase tracking-wider">Contact Details</h3>
        <div class="space-y-2">
            <NuxtLink 
                to="mailto:jzone1229@google.com" 
                class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50/50">
                <Icon icon="heroicons:envelope" class="w-5 h-5" />
                <span>Email</span>
            </NuxtLink>
            <a href="/resume.pdf" 
                download
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
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
