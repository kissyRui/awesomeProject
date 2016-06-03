import React from 'react-native'
import Login from './views/practice/login'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configure-store'

const store = configureStore()

const {
  Component
} = React

class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
  }
}

export default Root
