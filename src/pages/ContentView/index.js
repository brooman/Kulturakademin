import React, { Component } from 'react'

import Mocker from '../../mock/mocker'

import ErrorPage from '../ErrorPage'

import VideoView from '../../components/VideoView'
import AudioView from '../../components/AudioView'

import usePlayer from '../../Hooks/usePlayer'

const ContentView = ({ match }) => {
  const { type, id } = match.params
  const res = Mocker(type, id)
  const { resource, setResource } = usePlayer()

  if (resource !== res) {
    setResource(res)
  }

  return null
}

export default ContentView
