import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { department } from '../../store/types'

declare type LandingStackParamList = {
  Home: undefined
  'Request Assistance': {
    type: department
  }
}

declare type LandingTabParamList = {
  Dashboard: undefined
  Chats: undefined
  Profile: undefined
}

export declare type RequestAssistanceProps = NativeStackScreenProps<
  LandingStackParamList,
  'Request Assistance'
>
