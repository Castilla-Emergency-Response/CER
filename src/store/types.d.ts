import { store } from './index'

export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch

export declare type User = {
  id: string
  fullName: string
  email: string
  activeStatus: boolean
  age: number
  address: string
  gender?: string
  work?: string
  school?: string
  bio?: string
  profileImages?: string[]
  tags?: string[]
}

export declare type Action = {
  type: string
}
