import React, { Component } from 'react'

import Hero from '../../components/Hero'
import CategoryCard from '../../components/CategoryCard'
import FilterTypes from '../../components/FilterTypes'
import Mocker from '../../mock/mocker'

class CategoryView extends Component {
  constructor({ match }) {
    super()

    const { categoryType } = match.params

    this.state = {
      shownTypes: 'allt',
      category: categoryType,
      data: [],
      highlighted: [],
      dataItems: [],
    }
    this.setShownTypes = this.setShownTypes.bind(this)
  }
  componentDidMount() {
    this.setState({
      highlighted: Mocker('highlighted'),

      data: [Mocker('video'), Mocker('audio')],
    })
  }

  setShownTypes(button) {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  render() {
    const { highlighted, data } = this.state
    const applyTypeFilter = array => {
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
    const applyCategoryFilter = array => {
      return array.filter(card => {
        if (card.category === this.state.category) {
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
          <h1>{this.state.category}</h1>
          <p>
            Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till{' '}
            {this.state.category.toLowerCase()}.
          </p>
          <FilterTypes setShownTypes={this.setShownTypes} />

          {data.map(items => {
            applyCategoryFilter(items).map(card => {
              console.log(card)
              cardCounter += 1
              return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
            })
          })}
        </div>
      </>
    )
  }
}

// {applyTypeFilter(highlighted).map(card => {
//   console.log(card)
//   cardCounter += 1
//   return (
//     <CategoryCard
//       key={cardCounter}
//       order={cardCounter}
//       // displayMode="singleCard"
//       item={card}
//     />
//   )
// })}

export default CategoryView
