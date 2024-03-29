/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const ExpandIcon = props => {
  const { color, expanded } = props

  return (
    <svg
      className={[styles.icon, expanded ? styles.expanded : styles.minimized].join(' ')}
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L8 8L15 1" stroke={color} strokeWidth="2" />
    </svg>
  )
}

ExpandIcon.propTypes = {
  color: PropTypes.string,
}

ExpandIcon.defaultProps = {
  color: '#fff',
}

export default ExpandIcon
