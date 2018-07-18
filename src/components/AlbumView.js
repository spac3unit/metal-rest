import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class AlbumView extends Component {
  componentDidMount() {
    this.props.store.AlbumsStore.getAlbumById(this.props.match.params.id)
  }

  render() {
    const store = this.props.store.AlbumsStore
    const { currentAlbum } = store
    return (
      <div>
        <p> ID: {this.props.match.params.id}</p>
        <p> Title: {currentAlbum.title}</p>
        <p> Genre: {currentAlbum.genre}</p>
        <p> Subgenre: {currentAlbum.subgenre}</p>
        <a href={currentAlbum.download_url}>Download </a>
      </div>
    )
  }
}
