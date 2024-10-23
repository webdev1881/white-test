export default defineNuxtConfig({

  compatibilityDate: '2024-10-22',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
  ],

  css: [
    'assets/css/main.css',
  ],

  plugins: [
    '~/plugins/api.ts',
  ],

})