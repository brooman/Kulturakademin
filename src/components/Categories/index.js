import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../icons/ExpandIcon'

import styles from './index.module.scss'

class Categories extends Component {
  constructor() {
    super()

    this.state = {
      isExpanded: false,
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

      info: [
        {
          id: 0,
          name: 'Populära',
          link: '/',
        },
        {
          id: 1,
          name: 'Mest Visade',
          link: '/',
        },
        {
          id: 2,
          name: 'Event',
          link: '/',
        },
        {
          id: 3,
          name: 'Taggar',
          link: '/',
        },
        {
          id: 4,
          name: 'Allt Material',
          link: '/',
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
    const { categories, info, isExpanded } = this.state

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    const headerStyle = isExpanded
      ? {
          backgroundColor: '#242424',
        }
      : {}

    return (
      <div>
        <div
          className={styles.categories}
          style={headerStyle}
          onClick={this.toggleExpanded}
          type="button"
        >
          <div className={styles.categoryTitle}>Kategorier</div>
          <div>
            <ExpandIcon expanded={isExpanded} />
          </div>
        </div>
        <div className={dropdownStyles}>
          <div className={styles.leftMenu}>
            {categories.map(category => {
              const { id, name, link } = category
              return (
                <div key={id} className={styles.category}>
                  <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
                </div>
              )
            })}
          </div>
          <div className={styles.rightMenu}>
            {info.map(infoitem => {
              const { id, name, link } = infoitem
              return (
                <div key={id} className={styles.category}>
                  <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Categories
