import { useContext } from 'react'
import { PlayerContext } from './PlayerContextProvider'

const usePlayer = () => {
  const [state, setState] = useContext(PlayerContext)

  const setResource = resource => {
    setState(state => ({ ...state, resource: resource }))
  }

  const setRef = reference => {
    setState(state => ({
      ...state,
      reference: reference,
    }))
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
  }
}

export default usePlayer
