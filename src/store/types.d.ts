import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type User = {
  id: string
  fullName: string
  email: String
  age: number
  phoneNumber?: number
  address: string
  userType: 'admin' | 'respondent' | 'consumer'
  online: boolean
  gender?: string
  department?: 'medical' | 'police' | 'fire' | 'disaster' | null
  location?: {
    long: string
    lat: string
  }
  profilePic?: string
}

export declare type Action = {
  type: 'TOGGLE_LOGGED_IN' | 'SET_USER' | 'UPDATE_USER' | 'RESET_USER'
  payload?: User | boolean
}
