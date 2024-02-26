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
      class-title="bg-white"
    />
  </section>
  <section>
    <SectionsServices />
  </section>
  <section>
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
