import React, { Component } from 'react'

import Mocker from '../../mock/mocker'

import ErrorPage from '../ErrorPage'

import VideoView from '../../components/VideoView'
import AudioView from '../../components/AudioView'

import usePlayer from '../../Hooks/usePlayer'

class ContentView extends Component {
  constructor({ match }) {
    super()

    const { type, id } = match.params

    this.state = {
      resource: Mocker(type, id),
    }
  }

  render() {
    const { resource } = this.state

    switch (resource.type) {
      case 'video':
        return <VideoView resource={resource} />
      case 'audio':
        return (
          <AudioView
            title={resource.title}
            content={resource.content}
            trackingId={resource.trackingId}
            tags={resource.tags}
          />
        )
      default:
        return <ErrorPage statusCode="404" />
    }
  }
}

export default ContentView
