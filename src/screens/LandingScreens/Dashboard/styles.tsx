import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

declare type Styles = {
  header: ViewStyle
  headerText: TextStyle
  buttonWrapper: ViewStyle
  location: ViewStyle
  locationText: TextStyle
}

export default StyleSheet.create<Styles>({
  header: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    height: 150,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
    padding: 15,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 25,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 5,
    padding: 3,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  locationText: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 5,
  },
})
