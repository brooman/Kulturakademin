/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const GridViewiconIcon = props => {
  const { color } = props

  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.611328" width="13.0612" height="13.0612" fill="#C4C4C4" />
      <rect x="16.9379" width="13.0612" height="13.0612" fill="#C4C4C4" />
      <rect x="16.9379" y="16.3265" width="13.0612" height="13.0612" fill="#C4C4C4" />
      <rect x="0.611328" y="16.3265" width="13.0612" height="13.0612" fill="#C4C4C4" />
    </svg>
  )
}

GridViewiconIcon.propTypes = {
  color: PropTypes.string,
}

GridViewiconIcon.defaultProps = {
  color: '#C4C4C4',
}

export default GridViewiconIcon
