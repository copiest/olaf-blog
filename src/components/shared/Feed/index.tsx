import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './Feed.module.scss'

import Image from '$shared/Image'

interface FeedProps {
  tags: string
  title: string
  thumbnailImg: string
  date: string
  href: string
}

const cx = classNames.bind(styles)

function Feed({ tags, title, thumbnailImg, date, href }: FeedProps) {
  return (
    <li>
      <Link href={href}>
        <a className={cx('wrap-feed')}>
          <div className={cx('wrap-content')}>
            <span className={cx('txt-tags')}>{tags}</span>
            <span className={cx('txt-title')}>{title}</span>
            <span className={cx('txt-date')}>{date}</span>
          </div>
          <div className={cx('wrap-img')}>
            <Image src={thumbnailImg} alt={title} />
          </div>
        </a>
      </Link>
    </li>
  )
}

export default Feed
