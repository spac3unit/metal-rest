import React, { Component } from 'react'
import Modal, { closeStyle } from 'simple-react-modal'

@inject('store')
@observer
class AppControls extends Component {
  _openModal = () => {
    this.props.store.SuperStore.showModal(<strong>Modal content</strong>)
  }

  _closeModal = () => {
    this.props.store.SuperStore.closeModal()
  }
  _fetchAlbums = () => {
    this.props.store.AlbumsStore.fetchAlbums()
  }
  _fetchGenres = () => {
    this.props.store.GenresStore.fetchGenres()
  }
  _clearAlbums = () => this.props.store.AlbumsStore.clearAlbums()
  render() {
    return (
      <div className='App'>
        <button onClick={this._openModal}>Show Modal</button>
        <button onClick={this._fetchAlbums}>Fetch Albums</button>
        <button onClick={this._fetchGenres}>Fetch Genres</button>

        <Modal
          className='modal'
          style={{ background: 'gray' }}
          containerStyle={{ background: 'black' }}
          containerClassName='modalContainer'
          show={store.modal.show}
          onClose={this._closeModal}
          transitionSpeed={500}
        >
          <button onClick={this._closeModal}>X</button>
          <div>{store.modal.body}</div>
        </Modal>

        <DevTools />
      </div>
    )
  }
}

export default AppControls
