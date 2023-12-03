import {defineStore} from 'pinia';
import Delivery from './../repositories/delivery.ts'
import {IAvailableDelivery, IAvailableDeliveryID} from "@/types/DTO/availableDelivery.ts";
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
            const withIDs = response.map((item: IAvailableDelivery):IAvailableDeliveryID =>
            {
                return {
                    ...item,
                    id: Math.random()
                }
            })
            this.availableDelivery = withIDs
        },
    },
})
