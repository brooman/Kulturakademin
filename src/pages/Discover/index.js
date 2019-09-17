import React, { Component } from 'react'

import Hero from '../../components/Hero'
import DiscoverCard from '../../components/DiscoverCard'

import DiscoverGroup from '../../components/DiscoverGroup'
import FilterTypes from '../../components/FilterTypes'
import Mocker from '../../mock/mocker'

class Discover extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'all',
      data: [],
      highlighted: [],
    }
  }

  componentDidMount() {
    this.setState({
      highlighted: [
        {
          card: Mocker('highlighted'),
        },
      ],
      data: [
        {
          title: 'Latest',
          items: Mocker('video'),
        },
      ],
    })
  }

  render() {
    const { highlighted, data } = this.state
    let groupCount = 0
    let cardCounter = 0
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

          {highlighted.map(card => {
            cardCounter += 1
            console.log(card)
            return (
              <DiscoverCard
                key={cardCounter}
                order={cardCounter}
                displayMode={'singleCard'}
                item={card.card[0]}
              />
            )
          })}

          {/* {data.map(item => {
            cardCounter += 1
            {
              item.items.map(card => {
                console.log(card)
                return (
                  <DiscoverCard
                    key={cardCounter}
                    order={cardCounter}
                    displayMode={singleCard}
                    item={card}
                  />
                )
              })
            }
          })} */}

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
