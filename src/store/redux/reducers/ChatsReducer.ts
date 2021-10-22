import { Action } from '../../types'

declare type State = {
  chatNotif?: number
}

const INITIAL_STATE: State = {}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}
