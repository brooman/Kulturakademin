import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CloseIcon from '../../icons/CloseIcon'

import styles from './index.module.scss'

const Menu = props => {
  const { show } = props

  if (show) {
    return (
      <div>
        <button className={styles.closeIcon}>
          <CloseIcon type="button" />
        </button>

        <div className={styles.menu}>
          <Link to={`${process.env.PUBLIC_URL}/category/Dans`}>Dans</Link>
          <Link to={`${process.env.PUBLIC_URL}/category/Film`}>Film</Link>
          <Link to={`${process.env.PUBLIC_URL}/category/Musik`}>Musik</Link>
          <Link to={`${process.env.PUBLIC_URL}/category/Radio`}>Radio</Link>
          <Link to={`${process.env.PUBLIC_URL}/category/TV`}>Tv</Link>
          <Link className={styles.hightlightedBackground} to={`${process.env.PUBLIC_URL}/`}>
            Fortsätt/Sparade
          </Link>
          <Link className={styles.hightlightedBackground} to={`${process.env.PUBLIC_URL}/`}>
            Senaste
          </Link>
          <Link className={styles.hightlightedBackground} to={`${process.env.PUBLIC_URL}/`}>
            Mest visade
          </Link>
          <Link className={styles.hightlightedBackground} to={`${process.env.PUBLIC_URL}/`}>
            Taggar
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/`}>Om</Link>
          <Link to={`${process.env.PUBLIC_URL}/`}>Inställningar</Link>
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
