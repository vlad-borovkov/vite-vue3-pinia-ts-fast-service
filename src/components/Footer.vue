<template>
  <footer class="flex flex-wrap justify-between gap-6 mt-[10px] mb-[10px] px-5 lg:px-0 lg:mt-[102px]">
    <div class="text-mainDark text-sm font-normal text-opacity-50">
      All rights reserved<br />
      Fast service {{ currentYear }}
    </div>
    <div class="w-fit flex flex-row items-center gap-x-2.5 select-none">
      <img src="@/assets/icons/visa_1.jpg" alt="Visa Card" class="w-10">
      <img src="@/assets/icons/master_card.jpg" alt="Master Card">
      <img src="@/assets/icons/maestro.png" alt="Maestro">
      <img src="@/assets/icons/processing.jpg" alt="Processing">
    </div>
  </footer>
</template>

<script>
import {useRouter} from "vue-router";
import {computed} from "vue";
export default {
  name: "Footer",
  setup() {
    const currentYear = computed(() => {
      return new Date().getFullYear();
    })
    return {
      currentYear
    }
  }
}
</script>

<style scoped>

</style>
