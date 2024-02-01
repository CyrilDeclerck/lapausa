<template>
  <div class="py-6 px-3" id="about-us">
    <h2 class="subtitle">{{ $t("about_us") }}</h2>
    <p v-html="$t('about_us_first_part')"></p>
    <p v-html="$t('about_us_second_part')"></p>
    <span class="italic underline cursor-pointer"
      >{{ $t("show_more_link") }} ></span
    >
  </div>
  <div class="grid grid-cols-3 gap-1 mb-7">
    <span class="flex flex-col items-center mt-3" v-for="service in services">
      <nuxt-icon class="icon" :name="service.icon" filled />
      <span class="text-center leading-none mt-1" v-html="service.title" />
    </span>
  </div>
</template>

<style lang="postcss" scoped>
p {
  @apply text-20;
}

.icon :deep(svg) {
  @apply w-6 h-6;
}
</style>
<script setup lang="ts">
const services = [
  {
    title: "Parking",
    icon: "parking",
  },
  {
    title: "Wifi",
    icon: "wifi",
  },
  {
    title: "Surface 35 m<sup>2</sup>",
    icon: "space",
  },
  {
    title: "Douche",
    icon: "shower",
  },
  {
    title:
      "2 adultes <br/>+ 1 enfant <span class='text-11'>(+ de 7 ans)</span>",
    icon: "family",
  },
  {
    title: "Lit 160x200",
    icon: "bed",
  },
];
</script>
