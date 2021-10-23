import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useTheme } from '../../provider'

export const AlertButton: React.FC<TouchableOpacityProps> = (props) => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          backgroundColor: theme?.colors.hue3,
          padding: 20,
          borderRadius: 150,
        }}>
        <View
          style={{
            backgroundColor: theme?.colors.hue2,
            padding: 20,
            borderRadius: 100,
          }}>
          <View
            style={{
              backgroundColor: theme?.colors.hue1,
              padding: 20,
              borderRadius: 50,
            }}>
            <Icon
              name="alert-octagon-outline"
              type="material-community"
              color="#fff"
              size={50}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
