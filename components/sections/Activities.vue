<template>
  <div class="py-6 px-3 bg-white">
    <h3 class="subtitle">{{ $t("activities_and_services") }}</h3>
    <h2 class="title">{{ $t("activities") }}</h2>
    <p class="mb-4">{{ $t("activities_description") }}</p>
    <table class="table-fixed w-full mb-6">
      <thead>
        <tr>
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
      <tbody>
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
    @apply first:w-1/3 w-1/5;
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
    @apply text-center text-lp-grey py-0_5;
  }
}
</style>
