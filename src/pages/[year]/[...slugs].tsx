import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import classNames from 'classnames/bind'

import styles from './Post.module.scss'

import { Post, Slug } from '$types/post'
import { getAllPosts, getPost } from '$utils/posts'
import PostSEO from '$components/shared/PostSEO'

const cx = classNames.bind(styles)

function PostDetail({ post, code }: { post: Post; code: string }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  const {
    frontMatter: { title, description, thumbnailImg, date },
  } = post

  return (
    <article className={cx('article')}>
      <PostSEO title={title} description={description} thumbnail={thumbnailImg} />
      <header>
        <div className={cx('gradient-top')} />
        <div className={cx('wrap-img')}>
          <img src={thumbnailImg} alt="" />
        </div>
        <div className={cx('gradient-bottom')} />
        <div className={cx('wrap-title')}>
          <div className={cx('txt-title')}>{post.frontMatter.title}</div>
          <time>{date}</time>
        </div>
      </header>
      <div className={cx('wrap-content')}>
        <div className={cx('wrap-title')}>
          <div className={cx('txt-title')}>{post.frontMatter.title}</div>
          <time>{date}</time>
        </div>
        <Component />
      </div>
    </article>
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
