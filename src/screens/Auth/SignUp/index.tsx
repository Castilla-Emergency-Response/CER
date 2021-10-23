import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../store/types'
import styles from './styles'
import { Button, Input } from '../../../components'
import { useTheme } from '../../../provider'
import { useNavigation } from '@react-navigation/core'
import { FirebaseService } from '../../../services/firebase.services'

declare type form =
  | 'email'
  | 'password'
  | 'fullName'
  | 'confirmPassword'
  | 'username'

export const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<Object>()

  const { theme } = useTheme()
  const navigation = useNavigation()
  const dispatch: AppDispatch = useDispatch()

  const onChangeText = (name: form, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSignIn = async () => {
    try {
      const response = await FirebaseService.signUp(formData)
      if (!response.code) {
        dispatch({ type: 'TOGGLE_LOGGED_IN' })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={[styles.text, { fontSize: 20 }]}>Castilla</Text>
          <Text style={[styles.text, { fontSize: 20, marginLeft: 5 }]}>
            Emergency
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: -20,
          }}>
          <Text style={[styles.text, { fontSize: 20 }]}>Response</Text>
          <Text style={[styles.text, { fontSize: 20, marginLeft: 5 }]}>
            Registration
          </Text>
        </View>
      </View>
      <Input
        placeholder="Full Name"
        onChangeText={(value) => {
          onChangeText('fullName', value)
        }}
      />
      <Input
        placeholder="Username"
        onChangeText={(value) => {
          onChangeText('username', value)
        }}
      />
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
      <Input
        secureTextEntry
        placeholder="Confirm Password"
        onChangeText={(value) => {
          onChangeText('confirmPassword', value)
        }}
      />
      <Button onPress={onSignIn} buttonText="sign up" />
      <View style={styles.signIn}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
          <Text style={[styles.signInText, { color: theme?.colors.primary }]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
