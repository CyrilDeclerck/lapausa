<template>
  <div class="flex items-center">
    <nuxt-icon
      name="arrow"
      class="arrow next"
      @click="swiper.slideNext()"
    ></nuxt-icon>
    <nuxt-icon
      name="arrow"
      class="arrow prev ml-5"
      @click="swiper.slidePrev()"
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
    @apply w-2_5 h-2_5 m-0;
  }
  &.next {
    @apply rotate-180;
  }
}
</style>
