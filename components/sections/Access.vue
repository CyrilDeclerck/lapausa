<template>
  <div class="py-6 px-3" id="access">
    <h3 class="subtitle">{{ $t("access") }}</h3>
    <h2 class="title mb-3">{{ $t("to_join_us") }}</h2>
    <iframe
      class="w-full aspect-video mb-6"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.7525555652146!2d9.35885247690282!3d44.315037209373635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4980731bf4ecd%3A0x134c31f895a6f3d3!2sVia%20Madonna%20della%20Neve%2C%2016033%20Lavagna%20GE%2C%20Italie!5e0!3m2!1sfr!2sfr!4v1707160594849!5m2!1sfr!2sfr"
      width="360"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
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
