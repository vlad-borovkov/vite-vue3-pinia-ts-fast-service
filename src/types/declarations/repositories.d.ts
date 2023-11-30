import { RepositoriesType } from '../../repositories'
import {ServicesType} from "@/services";

declare module 'vue/dist/vue.global' {
  interface Vue {
    $repositories: RepositoriesType;
  }
}
declare module 'pinia/dist/pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface StoreDefinition<S> {
    $repositories: RepositoriesType;
  }
}
