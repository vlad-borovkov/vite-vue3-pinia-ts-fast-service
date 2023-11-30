import { Plugin } from '@vue/runtime-core/dist/runtime-core'
import services, { servicesType } from 'services/index'

/**
 *
 * @param {Context} ctx
 * @param inject
 */
const plugin: Plugin = (ctx, inject) => {
  const s: servicesType = services(ctx)

  inject('services', s)
}

export default plugin
