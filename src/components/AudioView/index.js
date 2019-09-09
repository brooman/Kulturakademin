import React from 'react'
import PropTypes from 'prop-types'
import Player from 'react-soundcloud-player'
import styles from './index.module.scss'

const AudioView = props => {
  const { title, content, trackingId, tags } = props
  let tagCounter = 0

  const audioKey = process.env.REACT_APP_SOUNDCLOUD_API_KEY

  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <Player client_id={audioKey} audio_id={trackingId} title={title} />
        <p>{content}</p>
      </div>

      <div className={styles.tags}>
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
  )
}

AudioView.propTypes = {
  title: PropTypes.string.isRequired,
  trackingId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}

AudioView.defaultProps = {
  tags: [],
}

export default AudioView
