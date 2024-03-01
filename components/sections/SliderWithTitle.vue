<template>
  <div>
    <Swiper
      :modules="[SwiperNavigation, SwiperThumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      class="swiper-image"
      :lazy="true"
    >
      <SwiperSlide v-for="slide in slides">
        <NuxtImg
          :src="slide.src"
          loading="lazy"
          format="webp"
          width="750"
          height="760"
          class="max-w-none h-full w-full object-cover"
          :alt="slide.title"
        />
        <div class="swiper-lazy-preloader"></div>
      </SwiperSlide>
      <div
        :class="classTitle"
        class="w-full bg-lp-camel flex items-center justify-between py-4 px-3 text-lp-grey-blue lg:py-2_5 lg:px-2 lg:text-18"
      >
        <Swiper
          v-if="!withoutTitle"
          :modules="[SwiperThumbs, SwiperEffectFade]"
          @swiper="setThumbsSwiper"
          effect="fade"
          :crossFade="true"
        >
          <SwiperSlide
            v-for="slide in slides"
            :class="classTitle"
            class="bg-lp-camel"
          >
            {{ slide.title }}
          </SwiperSlide>
        </Swiper>
        <SwiperControls />
      </div>
    </Swiper>
  </div>
</template>

<style scoped lang="postcss">
.swiper-image.swiper {
  :deep(> .swiper-wrapper) {
    @apply h-[calc(100dvh-210px)] lg:h-[760px];
  }
}
</style>
<script setup>
const { slides, classTitle, withoutTitle } = defineProps([
  "slides",
  "classTitle",
  "withoutTitle",
]);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
setThumbsSwiper();
</script>
