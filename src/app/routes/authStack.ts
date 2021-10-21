import { SignIn, SignUp } from '../../screens'
import { Screens } from '../types'

export const authStack: Screens = [
  {
    name: 'Sign In',
    component: SignIn,
  },
  {
    name: 'Sign Up',
    component: SignUp,
  },
]
