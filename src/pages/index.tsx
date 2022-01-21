import { GetStaticProps } from 'next'
import styled from '@emotion/styled'

import { Post } from '$types/post'
import { getAllPosts } from '$utils/posts'
import Message from '$shared/Message'
import Posts from '$home/Posts'

const Container = styled.div``

function IndexPage({ posts = [] }: { posts: Post[] }) {
  return (
    <Container>
      <Message />
      <Posts posts={posts} />
    </Container>
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
