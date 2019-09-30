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
  constructor() {
    super()

    this.state = {
      shownTypes: 'allt',
      data: [],
      highlighted: [],
      keepWatch: [],
      popular: [],
      mustShown: [],
    }
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
      popular: [
        {
          title: 'Populära',
          items: Mocker('popular'),
        },
      ],
      data: [
        {
          title: 'Sparad lista',
          items: Mocker('all'),
        },
      ],
      mustShown: [
        {
          title: 'Mest visade',
          items: Mocker('mustShown'),
        },
      ],
    })
  }

  setShownTypes = button => {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  render() {
    const { highlighted, data, keepWatch, popular, mustShown, shownTypes } = this.state
    const applyFilter = array => {
      return array.filter(item => {
        if (shownTypes === 'allt') {
          return true
        }
        if (item.type === shownTypes) {
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
          title="K-Play"
          text="– Fortbildning inom kultur och media"
          intro="K-play är Kulturakademins samlade plattform för podcast & webcast.
            Här kan du lyssna och se på utbildande poddar och videoklipp från kulturbranschen."
        />
        <div className="container">
          <Categories />

          {/* continue */}
          {keepWatch.map(group => {
            const { title, items } = group
            cardCounter += 1

            return <PlayGroup key={cardCounter} title={title} items={items} />
          })}

          {/* saved items */}
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

          {/* news */}
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

          {/* popular */}
          {popular.map(group => {
            const { title, items } = group
            groupCount += 1
            return <DiscoverGroup key={groupCount} title={title} items={items} />
          })}

          {/* must shown */}
          {mustShown.map(group => {
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
