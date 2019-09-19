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
    const activeStyle = { color: '#ff3333' }
    const notActiveStyle = { color: '#fff' }
    return (
      <div className={styles.row}>
        {buttons.map(button => (
          <button
            style={this.state.active === button ? activeStyle : notActiveStyle}
            onClick={this._handleClick.bind(this, button)}
          >
            {button}
          </button>
        ))}
      </div>
    )
  }
}
export default FilterTypes
