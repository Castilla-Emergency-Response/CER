import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  wrapper: ViewStyle
  title: TextStyle
}

export default StyleSheet.create<String>({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
})
