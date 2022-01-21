import Link from 'next/link'
import classnames from 'classnames/bind'

import styles from './Navbar.module.scss'

const cx = classnames.bind(styles)

function Navbar() {
  return (
    <nav className={cx('container')}>
      <Link href="/">
        <img src="/assets/images/nav_icon.png" alt="" />
      </Link>
    </nav>
  )
}

export default Navbar
