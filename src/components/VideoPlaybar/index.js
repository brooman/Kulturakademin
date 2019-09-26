import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const VideoPlaybar = props => {
  const { play, save } = props

  return (
    <div className={styles.wrapper}>
      <p>{play}</p>
<<<<<<< HEAD
      <p className={styles.save}>{save}</p>
=======
      <p>{save}</p>
>>>>>>> b7630e7fafbbabb058ff0038a6e9cad81c11b0e3
    </div>
  )
}

VideoPlaybar.propTypes = {
  play: PropTypes.string.isRequired,
  save: PropTypes.string.isRequired,
}

export default VideoPlaybar
