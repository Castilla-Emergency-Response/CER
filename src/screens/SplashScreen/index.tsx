import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { AlertButton } from '../../components'
import styles from './styles'

export const SplashScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <AlertButton style={{ marginBottom: 10 }} />
      <Text style={styles.title}>Castilla Emergency</Text>
      <Text style={styles.title}>Response</Text>
    </View>
  )
}
