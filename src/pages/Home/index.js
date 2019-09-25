import React, { Component } from 'react'

import Hero from '../../components/Hero'
import About from '../../components/About'

import Categories from '../../components/Categories'
import DiscoverCard from '../../components/DiscoverCard'
import DiscoverGroup from '../../components/DiscoverGroup'
import PlayGroup from '../../components/PlayGroup'
import FilterTypes from '../../components/FilterTypes'
import Mocker from '../../mock/mocker'

class Home extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'allt',
      data: [],
      highlighted: [],
      dataItems: [],
      trying: [],
    }
    this.setShownTypes = this.setShownTypes.bind(this)
  }

  componentDidMount() {
    this.setState({
      highlighted: Mocker('highlighted'),
      trying: [
        {
          title: 'Fortsätt',
          items: Mocker('continue'),
        },
      ],
      data: [
        {
          title: 'Senaste',
          items: Mocker('video'),
        },
      ],
    })
  }

  setShownTypes(button) {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  render() {
    const { highlighted, data, trying } = this.state
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
    let cardCounterTrying = 0

    return (
      <>
        <Hero
          image="images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          title="K-Play"
          text="– Det självklara valet för vetgiriga"
          intro="Här kan du lyssna och se på utbildande poddar och videoklipp. Nunc consectetur vel sed turpis sed aliquet lacus, suspendisse. Id dui magna tincidunt ut."
        />
        <div className="container">
          <FilterTypes setShownTypes={this.setShownTypes} />
          {trying.map(group => {
            const { items, title } = group
            cardCounterTrying += 1
            return <PlayGroup key={cardCounterTrying} title={title} items={items} />
          })}

          {data.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}

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

          {/* populära */}
          {data.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}

          {/* mest visade */}
          {data.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}
        </div>
        <Categories />
        <About />
      </>
    )
  }
}

export default Home
