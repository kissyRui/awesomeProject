import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore)
// const store = createStoreWithMiddleware(rootReducer, initialState)

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger())
    )

    return store
}
