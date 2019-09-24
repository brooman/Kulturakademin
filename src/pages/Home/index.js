import React from 'react'

import Hero from '../../components/Hero'
import Categories from '../../components/Categories'

const Home = () => {
  return (
    <>
      <Hero
        image="images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
        title="K-Play"
        text="– Det självklara valet för vetgiriga"
        intro="Här kan du lyssna och se på utbildande poddar och videoklipp. Nunc consectetur vel sed turpis sed aliquet lacus, suspendisse. Id dui magna tincidunt ut."
      />
      <Categories />
    </>
  )
}

export default Home
