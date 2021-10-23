import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Geolocation from 'react-native-geolocation-service'
import Toast from 'react-native-simple-toast'

import styles from './styles'

import { common } from './../../../constants/common'
import { AppDispatch, RootState } from '../../../store/types'
import { FirebaseService } from '../../../services/firebase.services'
import { useTheme } from '../../../provider'
import { RequestButton } from './components'

export const Dashboard: React.FC = () => {
  const { user, loggedIn } = useSelector(
    (state: RootState) => state.authReducer,
  )
  const { theme } = useTheme()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (loggedIn) {
      Geolocation.getCurrentPosition(
        async (position) => {
          dispatch({ type: 'UPDATE_USER', payload: { position: position } })
        },
        (err) => Toast.show(err.message),
        { enableHighAccuracy: true },
      )
    }
  }, [loggedIn])

  return (
    <View>
      <LinearGradient colors={theme?.colors.gradient} style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to Castilla{'\n'}
          Emergency Response
        </Text>
      </LinearGradient>
      <View
        style={[
          styles.location,
          {
            borderColor: theme?.colors.primary,
          },
        ]}>
        <Icon
          name="location-on"
          type="material"
          size={30}
          color={theme?.colors.primary}
        />
        <Text
          style={styles.locationText}
          numberOfLines={1}
          ellipsizeMode="tail">
          {user?.currentAddress || 'Getting current location ...'}
        </Text>
      </View>
      <View>
        <View style={styles.buttonWrapper}>
          <RequestButton
            title={common.request[0]}
            icon={{
              name: 'hand-holding-medical',
              type: 'font-awesome-5',
            }}
          />
          <RequestButton
            title={common.request[1]}
            icon={{
              name: 'police-badge',
              type: 'material-community',
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <RequestButton
            title={common.request[2]}
            icon={{
              name: 'local-fire-department',
              type: 'material',
            }}
          />
          <RequestButton
            title={common.request[3]}
            icon={{
              name: 'asterisk',
              type: 'material-community',
            }}
          />
        </View>
      </View>
    </View>
  )
}
