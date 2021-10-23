import React from 'react'
import {
  View,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Text } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { useTheme } from '../../../../../provider'
import styles from './styles'

interface Props extends TouchableOpacityProps {
  buttonText: string
  textStyle?: TextStyle
}

export const ListButton: React.FC<Props> = ({
  buttonText,
  textStyle,
  style,
  ...rest
}) => {
  const { theme } = useTheme()
  return (
    <View>
      <TouchableOpacity style={[styles.wrapper, style]} {...rest}>
        <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        <Icon
          name="keyboard-arrow-right"
          type="material"
          size={20}
          color={theme?.colors.text}
        />
      </TouchableOpacity>
      <View style={{ height: 1, backgroundColor: theme?.colors.border }} />
    </View>
  )
}
