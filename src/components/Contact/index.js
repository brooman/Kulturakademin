import React, { Component } from 'react'

import styles from './index.module.scss'

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      start: 0,
    }
  }

  scroll() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.start)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollInPx)
  }

  scrollToTop() {
    let start = setInterval(this.scroll.bind(this))
    this.setState({ start: start })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.title}>
            <p>Kontakt</p>
            <button
              className="scroll"
              onClick={() => {
                this.scrollToTop()
              }}
            >
              Till toppen
            </button>
          </div>
          <div className={styles.content}>
            <p>Kulturakademin</p>
            <p>Järntorget 7</p>
            <p>413 04 Göteborg</p>
          </div>
          <p className={styles.linksContainer}>
            <a href="http://kulturakademin.com">http://kulturakademin.com</a>
            <a href="info@kulturakademin.com">info@kulturakademin.com</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Contact
