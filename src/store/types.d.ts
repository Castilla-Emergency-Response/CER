import { GeoPosition } from 'react-native-geolocation-service'
import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type department = 'medical' | 'police' | 'fire' | 'disaster'
export declare type userType = 'admin' | 'respondent' | 'consumer'

export declare type User = {
  id?: string
  fullName?: string
  email?: String
  age?: number
  phoneNumber?: number
  address?: string
  currentAddress?: string
  userType?: userType
  online?: boolean
  gender?: string
  department?: department | null
  position?: GeoPosition
  profilePic?: string
}

export declare type Action =
  | {
      type: 'TOGGLE_LOGGED_IN' | 'RESET_USER'
    }
  | {
      type: 'SET_USER' | 'UPDATE_USER'
      payload: User
    }
