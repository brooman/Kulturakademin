import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import MobileIcon from '../../icons/MobileIcon'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import LinkedInIcon from '../../icons/LinkedInIcon'

import styles from './index.module.scss'

const Footer = props => {
  const { text, infoTextLeft, infoTextRight } = props

  return (
    <div>
      <div className={styles.getPwa}>
        <MobileIcon />
        <h1 className={styles.footerText}>{text}</h1>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="https://www.facebook.com/kulturAkademin">
              <FacebookIcon />
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kulturakademin/">
              <InstagramIcon />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kulturakademin">
              <TwitterIcon />
              <p>Twitter</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/kulturakademin/?originalSubdomain=se">
              <LinkedInIcon />
              <p>LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <p className={styles.infoText}>{infoTextLeft}</p>
        <p className={styles.infoText}>{infoTextRight}</p>
      </div>
    </div>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
