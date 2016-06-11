import React from 'react-native'
import Login from './views/practice/login'
import { Provider } from 'react-redux'
import Todos from './views/Todos'
import Reddit from './views/Reddit'
import configureStore from './store/configure-store'

const store = configureStore()

//store.dispatch({
//    type: 'ADD_TODO',
//    text: 'Read the docs'
//})
//console.log(store.getState())

const {
    Component,
    Navigator,
    BackAndroid
    } = React

class Root extends Component {

    constructor(props) {
        super(props)
        this._configureScene = this._configureScene.bind(this)
        this._renderScene = this._renderScene.bind(this)
    }

    _configureScene = (route) => {
        return Navigator.SceneConfigs.FadeAndroid
    };

    _renderScene = (router, navigator) => {
        let PageComponent = null
        this._navigator = navigator

        switch (router.id) {
            case 'Todos':
                PageComponent = Todos
                break
            case 'Reddit':
                PageComponent = Reddit
                break
            default:
                PageComponent = Todos
        }

        return <PageComponent navigator={navigator}/>
    };

    componentDidMount() {
        let navigator = this._navigator
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop()
                return true
            }
            return false
        })
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute={{id: 'Reddit'}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}/>
            </Provider>
        )
    }
}

export default Root
