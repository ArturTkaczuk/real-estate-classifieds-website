export enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthActionType
  payload?: string
}

export interface AuthState {
  isLoggedIn: boolean
}
