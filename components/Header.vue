<template>
  <header
    class="flex items-center justify-between bg-lp-camel px-4 h-[75px] relative sticky top-0 z-50"
    :class="{ 'sticky-header': y >= 50 }"
  >
    <select
      @change="setLocale($event.target.value)"
      class="bg-transparent text-12"
    >
      <option
        v-for="localeAvailable in locales"
        :key="localeAvailable.code"
        :value="localeAvailable.code"
        :selected="locale === localeAvailable.code"
      >
        {{ localeAvailable.name }}
      </option>
    </select>
    <img
      src="~/assets/images/logo.svg"
      alt="La Pausa"
      v-show="!menu"
      height="120"
      class="logo transition-all absolute bg-lp-camel rounded-full mx-auto inset-x-0 -bottom-full mt-1 p-1"
    />
    <img
      src="~/assets/images/menu.svg"
      alt="navigation"
      @click="menu = !menu"
    />
  </header>
  <nav v-show="menu" class="w-full h-screen bg-lp-camel p-4 z-50 fixed">
    <ul>
      <li>{{ $t("about_us") }}</li>
      <li>{{ $t("rates_and_conditions") }}</li>
      <li>{{ $t("activities_and_services") }}</li>
      <li>{{ $t("access") }}</li>
      <li>{{ $t("contact") }}</li>
    </ul>
  </nav>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
const menu = ref(false);
const { y } = useWindowScroll({ behavior: "smooth" });
</script>

<style lang="postcss" scoped>
.sticky-header {
  @apply h-[50px];
  .logo {
    @apply h-[82px] top-0 mt-0;
  }
}

nav {
  ul {
    li {
      @apply text-25 border-b pb-2_5 mb-2_5 text-center border-lp-grey-blue;
      &:last-child {
        @apply border-0;
      }
    }
  }
}
</style>
