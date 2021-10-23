import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  header: ViewStyle
  headerText: TextStyle
}

export default StyleSheet.create<String>({
  header: {
    flexGrow: 1,
    elevation: 10,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
    padding: 15,
    paddingTop: 20,
  },
})
