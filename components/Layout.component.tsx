import React from "react";
import { Header } from "./Header.component"

export function Layout({ children }: { children: React.ReactNode }) {
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