import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

const ProgressBar = props => {
  const { reference } = props

  const [state, setState] = useState({
    currentTime: 0,
    duration: 1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (reference) {
        setState(state => ({
          ...state,
          duration: reference.getDuration(),
          currentTime: reference.getCurrentTime(),
        }))
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const progress = (state.currentTime / state.duration) * 100

  const progressBar = {
    backgroundImage: `linear-gradient(to right, #cd7b2a, #cd7b2a ${progress}%, #fff ${progress}%, #fff 100%)`,
  }

  return <div className={styles.progressBar} style={progressBar} />
}

export default ProgressBar
