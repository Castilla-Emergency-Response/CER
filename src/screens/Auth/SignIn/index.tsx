import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../store/types'
import styles from './styles'
import { AlertButton, Button, Input } from '../../../components'
import { useTheme } from '../../../provider'
import { useNavigation } from '@react-navigation/core'
import { FirebaseService } from '../../../services/firebase.services'

export const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<Object>()

  const { theme } = useTheme()
  const navigation = useNavigation()
  const dispatch: AppDispatch = useDispatch()

  const onChangeText = (name: 'email' | 'password', value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSignIn = async () => {
    try {
      const response = await FirebaseService.signIn(formData)
      if (!response.code) {
        dispatch({ type: 'TOGGLE_LOGGED_IN' })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ alignItems: 'center' }}>
        <AlertButton />
      </View>
      <Text style={[styles.text, { fontSize: 20, marginBottom: 10 }]}>
        Welcome to Castilla{'\n'}
        Emergency Response
      </Text>
      <Input
        placeholder="Email"
        onChangeText={(value) => {
          onChangeText('email', value)
        }}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        onChangeText={(value) => {
          onChangeText('password', value)
        }}
      />
      <Button onPress={onSignIn} buttonText="sign in" />
      <View style={styles.signUp}>
        <Text>Not yet registered? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text
            style={[
              styles.signUpText,
              {
                color: theme?.dark ? theme?.colors.text : theme?.colors.primary,
              },
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
