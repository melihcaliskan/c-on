// eslint-disable-next-line react-hooks/exhaustive-deps

import { IAuth } from '@/interfaces/IAuth.interface';
import LoginService from '@/services/Login.service';
import { AUTH_INITIAL_STATE, AUTH_ROUTES } from '@/utilities/constants';
import { useRouter } from 'next/router';
import * as React from 'react'
import { useEffect, useState } from 'react';
import { AuthConst } from './Auth.const';
import authReducer from './Auth.reducer';

const AuthContext: React.Context<any> = React.createContext(AUTH_INITIAL_STATE);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, dispatch] = React.useReducer(authReducer, AUTH_INITIAL_STATE)
  const value: IAuth.IAuthHook = { authState: state, dispatch, login, logOut }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('authData');

    // No data in storage.
    if (typeof data === "undefined") {
      return;
    }

    // Parse stored data.
    const authData: IAuth.IAuthState | undefined = JSON.parse(data!);

    // If parsed successfully.
    if (authData) {
      dispatch({
        type: AuthConst.LOGIN,
        payload: authData
      });
    }

    setLoading(false);
  }, []);

  function login(userData: IAuth.IAuthState) {
    dispatch({
      type: AuthConst.LOGIN,
      payload: userData
    });

    // Set to storage.
    localStorage.setItem("authData", JSON.stringify(userData));

    // Redirect to home.
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

  // Do not render while loading. 
  if (loading) {
    return (
      <div />
    )
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