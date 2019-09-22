import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SearchIcon from '../../icons/SearchIcon'

import styles from './index.module.scss'

const Menu = props => {
  const { show } = props

  if (show) {
    return (
      <div>
        {/* <button className={styles.closeIcon}>
          <SearchIcon type="button" />
        </button> */}

        <div className={styles.menu}>
          <Link to={`${process.env.PUBLIC_URL}/discover/audio`}>Ljud</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/light`}>Ljus</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/dance`}>Dans</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/music`}>Musik</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/television`}>Tv</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/dance`}>Tal</Link>
          <Link
            className={styles.hightlightedBackground}
            to={`${process.env.PUBLIC_URL}/discover/dance`}
          >
            Fortsätt/Sparade
          </Link>
          <Link
            className={styles.hightlightedBackground}
            to={`${process.env.PUBLIC_URL}/discover/dance`}
          >
            Senaste
          </Link>
          <Link
            className={styles.hightlightedBackground}
            to={`${process.env.PUBLIC_URL}/discover/dance`}
          >
            Mest visade
          </Link>
          <Link
            className={styles.hightlightedBackground}
            to={`${process.env.PUBLIC_URL}/discover/dance`}
          >
            Taggar
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/dance`}>Om</Link>
          <Link to={`${process.env.PUBLIC_URL}/discover/dance`}>Inställningar</Link>
        </div>
      </div>
    )
  }
  return null
}

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Menu
