import { action, computed, observable } from 'mobx'


class Auth {
  @observable.ref isAuth = false

  @action.bound
  toggleAuth(state) {
    this.isAuth = state
  }
}

export default new Auth
