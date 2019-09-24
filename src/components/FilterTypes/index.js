import React, { Component } from 'react'

import styles from './index.module.scss'

const buttons = ['Allt', 'Video', 'Audio']

class FilterTypes extends Component {
  state = {
    active: 'Allt',
  }

  handleClick(button) {
    this.setState({ active: button })
  }

  render() {
    return (
      <div className={styles.row}>
        {buttons.map((button, key) => (
          <button
            className={this.state.active === button ? styles.active : styles.notActive}
            value={button}
            onClick={() => {
              this.props.setShownTypes(button)
              this.handleClick(button)
            }}
            key={key}
          >
            {button}
          </button>
        ))}
      </div>
    )
  }
}
export default FilterTypes
