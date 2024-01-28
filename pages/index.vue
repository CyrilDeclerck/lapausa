<template>
  <SectionsTopSlider />
  <StickyButtons />
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
    title: "Salon",
  },
];

const outsideSlides = [
  {
    src: "/garden.png",
    title: "La terasse",
  },
  {
    src: "/home.jpg",
    title: "Salon",
  },
];

const activitiesSlides = [
  {
    src: "/portofino.jpg",
    title: "Portofino",
  },
  {
    src: "/home.jpg",
    title: "Salon",
  },
];
</script>
