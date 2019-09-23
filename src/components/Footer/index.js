import React from 'react'
import PropTypes from 'prop-types'
import MobileIcon from '../../icons/MobileIcon'

import styles from './index.module.scss'

const Footer = props => {
  const { text } = props

  return (
    <div className={styles.getPwa}>
      <MobileIcon />
      <h1 className={styles.footerText}>{text}</h1>
    </div>
  )
}

Footer.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Footer
