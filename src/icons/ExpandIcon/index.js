/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const ExpandIcon = props => {
  const { color } = props

  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
