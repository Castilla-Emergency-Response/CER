import SimpleToast from 'react-native-simple-toast'

export const errorHandler = ({ code }: { code: string }) => {
  console.warn(code)
  let msg = ''
  if (code === 'auth/invalid-email') {
    msg = 'Email address is invalid!'
  } else if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
    msg = 'Invalid credentials!'
  } else if (code === 'auth/network-request-failed') {
    msg = 'Slow internet connection!'
  } else if (code === 'auth/unknown') {
    msg = 'Something went wrong. Please try again later'
  } else if (code === 'auth/email-already-in-use') {
    msg = 'Email already in use'
  } else if (code === 'auth/too-many-requests') {
    msg = 'Too many attempts, please try again later.'
  }

  return SimpleToast.show(msg)
}

export const dateFormatter = (value: Date) => {
  const date = new Date(value)
  const month = date.getMonth()
  const day = date.getDate()
  return `${+month <= 9 ? '0' + month : month}/${
    +day <= 9 ? '0' + day : day
  }/${date.getFullYear()}`
}
