<template>
  <SectionsTopSlider />
  <StickyButtons class="lg:!hidden" />
  <section>
    <SectionsAboutUs />
    <SectionsSliderWithTitle :slides="insideSlides" />
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
      src="/services.jpg"
      height="830"
      width="750"
      format="webp"
      loading="lazy"
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
    src: "/kitchen.png",
    title: "Cuisine",
  },
  {
    src: "/home.jpg",
    title: "Image 2",
  },
];

const outsideSlides = [
  {
    src: "/garden.png",
    title: "La terrasse",
  },
  {
    src: "/home.jpg",
    title: "Image 2",
  },
];

const activitiesSlides = [
  {
    src: "/portofino.jpg",
    title: "Portofino",
  },
  {
    src: "/home.jpg",
    title: "Image 2",
  },
];
</script>
