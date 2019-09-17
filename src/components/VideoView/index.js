import React from 'react'

import styles from './index.module.scss'

import Hero from '../Hero'
import VideoPlaybar from '../VideoPlaybar'
import ShareButton from '../ShareButton'

import Mocker from '../../mock/mocker'
import usePlayer from '../../Hooks/usePlayer'

const VideoView = props => {
  const { year, episodeNo, episodeNos, title, content, tags } = props.resource
  let tagCounter = 0

  const { resource, setResource } = usePlayer()
  if (resource !== props.resource) {
    setResource(props.resource)
  }

  return (
    <div className="wrapper">
      <Hero image="images/video.png" text="" />
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

export default VideoView
