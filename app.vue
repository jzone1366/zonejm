<script setup lang="ts">
useHead({
    title: "JMZ | Software Engineering Leader"
})
</script>
<template>
<div class="font-sans print:text-sm text-gray-700 min-h-screen bg-[#f7f7fc] print:bg-white">
    <div class="container grid max-w-5xl grid-cols-1 mx-auto sm:grid-cols-3 print:grid-cols-3 p-8 gap-6 sm:gap-12 print:gap-12"
         itemscope
         itemtype="https://schema.org/Person">
            <div class="flex flex-col gap-5">
                <SectionIntro />
                <SectionDetails />
                <SectionSocials />
                <SectionSkills />
            </div>
            <div class="flex flex-col col-span-2 gap-5">
                <SectionExperience />
                <SectionEducation />
                <SectionFooter />
            </div>
    </div>
</div>
</template>
