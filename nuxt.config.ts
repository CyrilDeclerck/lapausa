// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@vueuse/nuxt",
    "nuxt-icons",
    "@nuxt/image",
  ],
  googleFonts: {
    download: true,
    families: {
      "IM Fell DW Pica": {
        wght: [400],
        ital: [400],
      },
    },
  },
  i18n: {
    baseUrl: "https://www.lapausa-liguria.it",
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en-US",
      },
      {
        code: "it",
        name: "IT",
        iso: "it-IT",
      },
      {
        code: "fr",
        name: "FR",
        iso: "fr-FR",
      },
    ],
    defaultLocale: "fr",
    vueI18n: "./nuxt-i18n.js",
  },
});
