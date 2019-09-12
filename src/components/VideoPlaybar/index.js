import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const VideoPlaybar = props => {
  return (
    <div className={styles.wrapper}>
      <p>{props.play}</p>
      <p>{props.save}</p>
    </div>
  )
}

VideoPlaybar.propTypes = {
  play: PropTypes.string.isRequired,
  save: PropTypes.string.isRequired,
}

export default VideoPlaybar
