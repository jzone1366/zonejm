<script setup>
const educations = [{
    degree: "B.S. in Information Technology and Web Science",
    institution: "RPI",
    logo: "rpi_best.jpg",
    period: "2010 - 2014"
},
]
</script>

<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Education</h2>
      <div class="flex-grow border-t border-gray-200"></div>
    </div>

    <div class="space-y-6">
      <div v-for="education in educations"
          class="group relative bg-white rounded-xl border border-gray-200/75 p-6 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
          itemscope 
          itemtype="https://schema.org/EducationalOrganization">
        <!-- Institution Header -->
        <div class="flex items-start gap-4">
          <div class="relative">
            <div class="w-12 h-12 rounded-lg bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
              <img :src="'/schools/' + education.logo"
                   :alt="`${education.institution}'s logo'`"
                   class="w-full h-full object-contain">
            </div>
          </div>
          <div class="flex-grow min-w-0">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
              <h3 class="text-lg font-semibold text-gray-900">{{ education.institution }}</h3>
              <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                {{ education.period }}
              </span>
            </div>
            <span class="block text-blue-600 font-medium">{{ education.degree }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
