import React from 'react-native';
import Login from './views/practice/login';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App'

let store = createStore(todoApp);

const {
  Component
} = React;

class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
  }
}

export default Root;
