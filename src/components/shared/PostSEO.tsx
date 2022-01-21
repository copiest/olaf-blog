import Head from 'next/head'

export interface Props {
  title?: string
  description?: string
  thumbnail?: string
}

export default function PostSEO({ title, description, thumbnail }: Props) {
  return (
    <Head>
      <meta name="subject" content={title} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} />}
    </Head>
  )
}
