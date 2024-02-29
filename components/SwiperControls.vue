<template>
  <div class="flex items-center ml-auto">
    <nuxt-icon
      name="arrow"
      class="arrow prev"
      @click="swiper.slidePrev()"
    ></nuxt-icon>
    <nuxt-icon
      name="arrow"
      class="arrow next ml-5"
      @click="swiper.slideNext()"
    ></nuxt-icon>
  </div>
</template>
<script setup lang="ts">
const swiper = useSwiper();
</script>
<style lang="postcss" scoped>
.arrow {
  @apply block;
  :deep(svg) {
    @apply w-2_5 h-2_5 m-0 lg:w-2 lg:h-2;
  }
  &.prev {
    @apply rotate-180;
  }
  &.swiper-button-disabled {
    @apply opacity-30;
  }
}
</style>
