import { createContext } from 'react'
import { AuthAction } from '../types/authTypes'

type AuthContextType = {
  isLoggedIn: boolean
  logIn: () => React.Dispatch<AuthAction> | void
  logOut: () => React.Dispatch<AuthAction> | void
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logIn: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logOut: () => {},
})

//Only visible in Chrome React Developer Tools extension - for debugging
AuthContext.displayName = 'AuthContext'
