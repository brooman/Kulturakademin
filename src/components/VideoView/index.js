import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

import Hero from '../Hero'
import VideoPlaybar from '../VideoPlaybar'
import ShareButton from '../ShareButton'

const VideoView = props => {
  const { year, episodeNo, episodeNos, title, content, tags } = props
  let tagCounter = 0

  // <iframe title={title} width="560" height="315" src={url} />

  return (
    <div className="wrapper">
      <Hero image="Video.png" text="" />
      <VideoPlaybar play="play" save="save" />
      <div className={styles.infoWrapper}>
        <div className={styles.overviewInfo}>
          <p>
            <span>{year}</span>
            <span> | </span>
            <span>Avsnitt</span>
            <span>{episodeNo}</span>
            <span>/</span>
            <span>{episodeNos}</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
        </div>

        <div className={styles.tags}>
          <p className={styles.tagsTitle}>Taggar</p>
          {tags.map(tag => {
            tagCounter += 1

            return (
              <p className={styles.tag} key={tagCounter}>
                {tag}
              </p>
            )
          })}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <ShareButton />
      </div>
    </div>
  )
}

VideoView.propTypes = {
  year: PropTypes.number.isRequired,
  episodeNo: PropTypes.number.isRequired,
  episodeNos: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}

VideoView.defaultProps = {
  tags: [],
}

export default VideoView
