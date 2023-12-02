import { IAvailableDelivery } from '../types/DTO/availableDelivery'

export interface IDeliveryRepository{
    getAvailableDelivery(query: string): Promise<IAvailableDelivery[]>
}

export default class Delivery implements IDeliveryRepository {
    private BASE_URL: string;

    constructor() {
        this.BASE_URL = 'https://test-frontend.stage.mechta.market'
    }
    async getAvailableDelivery(query: string): Promise<IAvailableDelivery[]> {
        const  data  = await fetch(`${this.BASE_URL}/delivery/check?search=${query}`)
        const response = await data.json();
        return response as IAvailableDelivery[]
    }
}
