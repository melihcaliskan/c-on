import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/Auth.context'
import Layout from '@/components/Layout.component'
import Head from 'next/head'

function ComeOnApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ComeOn Javascript Test</title>
        <link href="images/favicon.ico" rel="shortcut icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

export default ComeOnApp;