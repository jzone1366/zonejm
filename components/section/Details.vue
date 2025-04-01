<template>
    <div class="space-y-4">
        <div class="flex items-center gap-2 mb-4">
            <div class="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                <Icon icon="heroicons:identification" class="w-3.5 h-3.5 text-blue-600" />
            </div>
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Details</h3>
        </div>
        <div class="space-y-2.5">
            <NuxtLink 
                to="mailto:jzone1229@google.com" 
                class="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                    <Icon icon="heroicons:envelope" class="w-5 h-5" />
                </div>
                <span class="font-medium">Email</span>
            </NuxtLink>
            <a href="/resume.pdf" 
                download
                class="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2.5 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                    <Icon icon="heroicons:document-arrow-down" class="w-5 h-5" />
                </div>
                <span class="font-medium">Download Resume</span>
            </a>
            <div class="flex items-center gap-3 text-gray-600 p-2.5">
                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50">
                    <Icon icon="heroicons:map-pin" class="w-5 h-5" />
                </div>
                <span class="font-medium">Atlanta, GA, USA</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
