import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
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

export const Dashboard: React.FC = () => {
  const { user, loggedIn } = useSelector(
    (state: RootState) => state.authReducer,
  )
  const { theme } = useTheme()
  const dispatch: AppDispatch = useDispatch()
  const buttonWidth = (Dimensions.get('screen').width - 80) / 2

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
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: buttonWidth,
                width: buttonWidth,
                backgroundColor: theme?.colors.primary,
              },
            ]}>
            <Icon
              name="hand-holding-medical"
              type="font-awesome-5"
              size={40}
              color="#FFF"
            />
            <Text style={styles.buttonText}>{common.request[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: buttonWidth,
                width: buttonWidth,
                backgroundColor: theme?.colors.primary,
              },
            ]}>
            <Icon
              name="police-badge"
              type="material-community"
              size={40}
              color="#FFF"
            />
            <Text style={styles.buttonText}>{common.request[1]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: buttonWidth,
                width: buttonWidth,
                backgroundColor: theme?.colors.primary,
              },
            ]}>
            <Icon name="fire" type="fontisto" size={40} color="#FFF" />
            <Text style={styles.buttonText}>{common.request[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: buttonWidth,
                width: buttonWidth,
                backgroundColor: theme?.colors.primary,
              },
            ]}>
            <Icon name="medical" type="ionicon" size={40} color="#FFF" />
            <Text style={styles.buttonText}>{common.request[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
