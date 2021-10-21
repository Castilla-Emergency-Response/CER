import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

//routes
import { landingStack, authStack } from '../routes'

//types
import { Screens } from '../types'
import { RootState } from '../../store/types'

//screens
import { SplashScreen } from '../../screens'

const Stack = createStackNavigator()

export const LandingStackNavigation = () => {
  const { loggedIn } = useSelector((state: RootState) => state.authReducer)

  const [routes, setRoutes] = useState<Screens>([])
  const [loading, setLoading] = useState(true)

  console.log(loggedIn)
  useEffect(() => {
    setRoutes(loggedIn ? landingStack : authStack)
  }, [loggedIn])

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
