import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'

@inject('store')
@observer
class AlbumsList extends Component {
  componentWillMount() {
    this.props.store.AlbumsStore.fetchAlbums()
  }

  render() {
    const store = this.props.store.AlbumsStore
    const { isEmpty, albums } = store
    return (
      <div>
        <h3>Albums List</h3>
        <ul className='albums'>
          {!isEmpty ? (
            albums.map(album => (
              <li key={album._id}>
                <p>{album.artist}</p>
                <p>{album.album}</p>
                <p>{album.genre}</p>
              </li>
            ))
          ) : (
            <h3>Albums List is loading...</h3>
          )}
        </ul>
      </div>
    )
  }
}

export default AlbumsList
