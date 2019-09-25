import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReadMoreIcon from '../../icons/ReadMoreIcon'
import PlayIcon from '../../icons/PlayIcon'

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

  const ProgressBar = props => {
    const { currentTime, duration } = props

    const progress = (currentTime / duration) * 100

    const progressBar = {
      backgroundImage: `linear-gradient(to right, #cd7b2a, #cd7b2a ${progress}%, #fff ${progress}%, #fff 100%)`,
    }

    return <div className={styles.progressBar} style={progressBar} />
  }

  const viewStyle = getViewStyle(displayMode)

  const link = `/view/${item.type}/${item.id}`

  // return (
  //   <div className={[styles.card, viewStyle].join(' ')}>
  //     <div className={styles.imageWrapper}>
  //       <div className={styles.image} style={img} />
  //     </div>
  //     <div className={styles.body}>
  //       <ProgressBar />
  //       <Link to={link}>
  //         <div className={styles.readMore}>
  //           <p>{content}</p>
  //           <div className={styles.arrow}>
  //             <PlayIcon />
  //           </div>
  //         </div>
  //       </Link>
  //     </div>
  //   </div>
  // )
  return (
    <div className={[styles.card, viewStyle].join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} style={img} />
      </div>
      <div className={styles.body}>
        <ProgressBar />
        <Link to={link}>
          <div className={styles.content}>
            <p className={styles.description}>{content}</p>
            <div className={styles.playIcon}>
              <PlayIcon />
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
