import { useContext } from 'react'
import { PlayerContext } from './PlayerContextProvider'

const usePlayer = () => {
  const [state, setState] = useContext(PlayerContext)

  const setResource = resource => {
    setState(state => ({ ...state, resource }))
  }

  const setRef = reference => {
    setState(state => ({
      ...state,
      reference,
    }))
  }

  const rollback = () => {
    const { reference, playing } = state

    const targetTime = reference.getCurrentTime() - 15

    reference.seekTo(targetTime > 0 ? targetTime : 0, false)

    if (playing) {
      reference.pauseVideo()
    }

    reference.playVideo()
  }

  const togglePlaying = () => {
    const { reference, playing } = state

    if (playing) {
      reference.pauseVideo()
    } else {
      reference.playVideo()
    }

    setState(state => ({
      ...state,
      playing: !state.playing,
    }))
  }

  return {
    setRef,
    reference: state.reference,
    resource: state.resource,
    setResource,
    playing: state.playing,
    togglePlaying,
    rollback,
  }
}

export default usePlayer
