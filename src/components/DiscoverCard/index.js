import React from 'react'
import PropTypes from 'prop-types'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import PodIcon from '../../icons/PodIcon'
import VideoIcon from '../../icons/VideoIcon'
import usePlayer from '../../Hooks/usePlayer'
import styles from './index.module.scss'

const DiscoverCard = props => {
  const { item, displayMode } = props
  const { initPlayer } = usePlayer()
  const { type, length, year, episodeNr, episodesInSeries, title, image, content } = item
  const img = { backgroundImage: `url('${process.env.PUBLIC_URL}/${image}')` }

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

  return (
    <div
      className={[styles.card, viewStyle].join(' ')}
      onClick={() => {
        initPlayer(item.type, item.id)
      }}
      role="link"
      tabIndex={0}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={img} />
        <div className={styles.iconWrapper}>{type === 'pod' ? <PodIcon /> : <VideoIcon />}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.cardInfo}>
            <p>
              <span>{length}</span>
              <span> min</span>
              <span className={styles.infoSeparator}>|</span>
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

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{content}</p>
        </div>
        <div
          onClick={() => {
            initPlayer(item.type, item.id)
          }}
          role="link"
          tabIndex={0}
        >
          <div className={styles.readMore}>
            <p>Läs mer</p>
            <div className={styles.arrow}>
              <ReadMoreIcon />
            </div>
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
