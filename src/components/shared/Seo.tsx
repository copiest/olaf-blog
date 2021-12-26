import Head from 'next/head'

import siteMeta from '../../config'

export interface Props {
  title?: string
  description?: string
  thumbnail?: string
  slug?: string
}

export default function SEO({ seo = {} }: { seo?: Props }) {
  const config = {
    ...siteMeta,
    ...seo,
  }

  return (
    <Head>
      <meta name="subject" content={config.title} />
      <meta name="title" content={config.title} />
      <meta name="description" content={config.description} />
      <meta name="author" content={config.author} />
      <meta name="keywords" content={config.title} />
      <meta property="og:image" content={config.thumbnail} />
      <meta property="og:description" content={config.description} />
      <meta property="og:title" content={config.title} />
      <meta property="og:type" content="website" />
      {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} />}
    </Head>
  )
}
