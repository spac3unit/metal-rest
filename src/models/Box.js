import { observable, computed, action, extendObservable } from 'mobx'
export class Box {
	@observable sealed = true
	@observable closed = true
	@observable counter = 0
	constructor(store, initialState) {
		this.store = store
		extendObservable(this, initialState)
	}
	@computed
	get canSeal() {
		return this.closed
	}
	@computed
	get canOpen() {
		return !this.sealed
	}
	@computed
	get canManipulatekakis() {
		return !this.closed
	}

	@action
	open() {
		if (this.canOpen) {
			this.opened = true
		}
	}
	@action
	close() {
		this.closed = true
	}
	@action
	seal() {
		if (this.canSeal) {
			this.sealed = true
		}
	}
	@action
	unseal() {
		this.sealed = false
	}
}
