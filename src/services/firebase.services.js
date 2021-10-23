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
    this.store = app.firestore()

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
        currentAddress: null,
        position: null,
        online: true,
        userType: 'consumer',
        department: null,
        phoneNumber: null,
      },
    })
  }

  signIn = async ({ email, password }) => {
    try {
      const res = await this.auth.signInWithEmailAndPassword(email, password)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  signUp = async ({ fullName, username, email, password }) => {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password)
      const currentUser = app.auth().currentUser
      await this.createUserProfile({
        id: currentUser.uid,
        email,
        username,
        fullName,
      })
      const currentUser_1 = await currentUser
      await currentUser_1.updateProfile({
        username,
        displayName: fullName,
        profilePic: TEMPORARY_AVATAR,
      })
      return { user: app.auth().currentUser }
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  updateProfile = async ({ displayName, username, profilePic, ...rest }) => {
    const profile = {
      username,
      displayName,
      profilePic,
      ...rest,
    }

    try {
      return this.auth.currentUser.updateProfile(profile)
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  signOut = async () => {
    try {
      return this.auth.signOut()
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  processSnapshot = ({ collection = 'users', doc }) => {
    return this.store.collection(collection).doc(doc)
  }

  setDocument = async ({ collection = 'users', doc, value = {} } = {}) => {
    try {
      const res = await this.store.collection(collection).doc(doc).set(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  addDocument = async ({ collection = 'users', value = {} } = {}) => {
    try {
      const res = await this.store.collection(collection).add(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  updateDocument = async ({ collection = 'users', doc, value = {} } = {}) => {
    try {
      const res = await this.store.collection(collection).doc(doc).update(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  setSubDocument = async ({
    collection = 'users',
    subCollection,
    doc,
    subDoc,
    value = {},
  } = {}) => {
    try {
      const res = await this.store
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .doc(subDoc)
        .set(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  addSubDocument = async ({
    collection = 'users',
    subCollection,
    doc,
    value = {},
  } = {}) => {
    try {
      const res = await this.store
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .add(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }

  updateSubDocument = async ({
    collection = 'users',
    subCollection,
    doc,
    subDoc,
    value = {},
  } = {}) => {
    try {
      const res = await this.store
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .doc(subDoc)
        .update(value)
      return res
    } catch (err) {
      errorHandler(err)
      return err
    }
  }
}
const TEMPORARY_AVATAR =
  'https://firebasestorage.googleapis.com/v0/b/loanpalz/o/static%2Fprofile-default.jpg?alt=media'

export const FirebaseService = new Firebase()
export default app
