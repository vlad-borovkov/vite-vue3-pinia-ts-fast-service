<template>
  <div
      v-click-outside="onClickOutside"
      :class="{'pb-4 rounded-[30px] border-l border-r border-b shadow-input': listVisible}"
      class="bg-white absolute w-full custom-radius">
    <div class="relative w-full h-full">
      <input
          id="searchInput"
          type="text"
          placeholder="Enter name of the city"
          v-model="inputData"
          @focus="showAllCities = true"
          @input="handleInput"
          @click="error = '';"
          :class="{
          'pr-[34%] border-none': listVisible,
          'border-[red]': buttonType === 'delete'
        }"
          class="w-full py-4 px-3 text-mainDark text-[16px] leading-none font-bold border border-[#E9F0EB] outline-none
          rounded-full placeholder:text-[16px] placeholder:text-[#D9E4DC] placeholder:font-normal caret-blue-500 h-[50px]
          lg:h-[63px] lg:text-2xl lg:placeholder:text-2xl lg:px-7"
      />
      <SearchButton
          :variant="buttonType"
          @enter="sendQuery()"
          @delete="inputData = ''"
      />
    </div>
      <ul class="max-h-[400px] h-full w-full px-2 z-30 overflow-y-auto overflow-custom lg:px-4">
        <li
            v-for="(city, idx) in (showAllCities ? popularCities : matchingCities)"
            :key="idx"
            @click="() => {
              inputData = city;
              showAllCities = false;
            }"
            class="flex flex-row items-center justify-between px-1 py-2.5 text-mainDark text-[16px] border-[#E9F0EB]
            border-b cursor-pointer last-of-type:border-none hover:bg-black hover:bg-opacity-10 lg:text-xl lg:px-3"
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
  <span class="inline-block py-1 text-[red] absolute top-[60px] left-[25px]">{{ error ? error : '' }}</span>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { computed, ref, watch } from 'vue';
import SearchButton from "@/components/SearchButton.vue";
import { popularCities, availableCities } from './../assets/mock/cities';
import vClickOutside from 'click-outside-vue3'
export default {
  name: "SearchDropdown",
  components: {
    SearchButton
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  setup() {
    const error = ref<string>('');
    const inputData = ref<string>('');
    const matchingCities = ref<string[]>([]);
    const buttonType = ref<string>('enter')
    const showAllCities = ref<boolean>(false);
    const router = useRouter();

    watch(() => inputData.value, (newValue) => {
      matchingCities.value = popularCities.filter(city => city.toLowerCase().startsWith(newValue.toLowerCase()) && newValue !== '');
      buttonType.value = matchingCities.value.length > 0 ? 'enter' : 'delete';
    });

    watch(inputData, (newInputData) => {
      if (!newInputData) {
        router.replace({ query: {} });
      }
    });

    const listVisible = computed(() => {
      return showAllCities.value || (inputData.value.length > 0 && matchingCities.value.length > 0);
    });

    // методы компонента
    const onClickOutside = () => {
      showAllCities.value = false
    };
    const sendQuery = () => {
      const formattedData = inputData.value.trim().replace(/ /g, '').toLowerCase();
      if (availableCities.includes(inputData.value)) {
        error.value = '';
        router.push({
          name: '',
          query: { search: formattedData },
        });
        matchingCities.value = [];
      } else {
        error.value = 'We didn’t found such city. Please check spelling'
        matchingCities.value = [];
        router.push('/')
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
      sendQuery,
      listVisible,
      popularCities,
      availableCities,
      onClickOutside,
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
