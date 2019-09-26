import React from 'react'
import PropTypes from 'prop-types'
import PodIcon from '../../icons/PodIcon'
import VideoIcon from '../../icons/VideoIcon'

import styles from './index.module.scss'
<<<<<<< HEAD

const CategoryCard = props => {
=======
import usePlayer from '../../Hooks/usePlayer'

const CategoryCard = props => {
  const { initPlayer } = usePlayer()
>>>>>>> b7630e7fafbbabb058ff0038a6e9cad81c11b0e3
  const { order, item } = props

  const { type, episodeNr, episodesInSeries, title, image } = item
  const img = { backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')` }

  return (
<<<<<<< HEAD
    <div className={styles.card}>
=======
    <div
      className={styles.card}
      onClick={() => {
        initPlayer(item.type, item.id)
      }}
    >
>>>>>>> b7630e7fafbbabb058ff0038a6e9cad81c11b0e3
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
              {type === 'pod' ? <PodIcon color="#cbcbcb" /> : <VideoIcon color="#cbcbcb" />}
            </div>
          </div>

          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default CategoryCard
