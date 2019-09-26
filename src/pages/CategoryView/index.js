import React, { Component } from 'react'

import CategoryCard from '../../components/CategoryCard'
import FilterTypes from '../../components/FilterTypes'
import SubCategories from '../../components/SubCategories'
import Mocker from '../../mock/mocker'

import ExpandIcon from '../../icons/ExpandIcon'
import SearchIcon from '../../icons/SearchIcon'

import styles from './index.module.scss'

class CategoryView extends Component {
  constructor({ match }) {
    super()

    const { categoryType } = match.params

    this.state = {
      shownTypes: 'allt',
      category: categoryType,
      subCategory: 'Media',
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: Mocker('all'),
    })

    window.scrollTo(0, 0)
  }

  setShownTypes = button => {
    this.setState({ shownTypes: button.toLowerCase() })
  }

  setShownSubCategories = button => {
    this.setState({ subCategory: button })
  }

  render() {
    const { data, category, subCategory, shownTypes } = this.state

    // Filter method for type (all, video, pod)
    const applyTypeFilter = array => {
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

    // Filter method for category
    const applyCategoryFilter = array => {
      return array.filter(card => {
        if (card.category === category) {
          return true
        }
        return false
      })
    }

    // Filter method for subcategory
    const applySubCategoryFilter = array => {
      return array.filter(card => {
        if (subCategory === 'Media') {
          return true
        }
        if (card.subcategory === subCategory) {
          return true
        }
        return false
      })
    }

    let cardCounter = 0
    return (
      <>
        <div>
          <div className={styles.categoryInfo}>
            <h1>{category}</h1>
            <p>
              Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till
              {' '}
              {category.toLowerCase()}
.
            </p>
          </div>
          <SubCategories setShownSubCategories={this.setShownSubCategories} />
          <div className={[styles.searchBar, styles.show].join(' ')}>
            <input className={styles.field} type="text" placeholder="Sök i dans" />
            <button className={styles.menuBtn} type="button">
              <SearchIcon />
            </button>
          </div>
          <p className={styles.filterTitle}>Filtrera innehåll</p>
          <FilterTypes setShownTypes={this.setShownTypes} />
          <div className={styles.titleWrapper}>
            <p className={styles.subTitle}>{subCategory}</p>
            <div className={styles.sortDropDown}>
              <p>Senaste</p>
              <ExpandIcon color="#CBCBCB" />
            </div>
          </div>
          {applyTypeFilter(applyCategoryFilter(data)).map(card => {
            cardCounter += 1
            return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
          })}
          {applyTypeFilter(applySubCategoryFilter(data)).map(card => {
            cardCounter += 1
            return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
          })}
        </div>
      </>
    )
  }
}

// {applySubCategoryFilter(data).map(card => {
//   cardCounter += 1
//   return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
// })}

// {data.map(items => {
//   applyCategoryFilter(items).map(card => {
//     console.log(card)
//     cardCounter += 1
//     return <CategoryCard key={cardCounter} order={cardCounter} item={card} />
//   })
// })}
export default CategoryView
