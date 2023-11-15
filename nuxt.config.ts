// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['fr', 'it', 'en'],
    defaultLocale: 'fr',
    vueI18n: './nuxt-i18n.js'
  }
})
