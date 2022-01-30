import { GetStaticProps } from 'next'
import classnames from 'classnames/bind'

import styles from './Index.module.scss'

import { Post } from '$types/post'
import { getAllPosts } from '$utils/posts'
import Posts from '$home/Posts'

const cx = classnames.bind(styles)

function IndexPage({ posts = [] }: { posts: Post[] }) {
  return (
    <div className={cx('container')}>
      <Posts posts={posts} />
    </div>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
