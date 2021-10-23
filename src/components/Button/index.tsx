import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../provider'
import styles from './styles'

interface Props extends TouchableOpacityProps {
  gradientColor?: string[]
  buttonText?: string
}

export const Button: React.FC<Props> = ({
  gradientColor,
  buttonText = 'button',
  ...rest
}) => {
  const { theme } = useTheme()
  return (
    <LinearGradient
      colors={theme?.colors.gradient || gradientColor}
      style={styles.button}>
      <TouchableOpacity {...rest}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
