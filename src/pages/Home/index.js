import React, { Component } from 'react'

import Hero from '../../components/Hero'
import About from '../../components/About'

import Categories from '../../components/Categories'
import DiscoverCard from '../../components/DiscoverCard'
import DiscoverGroup from '../../components/DiscoverGroup'
import PlayGroup from '../../components/PlayGroup'
import FilterTypes from '../../components/FilterTypes'
import Mocker from '../../mock/mocker'

import styles from './index.module.scss'

class Home extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'allt',
      data: [],
      highlighted: [],
      dataItems: [],
      keepWatch: [],
    }
    this.setShownTypes = this.setShownTypes.bind(this)
  }

  componentDidMount() {
    this.setState({
      highlighted: Mocker('highlighted'),
      keepWatch: [
        {
          title: 'Fortsätt',
          items: Mocker('continue'),
        },
      ],
      data: [
        {
          title: 'Sparad lista',
          items: Mocker('all'),
        },
      ],
    })
  }

  setShownTypes(button) {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  render() {
    const { highlighted, data, keepWatch } = this.state
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
    let cardCounterKeepWatch = 0

    return (
      <>
        <Hero
          image="images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          title="K-Play"
          text="– Det självklara valet för vetgiriga"
          intro="Här kan du lyssna och se på utbildande poddar och videoklipp. Nunc consectetur vel sed turpis sed aliquet lacus, suspendisse. Id dui magna tincidunt ut."
        />
        <div className="container">
          <Categories />
          {keepWatch.map(group => {
            const { title, items } = group
            cardCounterKeepWatch += 1

            return <PlayGroup key={cardCounterKeepWatch} title={title} items={items} />
          })}

          {data.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}
          <div className={styles.filterTypes}>
            <h2 className={styles.titleFilter}>Filtera innehåll</h2>
            <FilterTypes setShownTypes={this.setShownTypes} />
          </div>

          <div className={styles.filterTypes}>
            <h2 className={styles.titleFilter}>Nyheter</h2>
          </div>
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
        <About />
      </>
    )
  }
}

export default Home
