import { Action, User } from '../../types'

declare type State = {
  user?: User
  loggedIn?: boolean
}

const INITIAL_STATE: State = {
  user: {
    id: 'Joseph Azores',
    fullName: 'Joseph Azores',
    email: 'Joseph Azores',
    activeStatus: true,
    age: 23,
    address: 'Legazpi',
  },
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return {
        ...state,
        loggedIn: !state.loggedIn,
      }
    default:
      return state
  }
}
