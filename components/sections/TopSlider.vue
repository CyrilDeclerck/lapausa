<template>
  <div class="relative">
    <h1 class="title">
      <span class="block text-50">{{ $t("la_pausa") }}</span>
      <span class="italic" v-html="$t('catch_phrase')"></span>
    </h1>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :pagination="true"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide>
        <img src="/home.jpg" class="max-w-none h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home.jpg" class="max-w-none h-full w-full object-cover" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="postcss">
.title {
  @apply w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-30 text-lp-white z-10 flex flex-col items-center text-center leading-none;
}
.swiper {
  height: calc(100vh - 145px);
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
<script setup lang="ts"></script>
