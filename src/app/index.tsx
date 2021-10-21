import React from 'react'
import { ReduxProvider, ThemeProvider } from '../provider'
import { LandingStackNavigation } from './nav'

const App = () => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <LandingStackNavigation />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
