import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

import ReadEstimate from '../ReadEstimate'

const TextView = props => {
  const { title, content, tags } = props
  let tagCounter = 0

  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <ReadEstimate text={content} />
      </div>

      <article>{content}</article>

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

TextView.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}

TextView.defaultProps = {
  tags: [],
}

export default TextView
