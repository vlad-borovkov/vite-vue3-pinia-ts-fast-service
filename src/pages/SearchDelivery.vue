<template>
  <main class="grid grid-areas grid-areas-mobile">
    <SearchCities/>
    <CardList/>
  </main>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import SearchCities from "@/components/SearchCities.vue";
import CardList from "@/components/CardList.vue";
export default {
  name: "SearchDelivery",
  components: {
    SearchCities,
    CardList
  },
}

</script>

<style scoped>
.grid-areas {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "search list";
}

.grid-areas-mobile {
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "search"
      "list";
  }
}
</style>
