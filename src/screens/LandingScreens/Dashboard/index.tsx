import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { common } from './../../../constants/common'

export const Dashboard: React.FC = () => {
  const buttonWidth = (Dimensions.get('screen').width - 80) / 2
  return (
    <View>
      <LinearGradient colors={['#d12222', '#521918']} style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to
          <Text style={{ color: '#000' }}> Castilla</Text>
          {'\n'}
          <Text style={{ color: '#c70d05' }}>Emergency Response</Text>
        </Text>
      </LinearGradient>
      <TouchableOpacity style={styles.location}>
        <Icon name="location-on" type="material" size={30} color="#791718" />
        <Text
          style={styles.locationText}
          numberOfLines={1}
          ellipsizeMode="tail">
          Legazpi City, Albay 4500
        </Text>
      </TouchableOpacity>
      <View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[
              styles.button,
              { height: buttonWidth, width: buttonWidth },
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
              { height: buttonWidth, width: buttonWidth },
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
              { height: buttonWidth, width: buttonWidth },
            ]}>
            <Icon name="fire" type="fontisto" size={40} color="#FFF" />
            <Text style={styles.buttonText}>{common.request[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { height: buttonWidth, width: buttonWidth },
            ]}>
            <Icon name="medical" type="ionicon" size={40} color="#FFF" />
            <Text style={styles.buttonText}>{common.request[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
