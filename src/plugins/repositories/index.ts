import { Plugin } from '@vue/runtime-core/dist/runtime-core'
import repositories, { RepositoriesType } from '../../repositories/index'
import {AppContext} from 'vue'
/**
 *
 * @param {AppContext} ctx
 * @param inject
 */
const Repositories: Plugin = (ctx:AppContext, inject) => {
  const r: RepositoriesType = repositories(ctx)

  inject('repositories', r)
}

export default Repositories
