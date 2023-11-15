<template>
  <div>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
      <NuxtLink :to="switchLocalePath('it')">Italian</NuxtLink>

      <NuxtPage />
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>
