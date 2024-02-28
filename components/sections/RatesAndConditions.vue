<template>
  <div
    class="py-6 px-3 lg:max-w-[550px] lg:justify-self-end lg:pt-3"
    id="rates"
  >
    <h3 class="subtitle">{{ $t("rates_and_conditions") }}</h3>
    <div>
      <h2 class="title">{{ $t("rates") }}</h2>
      <div v-for="rate in rates" class="grid grid-cols-2 mb-1_5 max-w-[420px]">
        <div class="case bg-lp-green-light">
          <span class="text-25 italic lg:text-30">{{ $t(rate.season) }}</span>
          <span class="text-13 lg:text-18">{{ $t(rate.period) }}</span>
        </div>
        <div class="case bg-white">
          <span class="text-25 lg:text-30">{{ rate.price + "€" }}</span>
          <span class="text-15 lg:text-18">{{ $t("a_night") }}</span>
        </div>
      </div>
    </div>
    <div>
      <h2 class="title mt-6">{{ $t("conditions") }}</h2>
      <ul class="list-disc list-inside max-w-[420px]">
        <li>{{ $t("conditions_1") }}</li>
        <li>{{ $t("conditions_2") }}</li>
        <li>{{ $t("conditions_3") }}</li>
        <li>{{ $t("conditions_4") }}</li>
        <li>{{ $t("conditions_5") }}</li>
        <li>
          {{ $t("conditions_6") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const rates = [
  {
    season: "high_season",
    period: "july_and_august",
    price: 170,
  },
  {
    season: "mid_season",
    period: "may_june_september",
    price: 150,
  },
  {
    season: "low_season",
    period: "october_to_april",
    price: 135,
  },
];
</script>

<style lang="postcss" scoped>
.case {
  @apply flex flex-col p-1_5 text-center leading-none;
}
ul {
  @apply -indent-3 ml-3;
  li {
    @apply text-20 lg:text-23;
  }
}
</style>
