import React from 'react'
import { View, TextInput, TextInputProps, ViewStyle } from 'react-native'
import styles from './styles'

interface Props extends TextInputProps {
  containerStyle?: ViewStyle
}

export const Input: React.FC<Props> = ({ containerStyle, style, ...rest }) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <TextInput style={[styles.textInput, style]} {...rest} />
    </View>
  )
}
