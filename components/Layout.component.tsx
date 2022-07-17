/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/Auth.context";
import { Header } from "./Header.component"
import { useRouter } from "next/router";
import { AUTH_ROUTES } from "@/utilities/constants";
import { IAuth } from "@/interfaces/IAuth.interface";

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { authState }: any = useAuth();

  useEffect(() => {
    // If user logged in,
    // redirect to home page.
    if (router.route === "/" && authState.isLoggedIn) {
      router.replace("/home");
    }


    // If user not logged in,
    // and go home and game page.
    if (AUTH_ROUTES.includes(router.route) && !authState.isLoggedIn) {
      router.replace("/");
    }
  }, [router.route]);

  return (
    <>
      <Header />
      <main className="main container">
        {children}
      </main>
    </>
  )
}

export default Layout;