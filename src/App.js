import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ContentView from './pages/ContentView'
import Discover from './pages/Discover'

import Menu from './components/Menu'
import LogoIcon from './icons/LogoIcon'
import HamburgerIcon from './icons/HamburgerIcon'
import SearchIcon from './icons/SearchIcon'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuShown: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return { menuShown: !prevState.menuShown }
    })
  }

  render() {
    const { menuShown } = this.state

    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/">
              <LogoIcon />
            </Link>

            <div className="navbar">
              <SearchIcon />
              <button className="btn menu-btn" type="button" onClick={this.toggleMenu}>
                <HamburgerIcon />
              </button>
            </div>
          </header>
          <Menu show={menuShown} />

          <div className="content">
            <Route path={`${process.env.PUBLIC_URL  }/`} exact component={Home} />
            <Route path={`${process.env.PUBLIC_URL  }/discover`} component={Discover} />
            <Route path={`${process.env.PUBLIC_URL  }/view/:type/:id`} component={ContentView} />
            <Route path={`${process.env.PUBLIC_URL  }/about`} component={About} />
          </div>

          <footer>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/view/video/128">View</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
