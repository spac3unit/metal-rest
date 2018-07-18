import { action, observable } from 'mobx'

class SuperStore {
  @observable authenticated = false
  @observable
  modal = {
    show: false,
    body: null,
  }

  @action
  showModal = body => {
    this.modal.show = true
    this.modal.body = body
  }

  @action
  closeModal = () => {
    this.modal.show = false
    this.modal.body = null
  }

  @action
  authenticate = () => {
    this.authenticated = !this.authenticated
  }
}

export default new SuperStore()
