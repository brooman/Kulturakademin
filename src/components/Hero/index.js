import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Hero = props => {
  const { image, title, text, intro } = props

  const style = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')`,
  }

  return (
    <div className={styles.hero} style={style}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <h1 className={styles.heroText}>{text}</h1>
      <h3 className={styles.introText}>{intro}</h3>
    </div>
  )
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
}

export default Hero
