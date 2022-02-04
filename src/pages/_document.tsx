import Document, { Html, Head, Main, NextScript } from 'next/document'

import config from '../config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content={config.author} />
          <meta property="og:type" content="website" />
          {typeof window !== 'undefined' && (
            <meta property="og:url" content={window.location.href} />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
