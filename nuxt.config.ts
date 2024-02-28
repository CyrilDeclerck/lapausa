// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    prerender: {
      routes: [
        "/_ipx/_/home.webp",
        "/_ipx/_/home-d.webp",
        "/_ipx/f_webp/home-d.webp",
        "/_ipx/f_webp/home.webp",
        //intérieur
        "/_ipx/f_webp&s_750x760/interieur/chambre.jpg",
        "/_ipx/f_webp&s_750x760/interieur/chambre-1.jpg",
        "/_ipx/f_webp&s_750x760/interieur/cuisine-salon.jpg",
        "/_ipx/f_webp&s_750x760/interieur/douche.jpg",
        "/_ipx/f_webp&s_750x760/interieur/photo-ambiance-bouquin-cuisine.jpg",
        "/_ipx/f_webp&s_750x760/interieur/photo-ambiance-cuisine-citron.jpg",
        "/_ipx/f_webp&s_750x760/interieur/photo-ambiance-echelle.jpg",
        "/_ipx/f_webp&s_750x760/interieur/salon-escalier.jpg",
        "/_ipx/f_webp&s_750x760/interieur/sdb-vue-mer.jpg",
        "/_ipx/f_webp&s_750x760/interieur/wc.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/chambre.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/chambre-1.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/cuisine-salon.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/douche.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/photo-ambiance-bouquin-cuisine.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/photo-ambiance-cuisine-citron.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/photo-ambiance-echelle.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/salon-escalier.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/sdb-vue-mer.jpg",
        "/_ipx/f_webp&s_1500x1520/interieur/wc.jpg",
        //extérieur
        "_ipx/f_webp&s_1500x1520/exterieur/coucher-de-soleil.jpg",
        "_ipx/f_webp&s_1500x1520/exterieur/vue-colline.jpg",
        "_ipx/f_webp&s_1500x1520/exterieur/vue-mer-panoramique.jpg",
        "_ipx/f_webp&s_750x760/exterieur/coucher-de-soleil.jpg",
        "_ipx/f_webp&s_750x760/exterieur/vue-colline.jpg",
        "_ipx/f_webp&s_750x760/exterieur/vue-mer-panoramique.jpg",
        //activités
        "_ipx/f_webp&s_1500x1520/exterieur/camogli.jpg",
        "_ipx/f_webp&s_1500x1520/exterieur/portofino.jpg",
        "_ipx/f_webp&s_1500x1520/exterieur/sestri-baia.webp",
        "_ipx/f_webp&s_750x760/exterieur/camogli.jpg",
        "_ipx/f_webp&s_750x760/exterieur/portofino.jpg",
        "_ipx/f_webp&s_750x760/exterieur/sestri-baia.webp",
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
