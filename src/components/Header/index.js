import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

import Menu from '../Menu'
import HamburgerIcon from '../../icons/HamburgerIcon'
import SearchIcon from '../../icons/SearchIcon'
import SearchBar from '../SearchBar'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuShown: false,
      up: true,
      scrollPos: 0,
      SearchBarOpen: false,
    }
  }

  // Get the icons to disappear and show again when user scrolls
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // Prevent the icons to disappear when menu is open.
  toggleMenu = () => {
    this.setState(prevState => {
      window.removeEventListener('scroll', this.handleScroll)
      document.addEventListener('click', this.closeMenu)
      return { menuShown: !prevState.menuShown }
    })
  }

  handleScroll = () => {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      up: document.body.getBoundingClientRect().top > scrollPos,
    })
  }

  // Close dropdown menu on click
  closeMenu = () => {
    this.setState({ menuShown: false }, () => {
      window.addEventListener('scroll', this.handleScroll)
      document.removeEventListener('click', this.closeMenu)
    })
  }

  toggleSearch = () => {
    this.setState(prevState => {
      return { SearchBarOpen: !prevState.SearchBarOpen }
    })
  }

  render() {
    const { menuShown, SearchBarOpen, up } = this.state

    return (
      <div className={styles.top}>
        <header>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <div className={styles.imageWrapper}>
              <img src={`${process.env.PUBLIC_URL}/images/k-logo.gif`} alt="K-Play" />
            </div>
          </Link>

          <div className={up ? styles.up : styles.down}>
            <div className={styles.navbar}>
              <button className={styles.menuBtn} type="button" onClick={this.toggleSearch}>
                <SearchIcon />
              </button>
              <button className={styles.menuBtn} type="button" onClick={this.toggleMenu}>
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </header>
        <Menu show={menuShown} />
        <SearchBar show={SearchBarOpen} toggle={this.toggleSearch} />
      </div>
    )
  }
}

export default Header
