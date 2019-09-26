import React from 'react'
import styles from './index.module.scss'
import VideoPlaybar from '../VideoPlaybar'
import VideoIcon from '../../icons/VideoIcon'
import PodIcon from '../../icons/PodIcon'
import ShareButton from '../ShareButton'
import SaveButton from '../SaveButton'
import CategoryGroup from '../CategoryGroup'
import DiscoverGroup from '../DiscoverGroup'
import Contact from '../Contact'
import Footer from '../Footer'
import usePlayer from '../../Hooks/usePlayer'

import Mocker from '../../mock/mocker'

const VideoView = props => {
  const { togglePlaying } = usePlayer()
  const { resource, children } = props
  const { year, episodeNr, episodesInSeries, title, time, content, tags, coOrganizers } = resource
  let tagCounter = 0
  let coOrganizerCounter = 0

  const items = Mocker('highlighted')

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
            <span>Avsnitt </span>
            <span>{episodeNr}</span>
            <span> / </span>
            <span>{episodesInSeries}</span>
          </p>
        </div>
        <div className={styles.mainInfo}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <ShareButton />
          <SaveButton />
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
          <p className={styles.coOrganizersTitle}>Medarrangörer</p>
          {coOrganizers.map(coOrganizer => {
            coOrganizerCounter += 1

            return (
              <p className={styles.tag} key={coOrganizerCounter}>
                {coOrganizer}
              </p>
            )
          })}
        </div>
        <CategoryGroup title="Fler avsnitt" displayMode="list" items={items} />
        <DiscoverGroup title="Relaterade" displayMode="grid" items={items} />
        <Contact />
        <Footer
          text="LADDA NER APPVERSION"
          infoTextLeft="Integritetspolicy"
          infoTextRight="Inställningar"
          cooperateCompany="K-Play finansieras av"
          image="images/vrgLogo.png"
        />
      </div>
    </div>
  )
}

export default VideoView
