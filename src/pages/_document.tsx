import Document, { Html, Head, Main, NextScript } from 'next/document'

import config from '../config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content={config.title} />
          <meta property="og:image" content={config.thumbnail} />
          <meta id="metaOgUrl" property="og:url" content={config.url} />
          <meta property="og:description" content={config.description} />
          <meta name="subject" content={config.title} />
          <meta name="title" content={config.title} />
          <meta name="description" content={config.description} />
          <meta name="author" content={config.author} />
          <meta name="keywords" content={config.title} />
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
