import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

interface Props extends TouchableOpacityProps {
  gradientColor?: string[]
  buttonText?: string
}

export const Button: React.FC<Props> = ({
  gradientColor,
  buttonText = 'button',
  style,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={gradientColor || ['#d12222', '#521918']}
      style={styles.button}>
      <TouchableOpacity style={[styles.button, style]} {...rest}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
