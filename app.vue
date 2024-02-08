<template>
  <div>
    <Header />
    <div class="pb-[70px]">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  robots: "noindex, nofollow",
  themeColor: "#B6B9A2",
});
useHead({});
</script>
