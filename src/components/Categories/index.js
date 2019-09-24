import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../icons/ExpandIcon'

import styles from './index.module.scss'

class Categories extends Component {
  constructor() {
    super()

    this.state = {
      isExpanded: false,
      color: '',
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

      info: [
        {
          id: 0,
          name: 'Populära',
          link: '/discover/dance',
        },
        {
          id: 1,
          name: 'Mest Visade',
          link: '/discover/cinematography',
        },
        {
          id: 2,
          name: 'Indexering',
          link: '/discover/music',
        },
        {
          id: 3,
          name: 'Allt Material',
          link: '/discover/light',
        },
      ],
    }
  }

  toggleExpanded = () => {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded, color: '#242424' }
    })
  }

  render() {
    const { categories, info, isExpanded } = this.state

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    return (
      <div>
        <div
          className={styles.categories}
          style={{
            backgroundColor: this.state.color,
          }}
          onClick={this.toggleExpanded}
        >
          <div>Kategorier</div>
          <div>
            <ExpandIcon />
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
