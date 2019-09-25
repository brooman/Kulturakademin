import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../icons/ExpandIcon'
import Mocker from '../../mock/mocker'

import styles from './index.module.scss'

const buttons = [
  'Koreografer',
  'Danspedagoger',
  'Dansare',
  'Dansmusik',
  'Folkdans',
  'Egenföretagande',
  'Ekonomi',
  'Fakturering',
  'Event',
]

class SubCategories extends Component {
  constructor() {
    super()

    this.state = {
      isExpanded: false,
      color: '',
    }
  }

  toggleExpanded = () => {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded, color: '#242424' }
    })
  }

  render() {
    const { isExpanded } = this.state

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    return (
      <div className={styles.wrapper}>
        <div
          className={styles.categories}
          style={{
            backgroundColor: this.state.color,
          }}
          onClick={this.toggleExpanded}
        >
          <div className={styles.categoryTitle}>Underkategorier</div>
          <div>
            <ExpandIcon />
          </div>
        </div>
        <div className={dropdownStyles}>
          {buttons.map((button, key) => (
            <button
              value={button}
              key={key}
              onClick={() => {
                this.props.setShownSubCategories(button)
              }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default SubCategories
