/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const MobileIcon = props => {
  const { color } = props

  return (
    <svg width="29" height="47" viewBox="0 0 29 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.65 0H4.35C1.94844 0 0 1.97363 0 4.40625V42.5938C0 45.0264 1.94844 47 4.35 47H24.65C27.0516 47 29 45.0264 29 42.5938V4.40625C29 1.97363 27.0516 0 24.65 0ZM14.5 44.0625C12.8959 44.0625 11.6 42.7498 11.6 41.125C11.6 39.5002 12.8959 38.1875 14.5 38.1875C16.1041 38.1875 17.4 39.5002 17.4 41.125C17.4 42.7498 16.1041 44.0625 14.5 44.0625Z"
        fill={color}
      />
    </svg>
  )
}

MobileIcon.propTypes = {
  color: PropTypes.string,
}

MobileIcon.defaultProps = {
  color: '#fff',
}

export default MobileIcon
