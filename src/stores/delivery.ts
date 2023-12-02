import {defineStore} from 'pinia';
import Delivery from './../repositories/delivery.ts'
export const useDeliveryStore = defineStore('delivery', {
    state: () => ({
        availableDelivery: [],
    }),
    getters: {
        getAvailableDelivery: (state) => state,
    },
    actions: {
        async fetchAvailableDelivery(query: string) {
            const api = new Delivery()
            const response = await api.getAvailableDelivery(query)
            this.availableDelivery = response
        },
    },
})
