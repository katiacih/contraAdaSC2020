import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import { getFirestore,  Firestore }  from 'firebase/firestore/lite'
import firebaseConfig from './config/firebaseconfig'

const firebaseProvider = (): Firestore => {
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)

  return db

}

export default firebaseProvider






// export const db = firebase.firestore()

//https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br#web-version-9