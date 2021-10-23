import React from 'react'
import { View } from 'react-native'
import { RequestAssistanceProps } from '../../../app/nav/types'

export const RequestAssistance: React.FC<RequestAssistanceProps> = ({
  route,
}) => {
  console.log('type', route.params.type)
  return <View></View>
}
