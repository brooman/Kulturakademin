import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const ErrorPage = props => {
  const { statusCode } = props

  return (
    <div className={styles.errorPage}>
      <h1>An Error has occured</h1>
      <h2>Status code: {statusCode}</h2>
    </div>
  )
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
}

export default ErrorPage
