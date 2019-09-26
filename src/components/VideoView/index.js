import React from 'react'
import styles from './index.module.scss'
import VideoPlaybar from '../VideoPlaybar'
import VideoIcon from '../../icons/VideoIcon'
import PodIcon from '../../icons/PodIcon'
import ShareButton from '../ShareButton'
import SaveButton from '../SaveButton'
import usePlayer from '../../Hooks/usePlayer'

const VideoView = props => {
  const { togglePlaying } = usePlayer()
  const { resource, children } = props
  const { year, episodeNo, episodeNos, title, time, content, tags } = resource
  let tagCounter = 0

  return (
    <div className={styles.container}>
      {children}
      <div className={styles.videoOptionsBar}>
        <VideoPlaybar
          onClick={() => {
            togglePlaying()
          }}
          play="play"
          save="spara"
        />
        <div className={styles.videoIconBox}>
          {resource.type === 'video' ? <VideoIcon /> : <PodIcon />}
          <p className={styles.videoIconBoxText}>{time}</p>
        </div>
      </div>
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
        <SaveButton />
      </div>
    </div>
  )
}

export default VideoView
