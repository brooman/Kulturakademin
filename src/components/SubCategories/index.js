import React, { Component } from 'react'
import ExpandIcon from '../../icons/ExpandIcon'
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
    const { isExpanded, color } = this.state
    const { setShownSubCategories } = this.props

    let buttonCounter = 0

    const dropdownStyles = isExpanded
      ? [styles.dropdown, styles.expanded].join(' ')
      : styles.dropdown

    return (
      <div className={styles.wrapper}>
        <div
          className={styles.categories}
          style={{
            backgroundColor: color,
          }}
          onClick={this.toggleExpanded}
          onKeyUp={this.toggleExpanded}
          role="link"
          tabIndex={0}
        >
          <div className={styles.categoryTitle}>Underkategorier</div>
          <div>
            <ExpandIcon />
          </div>
        </div>
        <div className={dropdownStyles}>
          {buttons.map(button => {
            buttonCounter += 1
            return (
              <button
                value={button}
                key={buttonCounter}
                onClick={() => {
                  setShownSubCategories(button)
                }}
                type="button"
              >
                {button}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SubCategories
