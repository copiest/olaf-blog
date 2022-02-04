import Head from 'next/head'

import config from '../../config'

export interface Props {
  title?: string
  summary?: string
  thumbnail?: string
}

export default function SEO({
  title = config.title,
  summary = config.summary,
  thumbnail = config.thumbnail,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={summary} />
      <meta name="keywords" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:description" content={summary} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
    </Head>
  )
}
