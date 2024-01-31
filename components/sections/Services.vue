<template>
  <div class="py-6 px-3 bg-lp-camel">
    <h2 class="title">{{ $t("services") }}</h2>
    <div class="content" v-html="$t('services_description')"></div>
  </div>
</template>

<style scoped lang="postcss">
.content {
  @apply text-20;
  :deep(ul) {
    @apply list-disc list-inside ml-2;
  }
}
</style>
