import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

export const Chats: React.FC<ChatsProps> = () => {
  return (
    <View>
      <LinearGradient colors={['#d12222', '#521918']} style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </LinearGradient>
    </View>
  )
}
