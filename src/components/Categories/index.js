import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

class Categories extends Component {
  constructor() {
    super()

    this.state = {
      isExpanded: true,
      categories: [
        {
          id: 0,
          name: 'Dans',
          link: '/category/Dans',
        },
        {
          id: 1,
          name: 'Film',
          link: '/category/Film',
        },
        {
          id: 2,
          name: 'Musik',
          link: '/category/Musik',
        },
        {
          id: 3,
          name: 'Ljus',
          link: '/category/Ljus',
        },
        {
          id: 4,
          name: 'Teater',
          link: '/category/Teater',
        },
        {
          id: 5,
          name: 'TV',
          link: '/category/Tv',
        },
      ],
    }
  }

  toggleExpanded = () => {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded }
    })
  }

  render() {
    const { categories, isExpanded } = this.state

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    return (
      <div>
        <div className={styles.categories} onClick={this.toggleExpanded}>
          <div>Kategorier</div>
          <div>v</div>
        </div>
        <div className={dropdownStyles}>
          {categories.map(category => {
            const { id, name, link } = category
            return (
              <div key={id} className={styles.category}>
                <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Categories
