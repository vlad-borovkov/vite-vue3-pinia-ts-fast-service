import {defineStore} from 'pinia';
export const useDeliveryStore = defineStore('delivery', {
    state: () => ({
        availableDelivery: [],
    }),
    getters: {
        availableDelivery: (state) => state,
    },
    actions: {
        getAvailableDelivery(query: string) {
            // todo: прокинуть глобально в декларациях $repository и $axios
            const responce = this.$repositories
        },
    },
})
