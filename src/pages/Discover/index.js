import React, { Component } from 'react'

import Hero from '../../components/Hero'
import DiscoverGroup from '../../components/DiscoverGroup'
import FilterTypes from '../../components/FilterTypes'

class Discover extends Component {
  constructor({ match }) {
    super()

    this.state = {
      shownTypes: 'all',
      data: [
        {
          title: 'Latest',
          items: [
            {
              id: 129,
              type: 'video',
              title: 'Masterclass med Pia Olby - Vad är skönsång (del 3 av 4)',
              image: 'felix-mooneeram-evlkOfkQ5rE-unsplash.jpg',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              url: 'https://www.youtube.com/embed/Nmf2V55mlgw',
              tags: ['webcast', 'learning'],
            },
            {
              id: 128,
              type: 'video',
              title: 'Masterclass med Pia Olby - Vad är sånggestaltning (del 1 av 4)',
              image: 'jakob-owens-CiUR8zISX60-unsplash.jpg',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              url: 'https://www.youtube.com/embed/OO-v7--wOtU',
              tags: ['webcast', 'learning'],
            },
            {
              id: 127,
              type: 'video',
              title: 'Masterclass med Pia Olby - Textgestaltning och sånggestaltning (del 2 av 4)',
              image: 'jeremy-yap-J39X2xX_8CQ-unsplash.jpg',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              url: 'https://www.youtube.com/embed/qgjKQrgL0o0',
              tags: ['webcast', 'learning'],
            },
            {
              id: 126,
              type: 'video',
              title: 'Masterclass med Pia Olby - Kroppens betydelse i sång (del 4 av 4)',
              image: 'felix-mooneeram-evlkOfkQ5rE-unsplash.jpg',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              url: 'https://www.youtube.com/embed/l2vcqaClw-A',
              tags: ['webcast', 'learning'],
            },
            {
              id: 125,
              type: 'video',
              title: 'NEW ON THE MAP: REInvent Studios',
              image: 'jakob-owens-CiUR8zISX60-unsplash.jpg',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              url: 'https://www.youtube.com/embed/yGkn5KYk6sg',
              tags: ['webcast', 'learning'],
            },
          ],
        },
      ],
    }
  }

  render() {
    const { data } = this.state

    return (
      <>
        <Hero
          image="jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          text="K-play det självklara valet"
        />
        <div className="container">
          <h1>Dans</h1>
          <p>Här kan du lyssna och se på utbildande poddar och videoklipp relaterade till dans.</p>
          <FilterTypes />

          {data.map(group => {
            const { title, items } = group
            return <DiscoverGroup title={title} items={items} />
          })}
        </div>
      </>
    )
  }
}

export default Discover
