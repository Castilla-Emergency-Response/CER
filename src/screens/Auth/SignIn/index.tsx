import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../store/types'
import styles from './styles'
import { AlertButton, Button, Input } from '../../../components'
import { useTheme } from '../../../provider'
import { useNavigation } from '@react-navigation/core'

export const SignIn: React.FC = () => {
  const { theme } = useTheme()
  const navigation = useNavigation()
  const dispatch: AppDispatch = useDispatch()

  return (
    <View style={styles.wrapper}>
      <View style={{ alignItems: 'center' }}>
        <AlertButton />
      </View>
      <Text style={[styles.text, { fontSize: 20, marginBottom: 10 }]}>
        Welcome to
        <Text style={{ color: '#000' }}> Castilla</Text>
        {'\n'}
        <Text style={{ color: '#c70d05' }}>Emergency Response</Text>
      </Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button
        onPress={() => dispatch({ type: 'TOGGLE_LOGGED_IN' })}
        buttonText="sign in"
      />
      <View style={styles.signUp}>
        <Text>Not yet registered? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text style={[styles.signUpText, { color: theme.colors.primary }]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>or</Text>
      <Button
        onPress={() => dispatch({ type: 'TOGGLE_LOGGED_IN' })}
        buttonText="guest sign in"
      />
    </View>
  )
}
