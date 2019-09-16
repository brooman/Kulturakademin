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
          link: '/discover/dance',
        },
        {
          id: 1,
          name: 'Film',
          link: '/discover/cinematography',
        },
        {
          id: 2,
          name: 'Musik',
          link: '/discover/music',
        },
        {
          id: 3,
          name: 'Ljus',
          link: '/discover/light',
        },
        {
          id: 4,
          name: 'Teater',
          link: '/discover/drama',
        },
        {
          id: 5,
          name: 'TV',
          link: '/discover/television',
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
