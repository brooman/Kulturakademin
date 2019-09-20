import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HamburgerIcon from '../../icons/HamburgerIcon'

import PropTypes from 'prop-types'
import styles from './index.module.scss'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
      categories: [
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
      ],
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render() {
    const { categories } = this.state
    return (
      <div>
        <div className={styles.menu}>
          <button onClick={this.showMenu}>
            <HamburgerIcon />
          </button>
          {this.state.showMenu ? (
            <div>
              {categories.map(category => {
                const { id, name, link } = category
                return (
                  <div key={id} className={styles.category}>
                    <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
                  </div>
                )
              })}
              <Link to="/">
                <p>Fortsätt>/Sparade</p>
              </Link>
              <Link to="/">
                <p>Senaste</p>
              </Link>
              <Link to="/">
                <p>Mest visade</p>
              </Link>
              <Link to="/">
                <p>Taggar</p>
              </Link>
              <Link to="/">
                <p>Om</p>
              </Link>
              <Link to="/">
                <p>Mest visade</p>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Menu
