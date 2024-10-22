// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-10-22',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss'
  ],

})