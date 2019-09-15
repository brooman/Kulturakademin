import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import ReadMoreIcon from '../../icons/ReadMoreIcon'

import styles from './index.module.scss'

const DiscoverCard = props => {
  // Data så länge, ska byta ut.
  const length = '34'

  const { order, item, displayMode } = props

  const { year, episodeNr, episodesInSeries, title, image, content } = item
  const img = { backgroundImage: `url('images/${image}')` }
  const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
  const background = order % 2 === 1 ? styles.dark : styles.light
  // const link = `/view/${type}/${id}`

  return (
    <div className={[styles.card, viewStyle, background].join(' ')}>
      <div className={styles.image} style={img} />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.cardInfo}>
            <p>
              <span>{length}</span>
              <span> min</span>
            </p>
            <p>{year}</p>
          </div>
          <div className={styles.episodeInfo}>
            <p>
              <span>Avsnitt </span>
              <span>{episodeNr}</span>
              <span>{episodesInSeries}</span>
            </p>
          </div>
          <h3>{title}</h3>
          <p className={styles.description}>{content}</p>
        </div>
        <div className={styles.readMore}>
          <p>Läs mer</p>
          <div className={styles.arrow}>
            <ReadMoreIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

DiscoverCard.propTypes = {
  displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DiscoverCard
