import React from 'react'

import styles from './index.module.scss'

const SaveButton = () => {
  return (
    <div className={styles.button}>
      <button className={styles.text} type="button">
        Save
      </button>
    </div>
  )
}

export default SaveButton
