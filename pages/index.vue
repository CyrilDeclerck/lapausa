<template>
  <SectionsTopSlider />
  <StickyButtons class="lg:!hidden" />
  <section>
    <SectionsAboutUs />
    <SectionsSliderWithTitle :without-title="true" :slides="insideSlides" />
  </section>
  <section>
    <SectionsRatesAndConditions class="lg:order-2" />
    <SectionsSliderWithTitle :slides="outsideSlides" />
  </section>
  <section>
    <SectionsActivities />
    <SectionsSliderWithTitle
      :slides="activitiesSlides"
      class-title="bg-white lg:bg-lp-camel"
    />
  </section>
  <section>
    <NuxtImg
      src="/services/services.webp"
      height="830"
      width="750"
      format="webp"
      loading="lazy"
      :modifiers="{ position: 'bottom' }"
      class="hidden lg:block object-bottom h-full w-full object-cover"
    />
    <SectionsServices />
  </section>
  <section class="lg:grid-cols-none">
    <SectionsAccess />
  </section>
</template>
<script setup>
const insideSlides = [
  {
    src: "/interieur/chambre.jpg",
    title: "Chambre",
  },
  {
    src: "/interieur/chambre-1.jpg",
    title: "Chambre",
  },
  {
    src: "/interieur/cuisine.jpg",
    title: "Chambre",
  },
  {
    src: "/interieur/cuisine-salon.jpg",
    title: "Cuisine et Salon",
  },
  {
    src: "/interieur/douche.jpg",
    title: "La douche",
  },
  {
    src: "/interieur/photo-ambiance-bouquin-cuisine.jpg",
    title: "La cuisine",
  },
  {
    src: "/interieur/photo-ambiance-cuisine-citron.jpg",
    title: "La cuisine",
  },
  {
    src: "/interieur/photo-ambiance-echelle.jpg",
    title: "Chambre",
  },
  {
    src: "/interieur/salon-escalier.jpg",
    title: "le Salon",
  },
  {
    src: "/interieur/sdb-vue-mer.jpg",
    title: "La salle de bain",
  },
  {
    src: "/interieur/wc.jpg",
    title: "Les toilettes",
  },
];

const outsideSlides = [
  {
    src: "/exterieur/coucher-de-soleil.jpg",
    title: "outsideImageText1",
  },
  {
    src: "/exterieur/vue-colline.jpg",
    title: "outsideImageText2",
  },
  {
    src: "/exterieur/vue-mer-panoramique.jpg",
    title: "outsideImageText3",
  },
];

const activitiesSlides = [
  {
    src: "/activites/portofino.jpg",
    title: "Portofino",
  },
  {
    src: "/activites/camogli.jpg",
    title: "Camogli",
  },
  {
    src: "/activites/sestri-baia.webp",
    title: "Sestri - Baia del Silenzio",
  },
];
const { t } = useI18n();
useSeoMeta({
  title: t("SEO_title"),
});
const head = useLocaleHead({
  addSeoAttributes: true,
});
</script>
