import React from 'react'

import styles from './index.module.scss'

const FilterTypes = () => {
  return (
    <div className={styles.row}>
      <p>Filtrera</p>
      <div>
        <button type="button" className={styles.active}>
          Allt
        </button>
        <button type="button">Video</button>
        <button type="button">Pod</button>
      </div>
    </div>
  )
}

export default FilterTypes
