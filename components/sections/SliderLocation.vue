<template>
  <div>
    <Swiper
      :modules="[SwiperNavigation, SwiperThumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      height="440"
      class="swiper-image"
      :navigation="{
        nextEl: '.arrow.next',
        prevEl: '.arrow.prev',
      }"
    >
      <SwiperSlide v-for="slide in slides">
        <img
          :src="slide.src"
          class="max-w-none h-full w-full object-cover"
          :alt="slide.title"
        />
      </SwiperSlide>
      <div
        class="w-full bg-lp-camel flex items-center justify-between py-4 px-3 text-lp-grey-green"
      >
        <Swiper
          :modules="[SwiperThumbs, SwiperEffectFade]"
          @swiper="setThumbsSwiper"
          effect="fade"
          :crossFade="true"
        >
          <SwiperSlide v-for="slide in slides" class="bg-lp-camel">
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
  :deep(&-wrapper) {
    height: 440px;
  }
}
</style>
<script setup>
const slides = [
  {
    src: "/home.jpg",
    title: "Cuisine",
  },
  {
    src: "/home.jpg",
    title: "Salon",
  },
];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
setThumbsSwiper();
</script>
