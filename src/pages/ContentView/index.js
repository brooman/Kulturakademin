import React, { Component } from 'react'

import ErrorPage from '../ErrorPage'

import VideoView from '../../components/VideoView'
import AudioView from '../../components/AudioView'

class ContentView extends Component {
  constructor({ match }) {
    super()

    const { type, id } = match.params
    this.fetchContent(type, id)

    this.state = {
      resource: {},
    }
  }

  /**
   * Fetch resource from server
   *
   * @param {String} resourceType
   * @param {Number} resourceId
   */
  fetchContent(resourceType, resourceId) {
    const endpoint = `${process.env.REACT_APP_API_URL}/${resourceType}/${resourceId}`

    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        this.setState({
          resource: json,
        })
      })
  }

  render() {
    const { resource } = this.state

    switch (resource.type) {
      case 'video':
        return (
          <VideoView
            title={resource.title}
            content={resource.content}
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
