import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ContentView from './pages/ContentView'

import Filter from './components/Filter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterShown: false,
    }
  }

  toggleFilter = () => {
    this.setState(prevState => {
      return { filterShown: !prevState.filterShown }
    })
  }

  render() {
    const { filterShown } = this.state

    return (
      <Router>
        <div className="App">
          <header>
            <div className="logo">K</div>
            <button className="btn filter-btn" type="button" onClick={this.toggleFilter}>
              Filter v
            </button>
            <div className="mykplay">&lt;3</div>
          </header>

          <Filter show={filterShown} />

          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/view/:type/:id" component={ContentView} />
            <Route path="/about/" component={About} />
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
