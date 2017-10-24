import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export function configureStore (preloadState: any = {}) {
  const store = createStore(
    reducers,
    preloadState,
    compose(
      applyMiddleware(thunk, logger),
      (window as any).devToolsExtension && (window as any).devToolsExtension()
    )
  )

  return store;
}
export default configureStore