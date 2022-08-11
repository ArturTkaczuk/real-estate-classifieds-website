import { AuthAction, AuthActionType, AuthState } from '../types/authTypes'

export function authReducer(state: AuthState, action: AuthAction) {
  const { type, payload } = action

  switch (type) {
    case AuthActionType.LOGIN:
      return { isLoggedIn: true }
    case AuthActionType.LOGOUT:
      return { isLoggedIn: false }
    default:
      throw new Error('No such action type as ' + action.type)
  }
}

export const authInitialState = { isLoggedIn: false }
