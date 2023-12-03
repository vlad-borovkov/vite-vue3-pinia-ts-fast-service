<template>
  <button
      class="absolute right-0 top-0 flex justify-center items-center text-white rounded-full z-10"
      :class="buttonClass"
      @click="buttonEmits()"
  >
    {{ variant === 'enter' ? 'enter' : 'X' }}
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  name: "SearchButton",
  props: {
    variant: {
      required: true,
      default: 'enter'
    },
  },
  setup(props, {emit}) {

    const buttonClass = computed(() => ({
      'w-fit h-full px-4 text-base leading-none font-bold bg-blueGradient uppercase lg:text-2xl lg:px-10': props.variant === 'enter',
      'w-[62px] h-full text-base lg:text-2xl bg-redGradient': props.variant === 'delete',
    }));

    const buttonEmits = () => {
      emit(props.variant);
    };

    return {
      buttonClass,
      buttonEmits
    }
  },
}
</script>

<style scoped>

</style>
