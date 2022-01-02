import { createContext, useContext } from 'react';
import firebaseConfig from '../../infra/config/firebaseconfig';
import firebase from 'firebase/app'

export const useProviderAuth = (): void => {
  const [user, setUser] = useState({
    name: '',
    token: ''
  })

  const signin = (email: string, password: string): void => {
    return firebase.
  }
}


const useAuth = (): void => {
  const authContext = createContext()

  return useContext(authContext)
  
}


