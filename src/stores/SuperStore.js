import { action, observable } from 'mobx'

class SuperStore {
  @observable theme = "day"
  @observable counter = 0
  @observable modal = {
    show: false,
    body: null
  }
  @action toggleTheme = () => this.theme = this.theme == 'day' ? 'night' : 'day'
  @action inc = () => this.counter++
  @action dec = () => this.counter--

  @action showModal = body => {
    this.modal.show = true;
    this.modal.body = body;
  }
  @action closeModal = () => {
      this.modal.show = false;
      this.modal.body = null;
  }

}

export default new SuperStore()
