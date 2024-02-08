<template>
  <header
    class="flex items-center justify-between bg-lp-green-light px-4 h-[75px] relative sticky top-0 z-50 lg:flex-row-reverse"
    :class="{ 'sticky-header': y >= 50 }"
  >
    <select
      @change="setLocale($event.target.value)"
      class="bg-lp-green-light text-12"
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
    <transition>
      <img
        src="~/assets/images/logo.png"
        alt="La Pausa"
        v-show="!menu"
        class="logo transition-all absolute bg-lp-green-light rounded-full mx-auto inset-x-0 top-0 mt-1 p-1 h-[120px]"
        @click="y = 0"
      />
    </transition>
    <nuxt-icon
      class="lg:hidden"
      :name="!menu ? 'menu' : 'cross'"
      @click="menu = !menu"
    />
    <transition name="slidedown">
      <nav
        v-show="menu"
        class="w-full h-screen bg-lp-green-light z-50 fixed lg:static lg:w-auto lg:h-auto lg:z-auto inset-0 top-[75px] lg:!block"
      >
        <ul class="p-4">
          <li>
            <a href="#about-us" @click="menu = false">{{ $t("about_us") }}</a>
          </li>
          <li>
            <a href="#rates" @click="menu = false">{{
              $t("rates_and_conditions")
            }}</a>
          </li>
          <li>
            <a href="#activities" @click="menu = false">{{
              $t("activities_and_services")
            }}</a>
          </li>
          <li>
            <a href="#access" @click="menu = false">{{ $t("access") }}</a>
          </li>
          <li>
            <a href="#contact" @click="menu = false">{{ $t("contact") }}</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater("lg");

const { locale, locales, setLocale } = useI18n();
const menu = ref(isDesktop || false);
const { y } = useWindowScroll({ behavior: "smooth" });
useHead({
  bodyAttrs: {
    class: computed(() => (menu.value ? "overflow-hidden" : "")),
  },
});
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
    @apply lg:flex;
    li {
      @apply text-25 border-b pb-2_5 mb-2_5 text-center border-lp-grey-blue lg:text-18 lg:border-0;
      &:last-child {
        @apply border-0;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 1s;
}

.v-enter-from,
.v-leave-to {
  transition: opacity 0s ease;
  opacity: 0;
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 1s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 100dvh;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
