import Link from 'next/link'
import classnames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './Navbar.module.scss'
import ProgressBar from './ProgressBar'

const cx = classnames.bind(styles)

function Navbar({ showProgressBar = false }: { showProgressBar?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.pageYOffset > 20)
    }

    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <nav className={cx('navbar', { scrolled })}>
      <div className={cx('inner-container')}>
        <div>
          <Link href="/">
            <a className={cx('wrap-left')}>
              <img src="/assets/images/navbar/ico-left.png" alt="" />
              <div className={cx('wrap-txt')}>
                <span>DEV</span>
                <span className={cx('txt-emphasize')}>OLAF</span>
              </div>
            </a>
          </Link>
        </div>
        <div>
          <ul>
            <li className={cx('txt-right-menu')}>
              <Link href="/about">
                <a>🙋🏻‍♂️ ABOUT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {showProgressBar ? <ProgressBar className={cx('progress-bar')} /> : null}
    </nav>
  )
}

export default Navbar
