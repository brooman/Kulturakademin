import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Discover from './pages/Discover'

import CategoryView from './pages/CategoryView'

import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
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
            <Route
              path={`${process.env.PUBLIC_URL}/category/:categoryType`}
              component={CategoryView}
            />
            <Contact />
            <Footer
              text="LADDA NER APPVERSION"
              infoTextLeft="Integritetspolicy"
              infoTextRight="Inställningar"
              cooperateCompany="K-Play finansieras av"
              image="images/vrgLogo.png"
            />
          </div>
          <Player />
        </div>
      </Router>
    </PlayerContextProvider>
  )
}

export default App
