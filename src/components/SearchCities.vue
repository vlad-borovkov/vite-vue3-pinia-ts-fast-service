<template>
  <div class="grid-area-search flex flex-wrap flex-col content-end">
    <div class="mr-[15%] w-[55%]">
      <Header/>

      <div class="flex flex-col">
        <h1 class="text-mainDark text-4xl font-bold mt-[57px] lg:text-5xl lg:mt-[78px]">
          Delivery cost
        </h1>
        <span class="text-base text-lightGray font-normal mt-[15px] lg:text-2xl lg:mt-[20px]">
        Enter name of the city to count delivery cost
      </span>
      </div>

      <div class="w-full mt-[80px] relative z-10">
        <SearchDropdown />
      </div>

      <div class="pt-[155px] flex flex-col gap-y-5 lg:pt-[160px]">
        <p class="text-base text-mainDark font-normal select-none lg:text-2xl">
          Most popular cities
        </p>
        <div class="grid grid-cols-2 gap-x-3 lg:gap-x-20">
          <div class="border-[#E9F0EB] border-b" v-for="(city, idx) in popularCities" :key="idx">
            <span class="inline-block py-4 px-4 text-lightGray text-sm lg:px-5 lg:text-xl">{{ city }}</span>
          </div>
        </div>
      </div>
      <div class="hidden-mobile">
        <Footer/>
      </div>

    </div>
  </div>
</template>

<script>
import {popularCities} from "@/assets/mock/cities.ts";
import SearchDropdown from "@/components/SearchDropdown.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SearchCities",
  components: {
    Footer,
    Header,
    SearchDropdown
  },
  setup() {
    return {
      popularCities
    }
  },

}
</script>

<style scoped>
.hidden-mobile {
  @media (max-width: 1024px) {
    display: none;
  }
}
.grid-area-search {
  grid-area: search;
}
</style>
