import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import PodIcon from '../../icons/PodIcon'
import VideoIcon from '../../icons/VideoIcon'

import styles from './index.module.scss'

const PlayCard = props => {
  const { item, displayMode } = props

  const { image, content } = item
  const img = { backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')` }

  // trying
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

  const viewStyle = getViewStyle(displayMode)

  const link = `/view/${item.type}/${item.id}`

  return (
    <div className={[styles.card, viewStyle].join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={img} />
      </div>
      <div className={styles.body}>
        <Link to={link}>
          <div className={styles.readMore}>
            <p>{content}</p>
            <div className={styles.arrow}>
              <ReadMoreIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

PlayCard.propTypes = {
  displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PlayCard
