<template>
  <div v-if="isVisible"
       class="grid-area-list bg-secondBg rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px]">
    <div class="fixed block w-full h-full">
          <img
          src="./../assets/images/car_on_road.png"
          class="absolute bottom-0 w-[50%] left-0"
          >
    </div>
  </div>
  <div v-else class="w-full h-full flex flex-col gap-y-5">
    <DeliveryDetailCard
        v-for="(info, idx) in deliveryInfo"
        :key="idx"
        :type="info.type"
        :available="info.available"
        :price="info.price"
        :isActive="idx === activeCardIndex"
        @toggle-active="toggleActiveCard(idx)"
        class="flex-1"
    />
  </div>
</template>

<script lang="ts">
import DeliveryDetailCard from './DeliveryDetailCard.vue'
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// todo: import delivery from 'repositories'
export default {
  name: "CardList",
  components: {
    DeliveryDetailCard,
  },
  setup() {
    const route = useRoute();
    const routeData = computed(() => {
      return route.query.search;
    });
    const isVisible = ref<boolean>(true);
    const deliveryInfo = ref();
    const activeCardIndex = ref();
    const handleRouteChange = () => {
      setTimeout(() => {
        isVisible.value = !routeData.value;
      }, 400);
    };
    watch(routeData, handleRouteChange);
    watch(routeData, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        getDeliveryInfo(newValue as string);
      }
    });
    onBeforeMount(() => {
      handleRouteChange();
      // getDeliveryInfo(routeData.value as string);
    });

    const toggleActiveCard = (index: number) => {
      activeCardIndex.value = index;
    };

    // const getDeliveryInfo = (search: string) => {
    // todo добавить вызов с api
    // };


    return {
      route,
      isVisible,
      deliveryInfo,
      activeCardIndex,
      handleRouteChange,
      toggleActiveCard
    }
  }
}
</script>

<style scoped>
.grid-area-list {
  grid-area: list;
}
.car-animation {
  animation: moveCar 1s linear infinite;
}

@keyframes moveCar {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateY(20px);
  }
  70% {
    transform: translateY(10px);
  }
}
</style>
