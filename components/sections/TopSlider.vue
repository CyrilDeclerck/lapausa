<template>
  <div class="relative">
    <h1 class="title">
      <span class="block text-40 uppercase tracking-[8px] leading-snug">{{
        $t("la_pausa")
      }}</span>
      <span class="text-26 leading-tight" v-html="$t('catch_phrase')"></span>
    </h1>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :pagination="true"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="slide in slides">
        <picture>
          <!-- Image de bureau -->
          <source media="(min-width: 1024px)" :srcset="slide.images.desktop" />
          <!-- Image mobile -->
          <source media="(max-width: 1023px)" :srcset="slide.images.mobile" />

          <NuxtImg
            :src="slide.images.mobile"
            preload
            format="webp"
            alt="Image"
            class="max-w-none h-full w-full object-cover"
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="postcss">
.title {
  @apply w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-30 text-lp-white z-10 flex flex-col items-center text-center leading-none;
}
.swiper {
  @apply h-[calc(100vh-145px)] lg:h-[calc(100vh-75px)];
  :deep(&-pagination) {
    @apply bottom-4;
    &-bullet {
      @apply w-[6px] h-[3px] bg-lp-camel rounded-[3px] opacity-100 transition-all;
      &-active {
        @apply w-2_5 bg-white;
      }
    }
  }
}
</style>
<script setup>
const slides = [
  {
    alt: "la pausa",
    images: {
      desktop: "/home-d.webp",
      mobile: "/home.webp",
    },
  },
];
</script>
