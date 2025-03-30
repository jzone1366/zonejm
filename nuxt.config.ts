// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    runtimeConfig: {
        public: {
            functionBaseUrl: process.env.URL,
        }
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss'
    ]
})
