import Document, { Html, Head, Main, NextScript } from 'next/document'

import config from '../config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="GVt_B0UKzXR4zZRWh6mzL8X17B-yEjV2DKKwML7D-oY"
          />
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
