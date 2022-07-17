// eslint-disable-next-line react-hooks/exhaustive-deps

import LoginService from '@/services/Login.service';
import { AUTH_INITIAL_STATE, AUTH_ROUTES } from '@/utilities/constants';
import { useRouter } from 'next/router';
import * as React from 'react'
import { useEffect } from 'react';
import { AuthConst } from './Auth.const';
import authReducer from './Auth.reducer';
const AuthContext = React.createContext(AUTH_INITIAL_STATE);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, dispatch] = React.useReducer(authReducer, AUTH_INITIAL_STATE)
  const value: any = { authState: state, dispatch, login, logOut }

  useEffect(() => {
    const data: any = localStorage.getItem('authData');
    const authData = JSON.parse(data);

    if (authData) {
      dispatch({
        type: AuthConst.LOGIN,
        payload: authData
      });
    }
  }, []);

  function login(userData: any) {
    dispatch({
      type: AuthConst.LOGIN,
      payload: userData
    });

    localStorage.setItem("authData", JSON.stringify(userData));
    router.replace("/home");
  }

  function logOut() {
    LoginService.Logout({ username: state.username }).then(res => {
      localStorage.removeItem("authData");
      dispatch({
        type: AuthConst.LOGOUT
      });
      router.replace("/");
    }).catch(err => {

      alert(err.response.data.error);
    })

  }

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