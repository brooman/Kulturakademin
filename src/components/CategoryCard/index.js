import React from 'react'
import PropTypes from 'prop-types'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import PodIcon from '../../icons/PodIcon'
import VideoIcon from '../../icons/VideoIcon'

import styles from './index.module.scss'

const CategoryCard = props => {
  const { order, item, displayMode } = props

  const { type, year, episodeNr, episodesInSeries, title, image, content } = item
  const img = { backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')` }

  return (
    <div className={[styles.card, styles.listView].join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={img} />
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.cardInfo}>
            <div className={styles.infoWrapper}>
              <p>
                <span>Avsnitt </span>
                <span>{episodeNr}</span>
                <span>/</span>
                <span>{episodesInSeries}</span>
              </p>
              <p>
                <span>34</span>
                <span> min</span>
              </p>
            </div>
            <div className={styles.iconWrapper}>
              {type === 'audio' ? <PodIcon /> : <VideoIcon />}
            </div>
          </div>

          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  // displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default CategoryCard
