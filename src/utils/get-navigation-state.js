export default function getCurrentState(state) {
  const childRoute = state && state.routes[state.index]

  if (childRoute && childRoute.routes) {
    return getCurrentState(childRoute)
  }
  return childRoute
}
