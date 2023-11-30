import { ServicesType } from '../../services/'

// TODO: найти где типизируется и дополнить Vue
declare module '@vue/runtime-core/dist/runtime-core' {
  interface AppContext {
    $services: ServicesType
  }
}

declare module 'pinia/dist/pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: ServicesType
  }
}
