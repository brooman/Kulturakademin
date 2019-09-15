import React, { Component } from 'react'

import Hero from '../../components/Hero'
import DiscoverGroup from '../../components/DiscoverGroup'
import FilterTypes from '../../components/FilterTypes'

class Discover extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'all',
      data: [],
    }
  }

  componentDidMount() {
    const endpoint = `${process.env.REACT_APP_API_URL}/video/`

    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: [
            {
              title: 'Latest',
              items: json,
            },
          ],
        })
      })
  }

  render() {
    const { data } = this.state
    let groupCount = 0

    return (
      <>
        <Hero
          image="jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          text="K-play det självklara valet"
        />
        <div className="container">
          <h1>Dans</h1>
          <p>Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till dans.</p>
          <FilterTypes />

          {data.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}
        </div>
      </>
    )
  }
}

export default Discover
