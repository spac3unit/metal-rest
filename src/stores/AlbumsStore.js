import { observable, action, computed } from 'mobx'

class AlbumsStore {
  @observable albums = []
  @observable currentAlbum = {}
  @observable isLoadingAlbums = false

  @computed
  get isEmpty() {
    return !this.albums.length
  }

  @action
  clearAlbums = () => {
    this.albums = []
  }

  @action
  getAlbumById = async id => {
    await fetch(`http://localhost:3030/albums/${id}`).then(result => result.json()).then(json => {
      this.currentAlbum = json
    })
  }

  @action
  fetchAlbums = async genre => {
    await fetch(`http://localhost:3030/albums?genre=${genre}`)
      .then(result => result.json())
      .then(json => {
        this.albums = json.data
      })
  }
}
export default new AlbumsStore()
