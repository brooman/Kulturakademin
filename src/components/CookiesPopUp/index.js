import React, { useState } from 'react'
import Cookies from 'js-cookie'

import styles from './index.module.scss'

const cookiesAccepted = () => {
  Cookies.set('cookiesAccepted', 'true')
}

const hideCookiesPopUp = Cookies.get('cookiesAccepted')

const CookiesPopUp = () => {
  const [clicked, setClicked] = useState(hideCookiesPopUp)

  return (
    <div
      className={[
        styles.bar,
        clicked ? styles.slideDown : styles.slideUp,
        hideCookiesPopUp ? styles.hide : styles.show,
      ].join(' ')}
    >
      <p>Vi använder cookies...</p>
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          onClick={() => {
            setClicked(true)
            cookiesAccepted()
          }}
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default CookiesPopUp
