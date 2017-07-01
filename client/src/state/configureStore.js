import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga/lib'
import rootSaga from '../sagas'
import rootReducer from '../state'

export default function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  sagaMiddleware.run(rootSaga)

  return store
}
