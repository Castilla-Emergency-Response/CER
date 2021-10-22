import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  wrapper: ViewStyle
  text: TextStyle
  signUp: ViewStyle
  signUpText: TextStyle
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
  signUp: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  signUpText: {
    fontWeight: '700',
  },
})
