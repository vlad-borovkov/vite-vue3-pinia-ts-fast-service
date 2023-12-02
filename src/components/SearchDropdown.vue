<template>
  <div :class="{'pb-4 rounded-[30px] border-l border-r border-b shadow-input': listVisible}" class="bg-white absolute w-full custom-radius">
    <div class="relative w-full h-full">
      <input
          id="searchInput"
          type="text"
          placeholder="Enter name of the city"
          v-model="inputData"
          @focus="showAllCities = true"
          @input="handleInput"
          autocomplete=""
          :class="{
          'pr-[34%] border-none': listVisible,
          'border-[red]': buttonType === 'delete'
        }"
          class="w-full py-4 px-9 text-mainDark text-2xl leading-none font-bold border border-[#E9F0EB] outline-none rounded-full placeholder:text-lg placeholder:text-[#D9E4DC] placeholder:font-normal caret-blue-500"
      />
      <SearchButton
          :variant="buttonType"
          @enter="sendQuery()"
          @delete="inputData = ''"
      />
    </div>
    <span class="inline-block py-1 text-[red]">{{ error ? error : '' }}</span>

      <ul class="max-h-[400px] h-full w-full px-4 z-30 overflow-y-auto overflow-custom">
        <li
            @click="inputData = city"
            v-for="(city, idx) in (showAllCities ? popularCities : matchingCities)"
            :key="idx"
            class="flex flex-row items-center justify-between px-5 py-2.5 text-mainDark text-xl border-[#E9F0EB] border-b cursor-pointer last-of-type:border-none hover:bg-black hover:bg-opacity-10"
        >
          {{ city }}
          <span
              v-if="availableCities.includes(city)"
              class="text-lightGray text-base"
          >
            available
          </span>
        </li>
      </ul>

  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import SearchButton from "@/components/SearchButton.vue";
import { popularCities, availableCities } from './../assets/mock/cities';
export default {
  name: "SearchDropdown",
  components: {
    SearchButton
  },
  setup() {
    const error = ref<string>('');
    const inputData = ref<string>('');
    const matchingCities = ref<string[]>([]);
    const buttonType = ref<string>('enter')
    const showAllCities = ref<boolean>(false);
    const router = useRouter();

    watch(() => inputData.value, (newValue) => {
      matchingCities.value = popularCities.filter(city => city.toLowerCase().includes(newValue.toLowerCase()));
      buttonType.value = matchingCities.value.length > 0 ? 'enter' : 'delete';
    });

    watch(inputData, (newInputData) => {
      if (!newInputData) {
        router.replace({ query: {} });
      }
    });

    onMounted(() => {
      document.addEventListener("click", closeDropdown);
    });

    const listVisible = computed(() => {
      return showAllCities.value || (inputData.value.length > 0 && matchingCities.value.length > 0);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", closeDropdown);
    });

    // методы компонента
    const sendQuery = () => {
      const formattedData = inputData.value.trim().replace(/ /g, '').toLowerCase();

      if (availableCities.includes(inputData.value)) {
        error.value = '';

        router.push({
          name: '',
          query: { search: formattedData },
        });
      } else {
        error.value = 'We didn’t found such city. Please check spelling'
      }
    };

    const closeDropdown = (e: MouseEvent) => {
      if (!document?.getElementById("searchInput")?.contains(e.target as Node)) {
        showAllCities.value = false
      }
    };

    const handleInput = () => {
      error.value = '';
      inputData.value.length ? showAllCities.value = false : showAllCities.value = true;
    };
    return {
      error,
      inputData,
      matchingCities,
      buttonType,
      showAllCities,
      handleInput,
      closeDropdown,
      sendQuery,
      listVisible,
      popularCities,
      availableCities
    }
  },

}
</script>

<style scoped>

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #65B3E4;
  border-radius: 4px;
}
/* Стилизация полосы прокрутки для Firefox */
scrollbar-width: thin;
scrollbar-color: #4a5568 transparent;

/* Стилизация полосы прокрутки для IE и Edge */
/* В старых версиях Edge используйте -ms-overflow-style */
* {
  scrollbar-face-color: #4a5568;
  scrollbar-shadow-color: transparent;
  scrollbar-highlight-color: transparent;
  scrollbar-3dlight-color: transparent;
  scrollbar-darkshadow-color: transparent;
  scrollbar-arrow-color: transparent;
}

</style>
