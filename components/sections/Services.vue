<template>
  <div class="py-6 px-3 bg-lp-camel lg:pt-12 lg:px-10">
    <h2 class="title lg:mb-6">{{ $t("services") }}</h2>
    <div class="content" v-html="$t('services_description')"></div>
  </div>
</template>

<style scoped lang="postcss">
.content {
  @apply text-20 lg:text-23;
  :deep(p) {
    @apply mb-1;
  }
  :deep(ul) {
    @apply list-disc list-inside ml-2 lg:mb-3;
  }
}
</style>
