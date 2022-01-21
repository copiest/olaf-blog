import classNames from 'classnames/bind'

import styles from './Image.module.scss'

const cx = classNames.bind(styles)

function Image({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className={cx('container')}>
      {/* TODO */}
      <img src={src ?? 'fallback image'} alt={alt ?? ''} />
    </div>
  )
}

export default Image
