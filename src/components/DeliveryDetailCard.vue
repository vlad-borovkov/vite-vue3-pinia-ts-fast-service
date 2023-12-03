<template>
  <button
      @click="toggleCard()"
      :disabled="!available"
      :class="{'shadow-input': isActive}"
      class="w-full flex flex-row self-stretch bg-white border border-[#E9F0EB] rounded-[22px] cursor-pointer
      overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed h-[172px]"
  >
    <div class="w-full h-full flex flex-row px-6 py-4 lg:px-8 lg:py-6">
      <div class="w-1/2 flex flex-col items-start justify-between h-[150px] lg:h-full">
        <div class="w-full flex flex-col items-start gap-y-1 text-mainDark text-2xl capitalize font-bold lg:text-4xl">
          {{ $props.type }}
          <span v-if="!available"
                class="text-start text-mainDark text-opacity-20 text-sm font-normal hyphens-auto lg:text-2xl capitalize-none">
            Not available in that city</span>
        </div>
        <span class="mb-[10px] text-[#78A1BB] text-3xl font-bold lg:text-5xl lg:mt-auto">{{ price }}$</span>
      </div>
      <img
          v-if="type === 'pickup'"
          src="@/assets/images/box_point.jpg"
          class="w-[90px] ml-auto xl:w-[110px] object-contain" />
      <img
          v-else-if="type === 'courier'"
          src="@/assets/images/small_car.jpg"
          class="w-[90px] ml-auto xl:w-[110px] object-contain" />
      <img
          v-else-if="type === 'post'"
          src="@/assets/images/post_and_box.jpg"
          class="w-[90px] ml-auto xl:w-[110px] object-contain" />
    </div>
    <div v-if="isActive && available"
         class="w-[16%] min-h-[160px] h-full flex justify-center items-center bg-activeGradient">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#fff"
          viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
      </svg>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "DeliveryDetailCard",
  props: {
    type: String,
    available: Boolean,
    price: Number,
    isActive: Boolean,
  },
  setup(props, {emit}) {
    const toggleCard = () => {
      emit('toggle-active');
    };
    return {
      toggleCard,
      props
    }
  }
}
</script>

<style scoped>
.capitalize-none {
  text-transform: none;
}
</style>
