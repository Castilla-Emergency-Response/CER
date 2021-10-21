import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Icon } from 'react-native-elements'

export const AlertButton: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={{ backgroundColor: '#fbbbbc', padding: 20, borderRadius: 150 }}>
        <View
          style={{
            backgroundColor: '#f98887',
            padding: 20,
            borderRadius: 100,
          }}>
          <View
            style={{
              backgroundColor: '#d00e00',
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
