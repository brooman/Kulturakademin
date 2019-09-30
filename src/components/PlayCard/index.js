import React from 'react'
import PropTypes from 'prop-types'
import PlayIcon from '../../icons/PlayIcon'
import styles from './index.module.scss'
import usePlayer from '../../Hooks/usePlayer'

const PlayCard = props => {
  const { item, displayMode } = props
  const { initPlayer } = usePlayer()
  const { image, title } = item
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

  const ProgressBar = () => {
    const progress = Math.floor(Math.random() * 100)
    const progressBar = {
      backgroundImage: `linear-gradient(to right, #cd7b2a, #cd7b2a ${progress}%, #fff ${progress}%, #fff 100%)`,
    }

    return <div className={styles.progressBar} style={progressBar} />
  }

  const viewStyle = getViewStyle(displayMode)

  return (
    <div className={[styles.card, viewStyle].join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={img} />
      </div>
      <div className={styles.body}>
        <ProgressBar />

        <div
          onClick={() => {
            initPlayer(item.type, item.id)
          }}
          role="link"
          tabIndex={0}
        >
          <div className={styles.content}>
            <p className={styles.description}>{title}</p>
            <div className={styles.playIcon}>
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PlayCard.propTypes = {
  displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PlayCard
