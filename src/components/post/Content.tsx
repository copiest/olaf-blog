import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import classNames from 'classnames/bind'

import styles from './Content.module.scss'
import CodeBlock from './CodeBlock'

interface ContentProps {
  code: string
  title: string
  date: string
}

const cx = classNames.bind(styles)

function Content({ code, title, date }: ContentProps) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className={cx('wrap-content')}>
      <div className={cx('wrap-title')}>
        <div className={cx('txt-title')}>{title}</div>
        <time>{date}</time>
      </div>
      <Component components={{ code: CodeBlock }} />
    </div>
  )
}

export default Content
