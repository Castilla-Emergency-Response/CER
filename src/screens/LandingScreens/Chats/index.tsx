import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../../provider'
import styles from './styles'

export const Chats: React.FC = () => {
  const { theme } = useTheme()
  return (
    <View>
      <LinearGradient colors={theme?.colors.gradient} style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </LinearGradient>
    </View>
  )
}
