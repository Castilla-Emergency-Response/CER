import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

declare type Styles = {
  button: ViewStyle
  buttonText: TextStyle
}

export default StyleSheet.create<Styles>({
  button: {
    elevation: 5,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 5,
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '700',
  },
})
