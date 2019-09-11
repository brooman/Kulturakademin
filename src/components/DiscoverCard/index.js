import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

import ReadMore from '../ReadMore'

const DiscoverCard = props => {
  const { order, item, displayMode } = props
  const { id, type, title, content } = item
  // const img = { backgroundImage: `url('${image}')` }

  const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
  const background = order % 2 === 1 ? styles.dark : styles.light
  const link = `/view/${type}/${id}`

  return (
    <div className={[styles.card, viewStyle, background].join(' ')}>
      <Link to={link}>
        <div className={styles.image} />
      </Link>
      <div className={styles.body}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <ReadMore />
      </div>
    </div>
  )
}

DiscoverCard.propTypes = {
  displayMode: PropTypes.string.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DiscoverCard
