import { createStore, applyMiddleware }          from 'redux'
import reducers                                  from './../reducers/Reducers'
import thunk                                     from 'redux-thunk'


const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
