import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { AlertButton } from '../../components'
import { useTheme } from '../../provider'
import styles from './styles'

export const SplashScreen: React.FC = () => {
  const { theme } = useTheme()
  return (
    <View
      style={[styles.wrapper, { backgroundColor: theme?.colors.background }]}>
      <AlertButton style={{ marginBottom: 10 }} />
      <Text style={styles.title}>Castilla Emergency</Text>
      <Text style={styles.title}>Response</Text>
    </View>
  )
}
