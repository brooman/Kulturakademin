import React, { Component } from 'react'

import TextView from '../../components/TextView'

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

    console.log(endpoint)

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

    console.log(resource)

    switch (resource.type) {
      case 'text':
        return <TextView title={resource.title} content={resource.content} tags={resource.tags} />
      case 'video':
      case 'audio':
      default:
        return null
    }
  }
}

export default ContentView
