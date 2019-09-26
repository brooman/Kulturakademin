import React, { useState } from 'react'
import YouTube from 'react-youtube'
import usePlayer from '../../Hooks/usePlayer'
import styles from './index.module.scss'
import VideoView from '../VideoView'
import PlayIcon from '../../icons/PlayIcon'
import PauseIcon from '../../icons/PauseIcon'
import RollbackIcon from '../../icons/RollbackIcon'
import OptionsMenuIcon from '../../icons/OptionsMenuIcon'
import ProgressBar from './ProgressBar'

const PreviewImage = props => {
  const { image, hide } = props

  return (
    <div
      className={[styles.preview, styles.imagePreview].join(' ')}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${image})`,
        display: hide ? 'none' : 'block',
      }}
    />
  )
}

const internalPlayer = (resource, playing, setRef, minimized) => {
  switch (resource.type) {
    case 'video':
      const containerClassName = !playing ? styles.hidden : null

      return (
        <div className={minimized ? styles.smallPreview : styles.largePreview}>
          <PreviewImage className={styles.preview} hide={playing} image={resource.image} />
          <YouTube
            videoId={resource.trackingId}
            opts={{
              height: '100%',
              width: '100%',
              playerVars: { autoplay: 1, controls: 0, fs: 0, modestbranding: 1, disablekb: 1 },
            }}
            onReady={e => {
              setRef(e.target)
            }}
            className={styles.preview}
            containerClassName={[styles.previewContainer, containerClassName].join(' ')}
          />
        </div>
      )
    case 'pod':
      return (
        <div className={minimized ? styles.smallPreview : styles.largePreview}>
          <PreviewImage className={styles.preview} hide={minimized} image={resource.image} />
          <iframe
            title="soundcloudPlayer"
            id="soundcloudPlayer"
            width="1"
            height="1"
            scrolling="no"
            onLoad={e => {
              setRef(window.SC.Widget(e.target))
            }}
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${resource.trackingId}`}
          />
        </div>
      )
    default:
      return null
  }
}

const Player = () => {
  const { resource, reference, playing, togglePlaying, rollback, setRef } = usePlayer()
  const [minimized, setMinimized] = useState(false)

  if (resource) {
    return (
      <div className={styles.container}>
        {internalPlayer(resource, playing, setRef, minimized)}
        {!minimized && <VideoView resource={resource} />}
        <div className={styles.player}>
          {reference ? (
            <ProgressBar reference={reference} type={resource.type} />
          ) : (
            <div className={styles.progressBar} />
          )}
          <div className={styles.playerBody}>
            <div
              className={styles.dragableArea}
              onClick={() => {
                setMinimized(!minimized)
              }}
              onKeyUp={() => {
                setMinimized(!minimized)
              }}
              role="link"
              tabIndex={0}
            >
              <div className={styles.marquee}>
                <span>{resource.title}</span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={togglePlaying} type="button">
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>

              <button className={styles.button} onClick={rollback} type="button">
                <RollbackIcon />
              </button>

              <button className={styles.button} type="button">
                <OptionsMenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Player
