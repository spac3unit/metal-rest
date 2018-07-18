import { observable, action } from 'mobx'

class AuthStore {
	@observable inProgress = false
	values = {
		username: '',
		email: '',
		password: '',
	}

	@action setUsernam = (username) => (this.values.username = username)
	@action setEmail = (username) => (this.values.email = email)
	@action setPassword = (password) => (this.values.password = password)

	@action login = () => {}
	@action register = () => {}
	@action logout = () => {}
	@action
	reset = () => {
		this.values.username = ''
		this.values.email = ''
		this.values.password = ''
	}
}
