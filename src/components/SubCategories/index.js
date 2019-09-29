import React, { Component } from 'react'

import ExpandIcon from '../../icons/ExpandIcon'

import styles from './index.module.scss'

class SubCategories extends Component {
  constructor() {
    super()

    this.state = {
      isExpanded: false,
      categories: {
        left: ['Koreografer', 'Danspedagoger', 'Dansare', 'Dansmusik', 'Folkdans'],
        right: ['Egenföretagande', 'Ekonomi', 'Fakturering', 'Event'],
      },
    }
  }

  toggleExpanded = () => {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded }
    })
  }

  render() {
    const { categories, isExpanded } = this.state
    const { setShownSubCategories } = this.props

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    const headerStyle = isExpanded
      ? {
          backgroundColor: '#242424',
        }
      : {}

    let buttonCounter

    return (
      <div>
        <div className={styles.categories} style={headerStyle} onClick={this.toggleExpanded}>
          <div className={styles.categoryTitle}>Subkategorier</div>
          <div>
            <ExpandIcon expanded={isExpanded} />
          </div>
        </div>
        <div className={dropdownStyles}>
          <div className={styles.leftMenu}>
            {categories.left.map(button => {
              return (
                <button
                  value={button}
                  key={buttonCounter}
                  onClick={() => {
                    setShownSubCategories(button)
                    window.scrollTo({
                      top: 750,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }}
                  type="button"
                  className={styles.category}
                >
                  {button}
                </button>
              )
            })}
          </div>
          <div className={styles.rightMenu}>
            {categories.right.map(button => {
              return (
                <button
                  value={button}
                  key={buttonCounter}
                  onClick={() => {
                    setShownSubCategories(button)
                    window.scrollTo({
                      top: 750,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }}
                  type="button"
                  className={styles.category}
                >
                  {button}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SubCategories
