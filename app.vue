<template>
  <NuxtLayout>
    <Header />
    <div class="pb-[70px] lg:pb-0">
      <NuxtPage />
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  themeColor: "#B6B9A2",
});
useHead({});
</script>
