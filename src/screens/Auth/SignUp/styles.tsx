import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  wrapper: ViewStyle
  text: TextStyle
  signIn: ViewStyle
  signInText: TextStyle
}

export default StyleSheet.create<String>({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontWeight: '700',
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
  signIn: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  signInText: {
    fontWeight: '700',
  },
})
