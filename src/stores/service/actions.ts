import { ActionTree, ActionContext } from 'vuex'

import { RootState } from '@/store'
import { State } from './state'
import { Mutations } from './mutations'

import { ServiceActionTypes as ActionTypes } from './types/actions'
import { ServiceMutationTypes as MutationTypes } from './types/mutations'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {

}

export const actions: ActionTree<State, RootState> & Actions = {

}
