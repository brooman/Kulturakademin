/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const PlayIcon = props => {
  const { color } = props

  return (
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L19 12L0 24V0Z" fill={color} />
    </svg>
  )
}

PlayIcon.propTypes = {
  color: PropTypes.string,
}

PlayIcon.defaultProps = {
  color: '#fff',
}

export default PlayIcon
