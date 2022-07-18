import { Service } from '@/@types'

export interface State {
  services: Service[];
}

export const state: State = {
  services: [],
}
