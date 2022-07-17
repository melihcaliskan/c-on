import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/Auth.context'
import Layout from '@/components/Layout.component'

function ComeOnApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default ComeOnApp;