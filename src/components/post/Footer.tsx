import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

import Feed from '$shared/Feed'
import { Post } from '$types/post'

const cx = classNames.bind(styles)

function Footer({ morePosts }: { morePosts: Post[] }) {
  return (
    <footer className={cx('wrap-footer')}>
      <div className={cx('wrap-inner')}>
        <h2 className={cx('txt-title')}>이 글도 읽어보시는거 어때요?</h2>
        <ul className={cx('wrap-feed')}>
          {morePosts.map((post) => {
            const {
              frontMatter: { title, thumbnailImg, tags, date },
            } = post

            const formattedTags = tags.join(', ')

            const link = `/${post.slug.year}/${post.slug.subject}/${post.slug.title}`

            return (
              <Feed
                key={title}
                href={link}
                tags={formattedTags}
                date={date}
                title={title}
                thumbnailImg={thumbnailImg || ''}
              />
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
