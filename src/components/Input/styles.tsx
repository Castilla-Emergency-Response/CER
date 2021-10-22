import { StyleSheet, ViewStyle } from 'react-native'

declare type String = {
  wrapper: ViewStyle
  textInput: ViewStyle
}

export default StyleSheet.create<String>({
  wrapper: {
    marginHorizontal: 30,
    marginBottom: 15,
    borderRadius: 30,
    borderColor: '#791718',
    borderWidth: 1,
  },
  textInput: {
    paddingHorizontal: 15,
  },
})
