import { AppProps } from 'next/app'
import Head from 'next/head'

import config from '../config'
import '$styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
