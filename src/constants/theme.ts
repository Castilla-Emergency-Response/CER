import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import { colors } from 'react-native-elements'

export const DefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...colors,
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#00b300',
    hue1: '#00b300',
    hue2: '#01d701',
    hue3: '#00ff00c2',
    gradient: ['#00ff00', '#008000'],
    facebook: '#2f426f',
    background: '#fff',
    code: '#f0f0f0',
    blockquote: '#ddd',
    aqua: '#4bfefe',
  },
  icons: {
    size: {
      big: 58,
      small: 35,
    },
  },
}
export const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...colors,
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#363535',
    hue1: '#363535',
    hue2: '#2a2929',
    hue3: '#262626',
    gradient: ['#212121', '#363535'],
    facebook: '#181818',
    background: '#212121',
    code: '#2a3836',
    blockquote: '#ddd',
    aqua: '#4bfefe',
  },
  icons: {
    size: {
      big: 58,
      small: 35,
    },
  },
}
