import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './Posts.module.scss'

import { Post } from '$types/post'
import Image from '$shared/Image'

const cx = classNames.bind(styles)

interface PostsProps {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <ul className={cx('container')}>
      {posts.map((post, index: number) => {
        const {
          frontMatter: { title, thumbnailImg, tags, date },
        } = post

        const formattedTags = tags.join(', ')

        return (
          <li className={cx('content')} key={index}>
            <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`}>
              <a>
                <div className={cx('wrap-img')}>
                  <Image src={thumbnailImg} alt={title} />
                </div>
                <span className={cx('txt-tags')}>{formattedTags}</span>
                <h3 className={cx('txt-title')}>{title}</h3>
                <span className={cx('date')}>{date}</span>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts
