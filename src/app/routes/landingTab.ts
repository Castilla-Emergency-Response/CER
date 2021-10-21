import { Chat, Dashboard, UserProfile } from '../../screens'
import { Screens } from '../types'

export const landingTab: Screens = [
  {
    name: 'Dashboard',
    component: Dashboard,
    options: {
      icon: {
        name: 'ios-grid',
        type: 'ionicon',
        size: 30,
      },
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      icon: {
        name: 'md-chatbubbles',
        type: 'ionicon',
        size: 30,
      },
    },
  },
  {
    name: 'Profile',
    component: UserProfile,
    options: {
      icon: {
        name: 'ios-person',
        type: 'ionicon',
        size: 30,
      },
    },
  },
]
