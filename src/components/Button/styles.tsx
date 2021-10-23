import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  button: ViewStyle
  buttonText: TextStyle
}

export default StyleSheet.create<String>({
  button: {
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 20,
    elevation: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: '700',
  },
})
