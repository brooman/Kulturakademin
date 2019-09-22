import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './index.module.scss'

import Menu from '../Menu'
import LogoIcon from '../../icons/LogoIcon'
import HamburgerIcon from '../../icons/HamburgerIcon'
import SearchIcon from '../../icons/SearchIcon'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuShown: false,
      up: true,
      scrollPos: 0,
    }
    this.closeMenu = this.closeMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  // Get the icons to disappear and show again when user scrolls
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      up: document.body.getBoundingClientRect().top > scrollPos,
    })
  }

  // Prevent the icons to disappear when menu is open.
  toggleMenu = () => {
    this.setState(prevState => {
      window.removeEventListener('scroll', this.handleScroll)
      document.addEventListener('click', this.closeMenu)
      return { menuShown: !prevState.menuShown }
    })
  }

  // Close dropdown menu on click
  closeMenu() {
    this.setState({ menuShown: false }, () => {
      window.addEventListener('scroll', this.handleScroll)
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render() {
    const { menuShown } = this.state

    return (
      <div className={styles.top}>
        <header>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <LogoIcon />
          </Link>

          <div className={this.state.up ? styles.up : styles.down}>
            <div className={styles.navbar}>
              <SearchIcon />
              <button className={styles.menuBtn} type="button" onClick={this.toggleMenu}>
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </header>
        <Menu show={menuShown} />
      </div>
    )
  }
}

export default Header
