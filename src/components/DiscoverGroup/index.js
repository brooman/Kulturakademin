import React, { Component } from 'react'

import styles from './index.module.scss'
import DiscoverCard from '../DiscoverCard'
import ShowMoreCard from '../DiscoverCard/ShowMoreCard'

class DiscoverGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMode: 'grid',
    }
  }

  componentDidMount() {
    if (this.props.displayMode) {
      this.setState({ displayMode: this.props.displayMode })
    }
  }

  render() {
    const { title, items } = this.props
    const { displayMode } = this.state
    const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
    let cardCounter = 0

    return (
      <div className={styles.group}>
        <div className={styles.header}>
          <h2>{title}</h2>
        </div>
        <div className={[styles.body, viewStyle].join(' ')}>
          {items.map(item => {
            if (cardCounter > 4) {
              return false
            }
            cardCounter += 1

            return (
              <DiscoverCard
                key={cardCounter}
                order={cardCounter}
                item={item}
                displayMode={displayMode}
              />
            )
          })}
          <ShowMoreCard
            title={`Visa alla ${Math.floor(Math.random() * 500)}st, sorterat på ${title}`}
            displayMode={displayMode}
          />
        </div>
      </div>
    )
  }
}

export default DiscoverGroup
