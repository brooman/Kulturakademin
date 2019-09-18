import React from 'react'
import Cookies from 'js-cookie'

import styles from './index.module.scss'

const setCookieYes = () => {
  Cookies.set('downloadedPwa', 'true')
}

const setCookieLater = () => {
  Cookies.set('downloadedPwa', 'false', { expires: 0.2 })
}

var showPwaPopUp = Cookies.get('downloadedPwa')

const PwaPopUp = () => {
  return (
    <div className={showPwaPopUp ? styles.hide : styles.show}>
      <div className={styles.bar}>
        <p>Spara som Desktop App</p>
        <div className={styles.buttonWrapper}>
          <button type="button" onClick={setCookieYes}>
            Ja
          </button>
          <button type="button" onClick={setCookieLater}>
            Senare
          </button>
        </div>
      </div>
    </div>
  )
}

export default PwaPopUp
