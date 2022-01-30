import classNames from 'classnames/bind'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

interface HeaderProps {
  thumbnailImg: string
  title: string
  date: string
}

function Header({ thumbnailImg, title, date }: HeaderProps) {
  return (
    <header className={cx('header')}>
      <div className={cx('gradient-top')} />
      <div className={cx('wrap-img')}>
        <img src={thumbnailImg} alt="" />
      </div>
      <div className={cx('gradient-bottom')} />
      <div className={cx('wrap-title')}>
        <div className={cx('txt-title')}>{title}</div>
        <time>{date}</time>
      </div>
    </header>
  )
}

export default Header
