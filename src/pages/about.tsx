import classNames from 'classnames/bind'

import config from '../config'

import styles from './About.module.scss'

import GithubIcon from '$shared/Icon/Github'
import InstargramIcon from '$shared/Icon/Instagram'
import LinkedInIcon from '$shared/Icon/LinkedIn'
import Navbar from '$shared/Navbar'

const cx = classNames.bind(styles)

const About = () => {
  const { about } = config
  const { name, intro, image, social } = about

  return (
    <>
      <Navbar />
      <article className={cx('article')}>
        <div className={cx('inner-container')}>
          <div className={cx('wrap-image')}>
            <img src={image} alt="" />
          </div>
          <div className={cx('txt-name')}>{name}</div>
          <p className={cx('txt-intro')}>{intro}</p>
          <ul className={cx('wrap-social')}>
            {social.github ? (
              <li>
                <a href={social.github} target="_blank" rel="noreferrer">
                  <GithubIcon />
                </a>
              </li>
            ) : null}
            {social.instargram ? (
              <li>
                <a href={social.instargram} target="_blank" rel="noreferrer">
                  <InstargramIcon />
                </a>
              </li>
            ) : null}
            {social.linkedIn ? (
              <li>
                <a href={social.linkedIn} target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </article>
    </>
  )
}

export default About
