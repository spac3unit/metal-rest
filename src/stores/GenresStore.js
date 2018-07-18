import { observable, action } from 'mobx'

class GenresStore {
	@observable genres = []
	@observable isLoadingGenres = false
	get isEmpty() {
		return !this.genres.length
	}
	fetchGenres = async () => {
		await fetch('http://localhost:3030/genres').then(result => result.json()).then(json => {
			this.genres = json.data
		})
	}
}
export default new GenresStore()
