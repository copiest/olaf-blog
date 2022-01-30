import classNames from 'classnames/bind'

import styles from './Post.module.scss'

import { Post, Slug } from '$types/post'
import { getAllPosts, getPost } from '$utils/posts'
import PostSEO from '$components/shared/PostSEO'
import Header from '$components/post/Header'
import Content from '$components/post/Content'
import Navbar from '$shared/Navbar'

const cx = classNames.bind(styles)

function PostDetail({ post, code }: { post: Post; code: string }) {
  const {
    frontMatter: { title, summary, thumbnailImg, date },
  } = post

  return (
    <>
      <Navbar showProgressBar={true} />
      <PostSEO title={title} summary={summary} thumbnail={thumbnailImg} />
      <article className={cx('article')}>
        <Header title={title} thumbnailImg={thumbnailImg || 'fallback'} date={date} />
        <Content code={code} date={date} title={title} />
      </article>
    </>
  )
}

export default PostDetail

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths: Array<{ params: { year: string; slugs: string[] } }> = []

  for (const post of allPosts) {
    const { year, subject, title } = post.slug

    paths.push({ params: { year, slugs: [subject, title] } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { year: string; slugs: string[] } }) => {
  const { post, code } = await getPost({
    year: params.year,
    subject: params.slugs[0],
    title: params.slugs[1],
  } as Slug)

  return {
    props: {
      post,
      code,
    },
  }
}
