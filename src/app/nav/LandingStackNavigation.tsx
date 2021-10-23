import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//routes
import { landingStack, authStack } from '../routes'

//types
import { Screens } from '../types'
import { AppDispatch, RootState } from '../../store/types'

//screens
import { SplashScreen } from '../../screens'
import { FirebaseService } from '../../services/firebase.services'
import Toast from 'react-native-simple-toast'
import { permissions } from '../../utils'

const Stack = createNativeStackNavigator()

export const LandingStackNavigation = () => {
  const { loggedIn } = useSelector((state: RootState) => state.authReducer)
  const dispatch: AppDispatch = useDispatch()

  const [routes, setRoutes] = useState<Screens>([])
  const [loading, setLoading] = useState(true)
  const [uid, setUid] = useState<null | string>(null)

  useEffect(() => {
    permissions.location()
  }, [])

  useEffect(() => {
    setRoutes(loggedIn ? landingStack : authStack)
  }, [loggedIn])

  useEffect(() => {
    if (uid) {
      const subscriber = FirebaseService.processSnapshot({
        doc: uid,
      }).onSnapshot((snapshot) =>
        dispatch({ type: 'SET_USER', payload: snapshot.data() }),
      )
      return subscriber
    }
  }, [uid])

  useEffect(() => {
    if (uid) {
      FirebaseService.updateDocument({ doc: uid, value: { online: true } })
      return () => {
        FirebaseService.updateDocument({ doc: uid, value: { online: false } })
      }
    }
  }, [uid])

  useEffect(() => {
    const subscriber = FirebaseService.auth.onAuthStateChanged((user) => {
      if (user) {
        Toast.show(`Welcome ${user.displayName}!`, Toast.LONG)
        return setUid(user.uid)
      }

      setUid(null)
      dispatch({ type: 'RESET_USER' })
    })
    return subscriber
  }, [])

  useEffect(() => {
    if (routes.length !== 0) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [routes])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator>
      {routes.map(({ name, options, ...rest }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={{
            headerShown: false,
            ...options,
          }}
          {...rest}
        />
      ))}
    </Stack.Navigator>
  )
}
