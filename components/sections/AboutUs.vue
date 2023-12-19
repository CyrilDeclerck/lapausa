<template>
  <div class="py-6 px-3">
    <h2>{{ $t("about_us") }}</h2>
    <p v-html="$t('about_us_first_part')"></p>
    <p v-html="$t('about_us_second_part')"></p>
    <span class="italic underline cursor-pointer"
      >{{ $t("show_more_link") }} ></span
    >
  </div>
</template>

<style lang="postcss" scoped>
p {
  @apply text-20;
}
</style>
