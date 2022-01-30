import classnames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './ProgressBar.module.scss'

const cx = classnames.bind(styles)

function ProgressBar({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      setProgress((winScroll / height) * 100)
    }

    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div
      className={cx('progress-bar', className)}
      style={{
        width: progress + '%',
      }}
    />
  )
}

export default ProgressBar
