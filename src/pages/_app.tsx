import { AppProps } from 'next/app'

import '$styles/global.scss'

import Navbar from '$shared/Navbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App
