import React from 'react'
import { View, TextInput, TextInputProps, ViewStyle } from 'react-native'
import { useTheme } from '../../provider'
import styles from './styles'

interface Props extends TextInputProps {
  containerStyle?: ViewStyle
}

export const Input: React.FC<Props> = ({
  containerStyle,
  style,
  placeholderTextColor,
  ...rest
}) => {
  const { theme } = useTheme()
  return (
    <View
      style={[
        styles.wrapper,
        { borderColor: theme?.colors.primary },
        containerStyle,
      ]}>
      <TextInput
        style={[styles.textInput, { color: theme?.colors.text }, style]}
        placeholderTextColor={placeholderTextColor || theme?.colors.text}
        {...rest}
      />
    </View>
  )
}
