import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import CloseIcon from '../../icons/CloseIcon'
<<<<<<< HEAD
// import ExpandIcon from '../../icons/ExpandIcon'
import Mocker from '../../mock/mocker'
import CategoryGroup from '../CategoryGroup'
import Categories from '../../components/Categories'
import FilterTypes from '../../components/FilterTypes'
=======
import Mocker from '../../mock/mocker'
import CategoryGroup from '../CategoryGroup'
>>>>>>> b7630e7fafbbabb058ff0038a6e9cad81c11b0e3

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
        <input
          className={styles.field}
          type="text"
          placeholder="SÖK"
          value={search}
          onChange={handleSearch}
        />
        <button className={styles.searchBtn} type="button" onClick={toggle}>
          <CloseIcon />
        </button>
      </div>
      <div className={[styles.searchResult, show ? styles.show : styles.hide].join(' ')}>
<<<<<<< HEAD
        <div className={styles.topView}>
          <h1>Allt matrial</h1>

          <Categories />
          <div className={styles.filterTypes}>
            <h2 className={styles.titleFilter}>Filtera innehåll</h2>
            <FilterTypes />
          </div>
        </div>

        <CategoryGroup title="Sökresultat" displayMode="list" items={searchResult} />
=======
        <div className={styles.searchCards}>
          <CategoryGroup displayMode="list" items={searchResult} />
        </div>
>>>>>>> b7630e7fafbbabb058ff0038a6e9cad81c11b0e3
      </div>
    </>
  )
}

export default SearchBar
