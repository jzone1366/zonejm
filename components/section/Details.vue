<template>
    <section>
        <h2 class="mb-2 text-xl font-bold"> Personal Details </h2>
        <ul class="space-y-2">
            <li>
                <NuxtLink
                    to="mailto:jzone1229@google.com"
                    class="flex items-center gap-2 hover:translate-x-2 transition duration-300"
                    itemprop="email">
                    <Icon icon="carbon:email" class="w-5 h-5 inline-flex" :ssr="true"/> jzone1229@gmail.com
                </NuxtLink>
            </li>
            <li>
                <a href="/resume.pdf"
                    download
                    class="flex items-center gap-2 hover:translate-x-2 transition duration-300 print:hidden">
                    <Icon icon="carbon:document-download" class="w-5 h-5 inline-flex" :ssr="true" />Resume</a>
            </li>
            <li>
                <span
                    class="flex items-center gap-2 hover:translate-x-2 transition duration-300"
                    itemscope
                    itemtype="http://schema.org/PostalAddress"
                    itemprop="address">
                    <Icon icon="carbon:map-center" class="w-5 h-5 inline-flex" :ssr="true"/> Atlanta, GA, USA
                </span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>
