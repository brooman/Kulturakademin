import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const Filter = props => {
  const { show } = props

  if (show) {
    return <div className={styles.filter}>djksdasdlsadhlsaklaksjdlsak</div>
  }

  return null
}

Filter.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Filter
