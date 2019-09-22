import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ContentView from './pages/ContentView'
import Discover from './pages/Discover'
import Header from './components/Header'
import Player from './components/Player'
import { PlayerContextProvider } from './Hooks/PlayerContextProvider'

function App() {
  return (
    <PlayerContextProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/discover`} component={Discover} />
            <Route path={`${process.env.PUBLIC_URL}/view/:type/:id`} component={ContentView} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
          </div>
          <footer>
            <ul>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/view/video/128`}>View</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/about/`}>About</Link>
              </li>
            </ul>
          </footer>
          <Player />
        </div>
      </Router>
    </PlayerContextProvider>
  )
}

export default App
