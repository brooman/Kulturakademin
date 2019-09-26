import React from 'react'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import styles from './index.module.scss'

const getViewStyle = displayMode => {
  switch (displayMode) {
    case 'list':
      return styles.listView
    case 'grid':
      return styles.gridView
    case 'singleCard':
      return styles.singleCard
    default:
      return styles.gridView
  }
}

const ShowMoreCard = props => {
  const { title, displayMode } = props

  const viewStyle = getViewStyle(displayMode)

  return (
    <div className={[styles.card, styles.ShowMoreCard, viewStyle].join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} />
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.readMore}>
        <p>&nbsp;</p>
        <div className={styles.arrow}>
          <ReadMoreIcon />
        </div>
      </div>
    </div>
  )
}

export default ShowMoreCard
