import { IHttpClient } from '../services/HttpClient'
import { IAvailableDelivery } from '../types/DTO/availableDelivery'

export interface IDeliveryRepository{
    getAvailableDelivery(query: string): Promise<IAvailableDelivery[]>
}

export default class Delivery implements IDeliveryRepository {
    constructor(private $http: IHttpClient) {}

    async getAvailableDelivery(query: string): Promise<IAvailableDelivery[]> {
        const { data } = await this.$http.get(`/delivery/check?${query}`)
        return data as IAvailableDelivery[]
    }
}
