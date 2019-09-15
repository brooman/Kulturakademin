import React, { Component } from 'react'

import styles from './index.module.scss'
import DiscoverCard from '../DiscoverCard'
import GridViewIcon from '../../icons/GridViewIcon'

class DiscoverGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMode: 'grid',
    }
  }

  toggleDisplayMode = () => {
    this.setState(prevState => {
      return { displayMode: prevState.displayMode === 'list' ? 'grid' : 'list' }
    })
  }

  render() {
    const { title, items } = this.props
    const { displayMode } = this.state
    console.log(items)
    const viewStyle = displayMode === 'list' ? styles.listView : styles.gridView
    let cardCounter = 0

    return (
      <div className={styles.group}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button type="button" onClick={this.toggleDisplayMode}>
            {displayMode.text}
            <GridViewIcon />
          </button>
        </div>
        <div className={[styles.body, viewStyle].join(' ')}>
          {items.map(item => {
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
        </div>
      </div>
    )
  }
}

export default DiscoverGroup
