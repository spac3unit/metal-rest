import AlbumsStore from './AlbumsStore'
import SuperStore from './SuperStore'

class RootStore {
	constructor() {
		this.userStore = new AlbumsStore()
		this.todoStore = new SuperStore()
	}
}
export default new RootStore()
