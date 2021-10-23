import { PermissionsAndroid } from 'react-native'

export const permissions = {
  location: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true
      }
      return false
    } catch (err) {
      console.warn(err)
    }
  },
}
