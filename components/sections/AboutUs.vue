<template>
  <div class="lg:mr-18">
    <div class="py-6 px-3 lg:pb-3 lg:px-0 lg:pt-9" id="about-us">
      <h2 class="subtitle">{{ $t("about_us") }}</h2>
      <p v-html="$t('about_us_first_part')"></p>
      <p v-html="$t('about_us_second_part')"></p>
      <transition>
        <div
          v-if="readMore"
          class="text-20 lg:text-23"
          v-html="$t('about_us_third_part')"
        ></div>
      </transition>
      <span
        class="italic underline cursor-pointer lg:text-20"
        @click="readMore = !readMore"
        >{{ readMore ? $t("show_less_link") : $t("show_more_link") }} ></span
      >
    </div>
    <div
      class="grid grid-cols-3 gap-1 mb-7 lg:max-w-[420px] lg:gap-x-4 lg:mb-0"
    >
      <span class="flex flex-col items-center mt-3" v-for="service in services">
        <nuxt-icon class="icon" :name="service.icon" filled />
        <span
          class="text-center leading-none mt-1 lg:text-20"
          v-html="$t(service.title)"
        />
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
p {
  @apply text-20 lg:text-23;
}

.icon :deep(svg) {
  @apply w-6 h-6 lg:h-8 lg:w-8;
}
</style>
<script setup lang="ts">
const services = [
  {
    title: "about_us_parking",
    icon: "parking",
  },
  {
    title: "about_us_wifi",
    icon: "wifi",
  },
  {
    title: "about_us_surface",
    icon: "space",
  },
  {
    title: "about_us_shower",
    icon: "shower",
  },
  {
    title: "about_us_family",
    icon: "family",
  },
  {
    title: "about_us_bed",
    icon: "bed",
  },
];

const readMore = ref(false);
</script>
<style lang="postcss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
