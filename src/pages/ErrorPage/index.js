import React from 'react'
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

export default ErrorPage
