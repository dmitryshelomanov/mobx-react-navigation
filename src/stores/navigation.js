import {
  NavigationParams,
  NavigationActions,
} from 'react-navigation'
import { action, computed, observable } from 'mobx'
import autobind from 'autobind-decorator'
import getCurrentState from '../utils/get-navigation-state'


class NavigationStore {
  @observable.ref navigationState = null
  navigator = null

  @action
  setNavigator(navigator) {
    this.navigator = navigator
    this.navigationState = navigator.router
      .getStateForAction(NavigationActions.init({}))
  }

  @computed
  get router() {
    if (this.navigator) {
      return this.navigator.router
    }
    return null
  }

  @computed
  get params() {
    return this.state.params || {}
  }

  @action.bound
  dispatchNavigation(routerAction, reset) {
    const previousNavState = reset ? null : this.navigationState

    if (this.router) {
      const newState = this.router.getStateForAction(routerAction, previousNavState)

      if (newState && newState !== previousNavState) {
        this.navigationState = newState
        return newState
      }
    }
    return null
  }

  @computed
  get state() {
    return getCurrentState(this.navigationState)
  }

  @autobind
  goBack(key) {
    const navKey = this.state ? this.state.key : key

    return this.dispatchNavigation(
      NavigationActions.back({
        key: key === undefined ? navKey : key,
      }),
    )
  }

  @autobind
  reset(
    routeName,
    params,
    navAction,
  ) {
    const resetAction = NavigationActions.navigate({
      routeName,
      params,
      actions: navAction,
    })

    return this.dispatchNavigation({
      type: NavigationActions.RESET,
      actions: [resetAction],
      index: 0,
    }, true)
  }

  @autobind
  navigate(
    routeName,
    params,
    navAction,
  ) {
    return this.dispatchNavigation(
      NavigationActions.navigate({
        routeName,
        params,
        action: navAction,
      }),
    )
  }

  @autobind
  setParams(params) {
    return this.dispatchNavigation(
      NavigationActions.setParams({
        params,
        key: this.state.key,
      }),
    )
  }
}

export default new NavigationStore
