import { observable, action, reaction } from 'mobx'

class CommonStore {
  @observable appName = 'metal-rest'
  @observable token = window.localStorage.getItem('jwt')
  @observable appLoaded = false

  @action
  setAppLoaded() {
    this.appLoaded = true
  }
}

export default new CommonStore()
