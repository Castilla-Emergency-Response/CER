import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

declare type String = {
  headerText: TextStyle
  parent: ViewStyle
  child: ViewStyle
  wrapper: ViewStyle
}

export default StyleSheet.create<String>({
  parent: {
    height: 350,
    transform: [{ scaleX: 1.3 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    marginBottom: 20,
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 1 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
    padding: 15,
    paddingTop: 20,
  },
  wrapper: {
    paddingTop: 30,
    transform: [{ scaleX: 0.8 }],
    alignItems: 'center',
  },
})
