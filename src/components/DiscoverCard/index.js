import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReadMoreIcon from '../../icons/ReadMoreIcon'

import styles from './index.module.scss'

const DiscoverCard = props => {
  const year = '2019'
  const length = '34'
  const episodeNo = '1'
  const episodeNos = '8'

  const { order, item, displayMode } = props
  const { id, type, title, image, content } = item
  const img = { backgroundImage: `url('images/${image}')` }
  const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
  const background = order % 2 === 1 ? styles.dark : styles.light
  const link = `/view/${type}/${id}`

  return (
    <div className={[styles.card, viewStyle, background].join(' ')}>
      <div className={styles.image} style={img} />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.cardInfo}>
            <p>{length} min</p>
            <p>{year}</p>
          </div>
          <div className={styles.episodeInfo}>
            <p>Avsnitt {episodeNo}/</p>
            <p>{episodeNos}</p>
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
