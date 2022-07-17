import { AUTH_INITIAL_STATE } from '@/utilities/constants';
import * as React from 'react'
import authReducer from './Auth.reducer';

const AuthContext = React.createContext(AUTH_INITIAL_STATE);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(authReducer, AUTH_INITIAL_STATE)
  const value: any = { authState: state, dispatch }
  return (
    <AuthContext.Provider
      value={value}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context;
}

export { AuthProvider, useAuth }