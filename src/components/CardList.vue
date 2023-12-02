<template>
  <div class="grid-area-list flex flex-col justify-center bg-secondBg rounded-tl-[40px]
  rounded-tr-[40px] h-[321px] lg:rounded-tr-[0px] lg:rounded-bl-[40px] lg:h-full">
    <div v-if="isVisible"
         class="w-full h-full flex lg:fixed lg:block">
          <img
          src="./../assets/images/car_on_road.png"
          class="object-contain align-middle lg:absolute lg:bottom-0 lg:w-[50%] lg:left-0"
          >
  </div>
  <div v-else class="w-[70%] h-[70%] flex flex-col gap-y-5 bg-secondBg lg:w-[70%] lg:h-[70%] lg:ml-[10%]">
      <DeliveryDetailCard
          v-for="(info, idx) in deliveryStore.availableDelivery"
          :key="idx"
          :type="info.type"
          :available="info.available"
          :price="info.price"
          :isActive="idx === activeCardIndex"
          @toggle-active="toggleActiveCard(idx)"
          class="flex-1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DeliveryDetailCard from './DeliveryDetailCard.vue'
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {useDeliveryStore} from "@/stores/delivery.ts";

export default {
  name: "CardList",
  components: {
    DeliveryDetailCard,
  },
  setup() {
    const route = useRoute();
    const deliveryStore = useDeliveryStore()

    const routeData = computed(() => {
      return route.query.search;
    });
    const isVisible = ref<boolean>(true);

    const activeCardIndex = ref();

    const handleRouteChange = () => {
      setTimeout(() => {
        isVisible.value = !routeData.value;
      }, 400);
    };
    watch(routeData, handleRouteChange);
    watch(routeData, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        deliveryStore.fetchAvailableDelivery(newValue as string);
      }
    });

    onBeforeMount(() => {
      handleRouteChange();
      deliveryStore.fetchAvailableDelivery(routeData.value as string)
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
      activeCardIndex,
      handleRouteChange,
      toggleActiveCard,
      deliveryStore
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
