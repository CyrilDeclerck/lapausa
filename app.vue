<template>
  <div>
    <Header />
    <div class="pb-[70px] lg:pb-0">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  robots: "index, follow",
  themeColor: "#B6B9A2",
});
useHead({});
</script>
