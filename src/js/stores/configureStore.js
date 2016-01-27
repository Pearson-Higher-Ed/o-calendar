import { createStore, applyMiddleware } from 'redux'
import reducers                         from './../reducers/Reducers'
import thunk                            from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
