import React, { Component } from 'react'

import CategoryCard from '../../components/CategoryCard'
import FilterTypes from '../../components/FilterTypes'
import SubCategories from '../../components/SubCategories'
import Mocker from '../../mock/mocker'

import styles from './index.module.scss'

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

      data: Mocker('all'),
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
        if (this.state.category === null) {
          console.log('null')
          return false
        }
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
        <div>
          <div className={styles.categoryInfo}>
            <h1>{this.state.category}</h1>
            <p>
              Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till{' '}
              {this.state.category.toLowerCase()}.
            </p>
          </div>
          <SubCategories />
          <FilterTypes setShownTypes={this.setShownTypes} />
          {applyTypeFilter(data).map(card => {
            console.log(card)
            cardCounter += 1
            return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
          })}
        </div>
      </>
    )
  }
}

// {data.map(items => {
//   applyCategoryFilter(items).map(card => {
//     console.log(card)
//     cardCounter += 1
//     return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
//   })
// })}
export default CategoryView
