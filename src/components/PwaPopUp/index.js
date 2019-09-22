import React, { useState } from 'react'
import Cookies from 'js-cookie'

import styles from './index.module.scss'

const setCookieYes = () => {
  Cookies.set('downloadedPwa', 'true')
}

const setCookieLater = () => {
  Cookies.set('downloadedPwa', 'false', { expires: 7 })
}

const showPwaPopUp = Cookies.get('downloadedPwa')

const PwaPopUp = () => {
  const [clicked, setClicked] = useState(showPwaPopUp)

  return (
    <div
      className={[
        styles.bar,
        clicked ? styles.slideDown : styles.slideUp,
        showPwaPopUp ? styles.hide : styles.show,
      ].join(' ')}
    >
      <p>Spara som desktop app</p>
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          onClick={() => {
            setCookieYes()
            setClicked(true)
          }}
        >
          Ja
        </button>
        <button
          type="button"
          onClick={() => {
            setCookieLater()
            setClicked(true)
          }}
        >
          Senare
        </button>
      </div>
    </div>
    // <div
    //   className={[
    //     clicked ? styles.slideDown : styles.show,
    //     showPwaPopUp ? styles.hide : styles.show,
    //     styles.wrapper,
    //   ].join(' ')}
    // >
    //   <div className={styles.bar}>
    //     <p>Spara som Desktop App</p>
    //     <div className={styles.buttonWrapper}>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           setCookieYes()
    //           setClicked(true)
    //         }}
    //       >
    //         Ja
    //       </button>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           setCookieLater()
    //           setClicked(true)
    //         }}
    //       >
    //         Senare
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default PwaPopUp
