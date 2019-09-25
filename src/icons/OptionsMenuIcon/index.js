/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const OptionsMenuIcon = props => {
  const { color } = props

  return (
    <svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="3" cy="23" rx="3" ry="3" transform="rotate(-90 3 23)" fill={color} />
      <ellipse cx="3" cy="13" rx="3" ry="3" transform="rotate(-90 3 13)" fill={color} />
      <ellipse cx="3" cy="3" rx="3" ry="3" transform="rotate(-90 3 3)" fill={color} />
    </svg>
  )
}

OptionsMenuIcon.propTypes = {
  color: PropTypes.string,
}

OptionsMenuIcon.defaultProps = {
  color: '#fff',
}

export default OptionsMenuIcon
