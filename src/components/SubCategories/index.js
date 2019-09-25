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
    const { items, isExpanded } = this.state

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
          <div className={styles.categoryTitle}>Kategorier</div>
          <div>
            <ExpandIcon />
          </div>
        </div>
        <div className={dropdownStyles}>
          <button onClick={() => {}}></button>
        </div>
      </div>
    )
  }
}

// <div>
// {items.map(item => {
//   console.log(item)
//   return <button className={styles.category}>{item.category}</button>
// })}
// </div>

// <div className={styles.rightMenu}>
//   {info.map(infoitem => {
//     const { id, name, link } = infoitem
//     return (
//       <div key={id} className={styles.category}>
//         <Link to={process.env.PUBLIC_URL + link}>{name}</Link>
//       </div>
//     )
//   })}
// </div>

export default SubCategories
