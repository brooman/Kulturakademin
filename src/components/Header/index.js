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
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      up: document.body.getBoundingClientRect().top > scrollPos,
    })
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return { menuShown: !prevState.menuShown }
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
