import { GetterTree } from 'vuex'

import { RootState } from '@/store'
import { State } from './state'
import { Service } from '@/@types'

export type Getters = {
  services(state: State): Service[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  services: (state) => {
    return state.services
  },
}
