import { observable, action, computed } from 'mobx'

class AlbumsStore {
	@observable albums = []
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
	fetchAlbums = async () => {
		await fetch('http://localhost:3030/albums').then(result => result.json()).then(json => {
			this.albums = json.data
		})
	}
}
export default new AlbumsStore()
