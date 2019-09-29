import React from 'react'

import styles from './index.module.scss'

const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Web Fundamentals',
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://developers.google.com/web',
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error))
  } else {
    console.log('Not on mobile...')
  }
}

const ShareButton = () => {
  return (
    <div className={styles.button}>
      <button className={styles.text} type="button" onClick={share}>
        Share
      </button>
    </div>
  )
}

export default ShareButton
