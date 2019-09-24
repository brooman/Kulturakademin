import React from 'react'
import PropTypes from 'prop-types'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import PodIcon from '../../icons/PodIcon'

import styles from './index.module.scss'

const CategoryCard = props => {
  const { order, item, displayMode } = props

  const { year, episodeNr, episodesInSeries, title, image, content } = item
  const img = { backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')` }

  return (
    <div className={[styles.card, styles.listView].join(' ')}>
      <div className={styles.image} style={img} />
      <div className={styles.body}>
        <PodIcon />
        <div className={styles.content}>
          <div className={styles.cardInfo}>
            <p>
              <span>34</span>
              <span> min</span>
              <span> | </span>
              <span>Avsnitt </span>
              <span>{episodeNr}</span>
              <span>/</span>
              <span>{episodesInSeries}</span>
            </p>
            <div className={styles.cardYear}>
              <p>
                <span>{year}</span>
              </p>
            </div>
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

CategoryCard.propTypes = {
  // displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default CategoryCard
