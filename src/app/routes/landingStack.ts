import { RequestAssistance } from '../../screens'
import { LandingTabNavigation } from '../nav'

import { Screens } from '../types'

export const landingStack: Screens = [
  {
    name: 'Home',
    component: LandingTabNavigation,
  },
  {
    name: 'Request Assistance',
    component: RequestAssistance,
  },
]
