<template>
  <div class="grid-area-list flex flex-col justify-center items-center bg-secondBg rounded-tl-[40px]
  rounded-tr-[40px] h-full lg:rounded-tr-[0px] lg:rounded-bl-[40px] lg:h-full lg:items-baseline">
    <div v-if="isVisible"
         class="w-full h-full flex items-end justify-center">
          <img
          src="@/assets/images/car_on_road.png"
          class="object-contain w-[100%]"
          alt="Car on road"
          >
  </div>
  <div v-else class="w-[90%] h-[93%] flex flex-col gap-y-5 bg-secondBg lg:w-[55%] lg:h-[70%] lg:ml-[10%] lg:w-[70%] lg:h-[70%]">
      <DeliveryDetailCard
          v-for="info in deliveryStore.availableDelivery"
          :key="info.id"
          :type="info.type"
          :available="info.available"
          :price="info.price"
          :isActive="info.id === activeCardId"
          @toggle-active="toggleActiveCard(info.id)"
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

    const activeCardId = ref();

    const handleRouteChange = () => {
      setTimeout(() => {
        isVisible.value = !routeData.value;
      }, 400);
    };
    watch(routeData, handleRouteChange);
    watch(routeData, (newValue, oldValue) => {
      if (newValue !== oldValue && routeData.value !== undefined ) {
        deliveryStore.fetchAvailableDelivery(newValue as string);
      }
    });

    onBeforeMount(() => {
      handleRouteChange();
      if (routeData.value !== undefined ) {
        deliveryStore.fetchAvailableDelivery(routeData.value as string)
      }
    });

    const toggleActiveCard = (id: number) => {
      activeCardId.value = id;
    };

    return {
      route,
      isVisible,
      activeCardId,
      handleRouteChange,
      toggleActiveCard,
      deliveryStore,
      CarOnRoad
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
