import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  wrapper: ViewStyle
  buttonText: TextStyle
}

export default StyleSheet.create<String>({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    paddingVertical: 12,
    fontSize: 18,
  },
})
