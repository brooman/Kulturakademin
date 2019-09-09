import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

/**
 * Calculate average reading time based on Words / Average "Words per Minute" reading speed
 *
 * @param {String} text
 */
const calculateEstimate = text => {
  const averageWPM = 250
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.floor(wordCount / averageWPM)

  return minutes > 0 ? `${minutes} minutes` : '1 minute'
}

const ReadEstimate = props => {
  const { text } = props
  const time = calculateEstimate(text)

  return <div className={styles.readEstimate}>{time}</div>
}

ReadEstimate.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ReadEstimate
