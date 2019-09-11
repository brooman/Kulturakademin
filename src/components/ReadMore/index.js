import React from 'react'

import styles from './index.module.scss'

const ReadMore = () => {
  return (
    <div className={styles.readMore}>
      <p>Read more</p>
      <div className={styles.arrow}>-&gt;</div>
    </div>
  )
}

export default ReadMore
