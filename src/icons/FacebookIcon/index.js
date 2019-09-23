/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

const FacebookIcon = props => {
  const { color } = props

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.04 0H0.96C0.429 0 0 0.429 0 0.96V23.04C0 23.571 0.429 24 0.96 24H23.04C23.571 24 24 23.571 24 23.04V0.96C24 0.429 23.571 0 23.04 0ZM20.268 7.005H18.351C16.848 7.005 16.557 7.719 16.557 8.769V11.082H20.145L19.677 14.703H16.557V24H12.816V14.706H9.687V11.082H12.816V8.412C12.816 5.313 14.709 3.624 17.475 3.624C18.801 3.624 19.938 3.723 20.271 3.768V7.005H20.268Z"
        fill={color}
      />
    </svg>
  )
}

FacebookIcon.propTypes = {
  color: PropTypes.string,
}

FacebookIcon.defaultProps = {
  color: '#CBCBCB',
}

export default FacebookIcon
