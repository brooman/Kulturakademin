import React, { Component } from 'react'

import Mocker from '../../mock/mocker'

import ErrorPage from '../ErrorPage'

import VideoView from '../../components/VideoView'
import AudioView from '../../components/AudioView'

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
        return (
          <VideoView
            title={resource.title}
            content={resource.content}
            time={'34 min'}
            year={2019}
            episodeNo={1}
            episodeNos={8}
            url={resource.url}
            tags={resource.tags}
          />
        )
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
