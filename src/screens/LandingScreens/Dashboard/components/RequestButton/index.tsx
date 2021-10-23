import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native'
import { Text } from 'react-native-paper'
import { Icon } from 'react-native-elements'

import { useTheme } from '../../../../../provider'

import styles from './styles'

import { Icon as IconType } from '../../../../../app/types'

interface Props extends TouchableOpacityProps {
  title: string
  icon: IconType
}

export const RequestButton: React.FC<Props> = ({
  title,
  style,
  icon,
  ...rest
}) => {
  const { theme } = useTheme()
  const buttonWidth = (Dimensions.get('screen').width - 80) / 2

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          height: buttonWidth,
          width: buttonWidth,
          borderColor: theme?.colors.primary,
          backgroundColor: theme?.colors.background,
        },
        style,
      ]}
      {...rest}>
      <Icon
        size={40}
        color={theme?.dark ? theme.colors.text : theme?.colors.primary}
        {...icon}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
