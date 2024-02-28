<template>
  <div
    class="py-6 px-3 bg-white lg:pr-12 xl:pl-14 xl:pb-8 xl:pt-9 lg:max-h-[827px]"
    id="activities"
  >
    <h3 class="subtitle lg:mb-2_5">{{ $t("activities_and_services") }}</h3>
    <h2 class="title">{{ $t("activities") }}</h2>
    <p class="mb-4 text-20 lg:text-23 lg:max-w-[493px]">
      {{ $t("activities_description") }}
    </p>
    <table class="table-fixed w-full mb-6 lg:mb-0">
      <thead>
        <tr class="lg:text-17">
          <th></th>
          <th>
            <span>
              <nuxt-icon name="walk" />
              {{ $t("a_feet") }}
            </span>
          </th>
          <th>
            <span>
              <nuxt-icon name="car" />
              {{ $t("car") }}
            </span>
          </th>
          <th>
            <span>
              <nuxt-icon name="train" />
              {{ $t("train") }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="lg:text-18">
        <tr v-for="activity in activities">
          <th>{{ $t(activity.name) }}</th>
          <td>
            {{
              activity.walk === "/" ? activity.walk : activity.walk + " min."
            }}
          </td>
          <td>
            {{ activity.car === "/" ? activity.car : activity.car + " min." }}
          </td>
          <td>
            {{
              activity.train === "/" ? activity.train : activity.train + " min."
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const activities = [
  {
    name: "Portofino",
    walk: "/",
    car: "40",
    train: "30",
  },
  {
    name: "San Fruttuoso",
    walk: "/",
    car: "/",
    train: "35",
  },
  {
    name: "Santa Margherita Rappallo",
    walk: "/",
    car: "30",
    train: "20",
  },
  {
    name: "Cinque Terre",
    walk: "/",
    car: "50",
    train: "35",
  },
  {
    name: "Camogli",
    walk: "/",
    car: "20",
    train: "20",
  },
  {
    name: "Chiavari",
    walk: "/",
    car: "10",
    train: "5",
  },
  {
    name: "Sestri",
    walk: "/",
    car: "15",
    train: "10",
  },
  {
    name: "Genova",
    walk: "/",
    car: "50",
    train: "30",
  },
  {
    name: "Lavagna",
    walk: "15",
    car: "5",
    train: "/",
  },
];
</script>

<style scoped lang="postcss">
thead {
  th {
    @apply first:w-1/3 w-1/5 lg:first:w-2/5;
    > span {
      @apply flex items-center justify-center gap-0_5;
    }
  }
}
table {
  tr {
    @apply border-b border-lp-camel text-left;
  }
  td {
    @apply text-center text-lp-grey py-0_5 lg:py-[2px];
  }
}
</style>
