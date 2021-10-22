import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import { Avatar } from 'react-native-paper'
import { useTheme } from '../../../provider'
import { ListButton } from './components'

export const UserProfile: React.FC = () => {
  const { theme } = useTheme()
  const { user } = useSelector((state: RootState) => state.authReducer)
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch({ type: 'TOGGLE_LOGGED_IN' })
  }
  return (
    <View>
      <View style={[styles.parent]}>
        <LinearGradient colors={['#d12222', '#521918']} style={[styles.child]}>
          <View style={styles.wrapper}>
            <Text style={styles.headerText}>
              {user?.fullName || 'Juan Tamad'}
            </Text>
            <Avatar.Image source={{ uri: placeHolderImage }} size={120} />
            <TouchableOpacity
              style={{
                marginTop: -30,
                marginRight: -80,
              }}>
              <Avatar.Icon
                icon="pencil-outline"
                color="#521918"
                size={30}
                style={{
                  backgroundColor: theme.colors.background,
                }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={{ height: 1, backgroundColor: theme.colors.border }} />
      <ListButton buttonText="Preferences" />
      <ListButton buttonText="Terms and Conditions" />
      <ListButton buttonText="Privacy Policy" />
      <ListButton buttonText="Sign Out" onPress={signOut} />
    </View>
  )
}

const placeHolderImage =
  'https://firebasestorage.googleapis.com/v0/b/castilla-emergency-response.appspot.com/o/profile.jpg?alt=media&token=951ff73e-f2cf-4546-a900-3efe6846263c'
