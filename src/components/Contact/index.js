import React from 'react'

import styles from './index.module.scss'

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <div className={styles.title}>
          <p>Kontakt</p>
          <button>Till toppen</button>
        </div>
        <p className={styles.content}>
          <p>Kulturakademin</p>
          <p>Järntorget 7</p>
          <p>413 04 Göteborg</p>
        </p>
        <p className={styles.linksContainer}>
          <a href="http://kulturakademin.com">http://kulturakademin.com</a>
          <a href="info@kulturakademin.com">info@kulturakademin.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
