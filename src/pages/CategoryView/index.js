import React, { Component } from 'react'

import Hero from '../../components/Hero'
import DiscoverCard from '../../components/DiscoverCard'
import FilterTypes from '../../components/FilterTypes'
import Mocker from '../../mock/mocker'

class Discover extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'allt',
      data: [],
      highlighted: [],
      dataItems: [],
    }
    this.setShownTypes = this.setShownTypes.bind(this)
  }

  componentDidMount() {
    this.setState({
      highlighted: Mocker('highlighted'),

      data: [
        {
          title: 'Latest',
          items: Mocker('video'),
        },
      ],
    })
  }

  setShownTypes(button) {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  render() {
    const { highlighted, data } = this.state
    const applyFilter = array => {
      return array.filter(item => {
        if (this.state.shownTypes === 'allt') {
          return true
        }
        if (item.type === this.state.shownTypes) {
          return true
        }
        return false
      })
    }
    let groupCount = 0
    let cardCounter = 0
    return (
      <>
        <Hero
          image="images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          text="K-play det självklara valet"
        />
        <div className="container">
          <h1>Dans</h1>
          <p>Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till dans.</p>
          <FilterTypes setShownTypes={this.setShownTypes} />
          {applyFilter(highlighted).map(card => {
            cardCounter += 1
            return (
              <DiscoverCard
                key={cardCounter}
                order={cardCounter}
                displayMode="singleCard"
                item={card}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default Discover
