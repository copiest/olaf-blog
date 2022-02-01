import Head from 'next/head'

export interface Props {
  title?: string
  summary?: string
  thumbnail?: string
}

export default function PostSEO({ title, summary, thumbnail }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="subject" content={title} />
      <meta name="title" content={title} />
      <meta name="description" content={summary} />
      <meta name="keywords" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:description" content={summary} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} />}
    </Head>
  )
}
