<template>
  <div
    class="relative pt-7 pb-14 px-3 bg-lp-green-light flex flex-col items-center lg:hidden"
    id="contact"
  >
    <div>
      <nuxt-icon name="key" class="icon" />
    </div>
    <h2
      class="title text-center leading-none"
      v-html="$t('request_reservation')"
    ></h2>
    <div class="mx-3">
      <a class="button primary mailto" href="mailto:lapausa.liguria@gmail.com">
        lapausa.liguria@gmail.com
      </a>
    </div>
    <div
      class="bg-lp-green-light rounded-full absolute inset-x-0 -bottom-[73px] m-auto w-[123px] h-[145px] flex items-center justify-center"
    >
      <img src="~/assets/images/logo.png" alt="La Pausa" class="h-[99px]" />
    </div>
  </div>
  <div class="bg-lp-green pt-14 pb-3 text-center text-white">
    <span class="subtitle">{{ $t("contact") }}</span>
    <div class="mt-3">
      WhatsApp – Phone<br />
      <a href="tel:+33 6 87 37 59 09">+33 6 87 37 59 09</a> /
      <a href="tel:+39 353 330 6376">+39 353 330 6376</a>
    </div>
    <a
      href="https://www.instagram.com/l.a.pausa/?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
      target="_blank"
      class="flex items-center justify-center text-lp-camel gap-1 mt-2"
      ><nuxt-icon name="instagram" /> @l.a.pausa
    </a>
    <div class="mt-6 pt-3 mx-3 border-t border-white text-center text-10">
      © 2024 <a href="mailto:hello@cilys.fr">Cilys</a>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.icon {
  :deep(svg) {
    @apply w-2_5 h-2_5;
  }
}
.mailto {
  @apply px-2 py-1_5 underline;
}
</style>
<script setup lang="ts"></script>
