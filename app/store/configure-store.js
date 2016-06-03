import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(todoApp, initialState)
    return store
}
