import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import styles from './index.module.scss'

const categories = [
  {
    id: 0,
    name: 'Ljud',
    link: '/discover/audio',
  },
  {
    id: 1,
    name: 'Ljus',
    link: '/discover/light',
  },
  {
    id: 2,
    name: 'Dans',
    link: '/discover/dance',
  },
  {
    id: 3,
    name: 'Musik',
    link: '/discover/music',
  },
  {
    id: 4,
    name: 'TV',
    link: '/discover/television',
  },
  {
    id: 5,
    name: 'Tal',
    link: '/discover/television',
  },
]

const Menu = props => {
  const { show } = props

  if (show) {
    return (
      <div className={styles.menu}>
        {categories.map(category => {
          const { id, name, link } = category
          return (
            <div key={id} className={styles.category}>
              <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
            </div>
          )
        })}
      </div>
    )
  }

  return null
}

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Menu
