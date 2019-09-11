import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = props => {
  const { color } = props

  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="2.48019" fill={color} />
      <rect y="7.44067" width="21" height="2.48019" fill={color} />
      <rect x="5.72705" y="14.8811" width="15.2727" height="2.48019" fill={color} />
    </svg>
  )
}

Hamburger.propTypes = {
  color: PropTypes.string,
}

Hamburger.defaultProps = {
  color: '#fff',
}

export default Hamburger
