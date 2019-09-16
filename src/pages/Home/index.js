import React from 'react'

import Hero from '../../components/Hero'
import Categories from '../../components/Categories'

const Home = () => {
  return (
    <>
      <Hero
        image="images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
        text="K-play det självklara valet"
      />
      <Categories />
    </>
  )
}

export default Home
