import Delivery, { IDeliveryRepository } from './delivery';
import {AppContext} from 'vue'

export type RepositoriesType = {
    delivery: IDeliveryRepository
}

const repositories = (context: AppContext):RepositoriesType => ({
    delivery: new Delivery(context.$services.common.http)
})

export default repositories
