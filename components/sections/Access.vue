<template>
  <div class="py-6 px-3" id="access">
    <h3 class="subtitle">{{ $t("access") }}</h3>
    <h2 class="title mb-3">{{ $t("to_join_us") }}</h2>
    <div class="text-20">
      <div>
        <span class="mb-3 flex items-center gap-3">
          <nuxt-icon name="plane" />
          {{ $t("nearest_airports") }}
        </span>
        <ul class="list-disc list-inside">
          <li>{{ $t("airport1") }}</li>
          <li>{{ $t("airport2") }}</li>
          <li>{{ $t("airport3") }}</li>
        </ul>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3">
          <nuxt-icon name="train" />
          {{ $t("nearby_stations") }}
        </span>
        <ul class="list-disc list-inside">
          <li>{{ $t("station1") }}</li>
          <li>{{ $t("station2") }}</li>
        </ul>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3">
          <nuxt-icon name="taxi" />
          {{ $t("servizio_taxi") }}
        </span>
        <p class="mb-0">Davanti alla Stazione FS Lavagna</p>
        {{ $t("phone") }}
        <a href="tel:+390185392096" class="underline">+39 0185 392096</a>
      </div>
      <div class="mt-3">
        <span class="mb-3 flex items-center gap-3">
          <nuxt-icon name="marker" />
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
  @apply -indent-3 ml-3;
}
</style>
