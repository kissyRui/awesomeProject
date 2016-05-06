/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Login = require('./views/practice/login');

import React, {
  AppRegistry,
  Component
} from 'react-native';

class App extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
