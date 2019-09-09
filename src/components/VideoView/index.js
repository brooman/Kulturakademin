import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const VideoView = props => {
  const { title, content, url, tags } = props
  let tagCounter = 0

  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <iframe title={title} width="560" height="315" src={url} />
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

VideoView.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}

VideoView.defaultProps = {
  tags: [],
}

export default VideoView
