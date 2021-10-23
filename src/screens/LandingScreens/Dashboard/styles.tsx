import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

declare type Styles = {
  header: ViewStyle
  headerText: TextStyle
  button: ViewStyle
  buttonWrapper: ViewStyle
  buttonText: TextStyle
  location: ViewStyle
  locationText: TextStyle
}

export default StyleSheet.create<Styles>({
  header: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#791718',
    height: 150,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
    padding: 15,
  },
  button: {
    elevation: 10,
    backgroundColor: '#791718',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 25,
  },
  buttonText: {
    marginTop: 5,
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 5,
    padding: 3,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#791718',
    borderRadius: 50,
  },
  locationText: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 5,
  },
})
