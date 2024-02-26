// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    prerender: {
      routes: [
        "/_ipx/_/home.jpg",
        "/_ipx/_/home-d.jpg",
        "/_ipx/f_webp/home-d.jpg",
        // etc.
      ],
    },
  },
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
    locales: [
      {
        code: "en",
        name: "EN",
      },
      {
        code: "it",
        name: "IT",
      },
      {
        code: "fr",
        name: "FR",
      },
    ],
    defaultLocale: "fr",
    vueI18n: "./nuxt-i18n.js",
  },
});
