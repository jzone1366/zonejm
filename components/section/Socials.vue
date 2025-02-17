<template>
    <section>
        <h2 class="mb-2 text-xl font-bold">Socials</h2>
        <ul class="space-y-2">
            <li>
                <NuxtLink
                    to="https://github.com/jzone1366"
                    class="flex items-center gap-2 hover:translate-x-2 transition duration-300"
                    itemprop="sameAs">
                     <Icon icon="simple-icons:github" class="w-5 h-5 inline-flex" :ssr="true" /> gh/zonejm
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://linkedin.com/in/zonejm"
                          class="flex items-center gap-2 hover:translate-x-2 transition duration-300"
                          itemprop="sameAs">
                    <Icon icon="simple-icons:linkedin" class="w-5 h-5 inline-flex" :ssr="true" /> in/zonejm
                </NuxtLink>
            </li>

        </ul>
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
