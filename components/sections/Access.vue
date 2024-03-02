<template>
  <div class="py-6 px-3 lg:text-center lg:px-0" id="access">
    <h3 class="subtitle lg:mb-0">{{ $t("access") }}</h3>
    <h2 class="title mb-3 lg:mb-6">{{ $t("to_join_us") }}</h2>
    <iframe
      :title="$t('to_join_us')"
      class="w-full aspect-video mb-6 lg:max-w-[720px] lg:m-auto"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d713.6675515637423!2d9.364709269718107!3d44.31672995773784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDE5JzAwLjIiTiA5wrAyMSc1NS4zIkU!5e0!3m2!1sfr!2sfr!4v1709133248574!5m2!1sfr!2sfr"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div
      class="text-20 lg:grid lg:grid-cols-4 lg:items-baseline lg:justify-center lg:mt-6 lg:gap-3 lg:text-23 lg:text-left"
    >
      <div>
        <span class="mb-3 flex items-center gap-3 lg:text-30">
          <nuxt-icon name="plane" class="icon" />
          <span class="flex-1">{{ $t("nearest_airports") }}</span>
        </span>
        <ul class="list-disc list-inside">
          <li v-html="$t('airport1')"></li>
          <li v-html="$t('airport2')"></li>
          <li v-html="$t('airport3')"></li>
        </ul>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3 lg:text-30">
          <nuxt-icon name="train" class="icon" />
          {{ $t("nearby_stations") }}
        </span>
        <ul class="list-disc list-inside">
          <li v-html="$t('station1')"></li>
          <li v-html="$t('station2')"></li>
        </ul>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3 lg:text-30">
          <nuxt-icon name="taxi" class="icon" />
          {{ $t("servizio_taxi") }}
        </span>
        <p class="mb-0">Davanti alla Stazione <br />FS Lavagna</p>
        {{ $t("phone") }}
        <a href="tel:+390185392096" class="underline">+39 0185 392096</a>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3 lg:text-30">
          <nuxt-icon name="marker" class="icon" />
          {{ $t("address") }}
        </span>
        <p>
          La Pausa<br />
          via Madonna della neve<br />
          16033 LAVAGNA
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="postcss" scoped>
ul {
  @apply -indent-4 ml-4;
}
.icon {
  :deep(svg) {
    @apply w-2 h-2;
  }
}
</style>
