import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../store/types'

export const SignIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_LOGGED_IN' })}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}
