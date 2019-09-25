import React, { Component } from 'react'

import styles from './index.module.scss'
import PlayCard from '../PlayCard'

class PlayGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMode: 'grid',
    }
  }

  render() {
    const { items } = this.props
    const { displayMode } = this.state
    const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
    let cardCounter = 0

    return (
      <div className={styles.group}>
        <div className={[styles.body, viewStyle].join(' ')}>
          {items.map(item => {
            cardCounter += 1
            return (
              <PlayCard
                key={cardCounter}
                order={cardCounter}
                item={item}
                displayMode={displayMode}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default PlayGroup
