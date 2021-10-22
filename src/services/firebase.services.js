import app, { firebase } from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

import config from '../config/firebase-config.json'
import { errorHandler } from '../utils'

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      app.initializeApp(config)
    }

    this.authUser = {}
    this.auth = app.auth()
    this.db = app.firestore()

    this.auth.onAuthStateChanged((user) => {
      this.authUser = { user }
    })

    this.auth.onUserChanged((user) => {
      this.authUser = { user }
    })
  }

  checkAuthorization = () => {
    if (!this.auth.currentUser) {
      return [
        '[error/unauthorized] You are unauthorized to perform any operation. Please login and try again.',
      ]
    }

    return []
  }

  signIn({ email, password }) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((err) => {
        errorHandler(err)
        return err
      })
  }

  createUserProfile = ({
    id,
    username,
    fullName,
    email,
    profilePic = TEMPORARY_AVATAR,
  } = {}) => {
    return this.setDocument({
      doc: id,
      value: {
        id,
        profilePic,
        username,
        fullName,
        email,
        age: null,
        address: null,
        location: {
          long: '',
          lat: '',
        },
        online: true,
        userType: 'consumer',
        department: null,
        phoneNumber: null,
      },
    })
  }

  signUp({ fullName, username, email, password }) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => app.auth().currentUser)
      .then(async (currentUser) => {
        await this.createUserProfile({
          id: currentUser.uid,
          email,
          username,
          fullName,
        })

        return currentUser
      })
      .then(async (currentUser) => {
        await currentUser.updateProfile({
          username,
          displayName: fullName,
          profilePic: TEMPORARY_AVATAR,
        })
      })
      .then(() => ({ user: app.auth().currentUser }))
      .catch((err) => {
        errorHandler(err)
        return err
      })
  }

  updateProfile({ displayName, username, profilePic, ...rest }) {
    const profile = {
      username,
      displayName,
      profilePic,
      ...rest,
    }

    return this.auth.currentUser.updateProfile(profile)
  }

  signOut() {
    return this.auth.signOut()
  }

  setDocument = ({ collection = 'users', doc, value = {} } = {}) => {
    return this.db
      .collection(collection)
      .doc(doc)
      .set(value)
      .then((res) => res)
      .catch((err) => err)
  }

  processSnapshot({ collection = 'users', doc }) {
    return this.db.collection(collection).doc(doc)
  }
}
const TEMPORARY_AVATAR =
  'https://firebasestorage.googleapis.com/v0/b/loanpalz/o/static%2Fprofile-default.jpg?alt=media'

export const FirebaseService = new Firebase()
export default app
