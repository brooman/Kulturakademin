/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = props => {
  const { color, backgroundColor } = props

  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill={backgroundColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.75375"
        width="23.689"
        height="2.48019"
        transform="rotate(45 1.75375 0)"
        fill={color}
      />
      <rect
        x="0.752289"
        y="16.7507"
        width="23.689"
        height="2.48019"
        transform="rotate(-45 0.752289 16.7507)"
        fill={color}
      />
    </svg>
  )
}

CloseIcon.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

CloseIcon.defaultProps = {
  color: '#fff',
  backgroundColor: '#242424',
}

export default CloseIcon
