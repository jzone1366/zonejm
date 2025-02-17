<script setup lang="ts">
defineProps<{
    title: string,
}>()
</script>
<template>
    <section class="pb-3 mb-3 border-b">
        <h2 class="mb-1 font-bold uppercase border-b border-gray-950"> {{  title }} </h2>
        <slot />
    </section>
</template>
