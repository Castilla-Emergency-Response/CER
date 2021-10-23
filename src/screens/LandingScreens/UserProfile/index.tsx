import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/types'
import { Avatar } from 'react-native-paper'
import { useTheme } from '../../../provider'
import { ListButton } from './components'
import { FirebaseService } from '../../../services/firebase.services'

export const UserProfile: React.FC = () => {
  const { theme, toggleDarkMode } = useTheme()
  const { user } = useSelector((state: RootState) => state.authReducer)
  const dispatch: AppDispatch = useDispatch()

  const signOut = async () => {
    try {
      await FirebaseService.signOut()
      dispatch({ type: 'TOGGLE_LOGGED_IN' })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View>
      <View style={[styles.parent]}>
        <LinearGradient colors={theme?.colors.gradient} style={[styles.child]}>
          <View style={styles.wrapper}>
            <Text style={styles.headerText}>{user?.fullName}</Text>
            <Avatar.Image source={{ uri: user?.profilePic }} size={120} />
            <TouchableOpacity
              style={{
                marginTop: -30,
                marginRight: -80,
              }}>
              <Avatar.Icon
                icon="pencil-outline"
                color={theme?.dark ? theme.colors.text : theme?.colors.primary}
                size={30}
                style={{
                  backgroundColor: theme?.colors.background,
                }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={{ height: 1, backgroundColor: theme?.colors.border }} />
      <ListButton buttonText="Preferences" onPress={toggleDarkMode} />
      <ListButton buttonText="Terms and Conditions" />
      <ListButton buttonText="Privacy Policy" />
      <ListButton buttonText="Sign Out" onPress={signOut} />
    </View>
  )
}
