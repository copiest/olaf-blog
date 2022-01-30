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
      <Link href="/">
        <img src="/assets/images/nav_icon.png" alt="" />
      </Link>
      {showProgressBar ? <ProgressBar className={cx('progress-bar')} /> : null}
    </nav>
  )
}

export default Navbar
