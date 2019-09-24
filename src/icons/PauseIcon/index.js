/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const PauseIcon = props => {
  const { color } = props

  return (
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24H6.33333V0H0V24ZM12.6667 0V24H19V0H12.6667Z" fill={color} />
    </svg>
  )
}

PauseIcon.propTypes = {
  color: PropTypes.string,
}

PauseIcon.defaultProps = {
  color: '#fff',
}

export default PauseIcon
