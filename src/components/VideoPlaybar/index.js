import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const VideoPlaybar = props => {
  const { play, save } = props

  return (
    <div className={styles.wrapper}>
      <p>{play}</p>
      <p>{save}</p>
    </div>
  )
}

VideoPlaybar.propTypes = {
  play: PropTypes.string.isRequired,
  save: PropTypes.string.isRequired,
}

export default VideoPlaybar
