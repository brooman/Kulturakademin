import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Hero = props => {
  const { image, text } = props

  const style = {
    backgroundImage: `url(${image})`,
  }

  return (
    <div className={styles.hero} style={style}>
      <h1 className={styles.heroText}>{text}</h1>
    </div>
  )
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Hero
