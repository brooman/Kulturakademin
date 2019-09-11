import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const Menu = props => {
  const { show } = props

  if (show) {
    return <div className={styles.menu}>djksdasdlsadhlsaklaksjdlsak</div>
  }

  return null
}

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Menu
