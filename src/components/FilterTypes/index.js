import React, { Component } from 'react'

import styles from './index.module.scss'

const buttons = ['Allt', 'Video', 'Pod']

class FilterTypes extends Component {
  state = {
    active: 'Allt',
  }
  _handleClick(button) {
    this.setState({ active: button })
  }

  render() {
    return (
      <div className={styles.row}>
        {buttons.map((button, key) => (
          <button
            className={this.state.active === button ? styles.active : styles.notActive}
            onClick={this._handleClick.bind(this, button)}
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
