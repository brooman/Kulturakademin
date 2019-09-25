/*

NEJ LOVISA

INTE DENNA FILEN

PLEASE

NO

GET OUT

😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰😰

*/

import { useContext } from 'react'
import { PlayerContext } from './PlayerContextProvider'
import Mocker from '../mock/mocker'

const usePlayer = () => {
  const [state, setState] = useContext(PlayerContext)

  const initPlayer = (type, id) => {
    const res = Mocker(type, id)

    if (state.resource !== res) {
      setResource(res)
    }
  }

  const setResource = resource => {
    setState(state => ({ ...state, resource, playing: false }))
  }

  const setRef = reference => {
    setState(state => ({
      ...state,
      reference,
    }))
  }

  const rollback = () => {
    const { resource, reference, playing } = state
    const targetTime =
      resource.type === 'video' ? reference.getCurrentTime() - 15 : reference.getPosition() - 15

    reference.seekTo(targetTime > 0 ? targetTime : 0)

    if (playing) {
      resource.type === 'video' ? reference.pauseVideo() : reference.pause()
    }

    resource.type === 'video' ? reference.playVideo() : reference.play()
  }

  const togglePlaying = () => {
    const { resource, reference, playing } = state

    if (playing) {
      resource.type === 'video' ? reference.pauseVideo() : reference.pause()
    } else {
      resource.type === 'video' ? reference.playVideo() : reference.play()
    }

    setState(state => ({
      ...state,
      playing: !state.playing,
    }))
  }

  return {
    initPlayer,
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
