<template>
  <main class="grid grid-areas grid-areas-mobile">
    <SearchCities/>
    <CardList/>
    <div class="block lg:hidden">
      <Footer/>
    </div>
  </main>
</template>

<script lang="ts">
import SearchCities from "@/components/SearchCities.vue";
import CardList from "@/components/CardList.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SearchDelivery",
  components: {
    SearchCities,
    CardList,
    Footer
  },
}

</script>

<style scoped>
.grid-areas {
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "search list";
  }
}

.grid-areas-mobile {
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:"search" "list";
    grid-row-gap: 30px;
  }
}
</style>
