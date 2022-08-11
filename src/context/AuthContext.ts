import { createContext } from 'react'
import { AuthAction } from '../types/authTypes'

type AuthContextType = {
  isLoggedIn: boolean
  dispatch: React.Dispatch<AuthAction>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthContext = createContext<AuthContextType>({ isLoggedIn: false, dispatch: () => {} })

//Only visible in Chrome React Developer Tools extension - for debugging
AuthContext.displayName = 'AuthContext'
