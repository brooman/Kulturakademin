import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import SearchIcon from '../../icons/SearchIcon'
import Mocker from '../../mock/mocker'
import DiscoverGroup from '../DiscoverGroup'

const SearchBar = props => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const { show, toggle } = props
  const data = Mocker()

  const handleSearch = e => {
    if (e.target.value.length < 25) setSearch(e.target.value)
  }

  useEffect(() => {
    setSearchResult(() => {
      return data.filter(item => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.content.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
        )
      })
    })
  }, [search])

  return (
    <>
      <div className={[styles.searchBar, show ? styles.show : styles.hide].join(' ')}>
        <input className={styles.field} type="text" value={search} onChange={handleSearch} />
        <button className={styles.menuBtn} type="button" onClick={toggle}>
          <SearchIcon />
        </button>
      </div>
      <div className={[styles.searchResult, show ? styles.show : styles.hide].join(' ')}>
        <DiscoverGroup title="Sök resultat" displayMode="list" items={searchResult} />
      </div>
    </>
  )
}

export default SearchBar
