<template>
  <header
    class="bg-lp-green-light px-4 h-[75px] relative sticky top-0 z-50 lg:pl-9 lg:pr-0"
    :class="{ 'sticky-header': y >= 50 }"
  >
    <div
      class="flex items-center justify-between lg:max-w-[1920px] lg:m-auto lg:flex-row-reverse h-full"
    >
      <div class="lg:flex lg:h-full">
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
        <a
          class="!hidden button primary uppercase min-w-[250px] lg:!flex lg:ml-6"
          href="mailto:lapausa.liguria@gmail.com"
        >
          <nuxt-icon name="key" />
          <span class="ml-1">{{ $t("book_button") }}</span>
        </a>
      </div>

      <transition>
        <img
          src="~/assets/images/logo.png"
          alt="La Pausa"
          v-show="!menu"
          class="logo transition-all absolute bg-lp-green-light rounded-full mx-auto inset-x-0 top-0 mt-1 p-1 h-[120px] lg:mt-0 lg:h-[123px]"
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
          :class="{ '!top-[50px]': y >= 50 }"
          class="w-full h-screen bg-lp-green-light z-50 fixed lg:static lg:w-auto lg:h-auto lg:z-auto inset-0 top-[75px] lg:!block lg:h-full"
        >
          <ul class="p-4 lg:p-0">
            <li>
              <NuxtLink to="#about-us" @click="menu = false">{{
                $t("about_us")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#rates" @click="menu = false">{{
                $t("rates_and_conditions")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#activities" @click="menu = false">{{
                $t("activities_and_services")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#access" @click="menu = false">{{
                $t("access")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact" @click="menu = false">{{
                $t("contact")
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater("lg");

const { locale, locales, setLocale } = useI18n();
const menu = ref(false);
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
    @apply lg:flex lg:gap-6 lg:items-center lg:h-full;
    li {
      @apply text-25 border-b pb-2_5 mb-2_5 text-center border-lp-grey-blue lg:text-18 lg:border-0 lg:mb-0 lg:pb-0 lg:h-full lg:flex lg:items-center;
      &:last-child {
        @apply border-0;
      }
      &:hover {
        @apply lg:relative lg:after:border-b lg:after:border-b-white lg:after:absolute lg:after:bottom-0 lg:after:w-full lg:after:h-[3px] lg:after:inset-x-0;
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
  transition: transform ease-in-out 0.5s;
}

.slidedown-enter-to,
.slidedown-leave-from {
  transform: translate(0, 0);
}

.slidedown-enter-from,
.slidedown-leave-to {
  transform: translateX(100%);
}
</style>
