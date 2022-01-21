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
          frontMatter: { title, thumbnailImg, description, tags, date },
        } = post

        return (
          <li className={cx('content')} key={index}>
            <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`}>
              <a href="replace">
                <div>
                  <span className={cx('date')}>{date}</span>
                  <h3 className={cx('title')}>{title}</h3>
                  <span>{description}</span>
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className={cx('wrap-img')}>
                  <Image src={thumbnailImg} alt={title} />
                </div>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts
