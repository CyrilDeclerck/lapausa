<template>
  <SectionsTopSlider />
  <StickyButtons class="lg:!hidden" />
  <SectionsAboutUs />
  <SectionsSliderWithTitle :slides="insideSlides" />
  <SectionsRatesAndConditions />
  <SectionsSliderWithTitle :slides="outsideSlides" />
  <SectionsActivities />
  <SectionsSliderWithTitle :slides="activitiesSlides" class-title="bg-white" />
  <SectionsServices />
  <SectionsAccess />
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
