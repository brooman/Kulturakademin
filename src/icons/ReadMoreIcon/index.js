/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const ReadMoreIcon = props => {
  const { color } = props

  return (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5679 1L26.1358 7L19.5679 13" stroke={color} stroke-width="2" />
      <line x1="26" y1="7" y2="7" stroke={color} stroke-width="2" />
    </svg>
  )
}

ReadMoreIcon.propTypes = {
  color: PropTypes.string,
}

ReadMoreIcon.defaultProps = {
  color: '#fff',
}

export default ReadMoreIcon
