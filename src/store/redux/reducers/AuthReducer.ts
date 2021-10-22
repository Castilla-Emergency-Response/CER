import { Action, User } from '../../types'

declare type State = {
  user?: User
  loggedIn?: boolean
}

const INITIAL_STATE: State = {}

export default (state = INITIAL_STATE, action: Action) => {
  let newState: State = state
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      newState = {
        ...state,
        loggedIn: !state.loggedIn,
      }
      return newState
    case 'SET_USER':
      newState = {
        ...state,
        user: action.payload,
      }
      return newState
    case 'RESET_USER':
      delete newState.user
      return newState
    default:
      return state
  }
}
