import { IAvailableDelivery } from '../types/DTO/availableDelivery'

export interface IDeliveryRepository{
    getAvailableDelivery(query: string): Promise<IAvailableDelivery[]>
}

const baseUrl = import.meta.env.VITE_BASE_URL

export default class Delivery implements IDeliveryRepository {
    private BASE_URL: string;

    constructor() {
        this.BASE_URL = baseUrl as string;
    }
    async getAvailableDelivery(query: string): Promise<IAvailableDelivery[]> {
        const  data  = await fetch(`${this.BASE_URL}/delivery/check?search=${query}`)
        const response = await data.json();
        return response as IAvailableDelivery[]
    }
}
