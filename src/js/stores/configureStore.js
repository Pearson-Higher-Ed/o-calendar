import { createStore, applyMiddleware, compose } from 'redux'
import createLogger                              from 'redux-logger'
import reducers                                  from './../reducers/Reducers'


const logger = createLogger()

const createStoreWithMiddleWare = compose(
  applyMiddleware(logger),
  // Chrome-DevTools Redux injection...
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState){
  return createStoreWithMiddleWare(reducers, initialState)
}
