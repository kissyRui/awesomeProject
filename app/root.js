import React from 'react-native'
import Login from './views/practice/login'
import { Provider } from 'react-redux'
import Todos from './views/Todos'
import Reddit from './views/Reddit'
import ShoppingCart from './views/ShoppingCart'
import configureStore from './store/configure-store'

import { getAllProducts } from './actions/shoppingCart'
import CustomStatusBarIOS from './components/CustomStatusBarIOS'
import TabBarView from './common/TabBarView'

const store = configureStore()

//store.dispatch({
//    type: 'ADD_TODO',
//    text: 'Read the docs'
//})
//console.log(store.getState())

store.dispatch(getAllProducts())

const {
    Component,
    Navigator,
    View,
    BackAndroid,
    StyleSheet
    } = React

class Root extends Component {

    constructor(props) {
        super(props)
        this._configureScene = this._configureScene.bind(this)
        this._renderScene = this._renderScene.bind(this)
    }

    _configureScene = (route) => {
        //return Navigator.SceneConfigs.FadeAndroid
        return  Navigator.SceneConfigs.PushFromRight
    };

    _renderScene = (router, navigator) => {
        let PageComponent = null
        this._navigator = navigator

        switch (router.name) {
            case 'Todos':
                PageComponent = Todos
                break
            case 'Reddit':
                PageComponent = Reddit
                break
            case 'ShoppingCart':
                PageComponent = ShoppingCart
                break
            default:
                PageComponent = Todos
        }

        return <PageComponent route = {router} navigator={navigator}/>
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
                <View style={styles.container}>
                    <CustomStatusBarIOS barStyle="light-content"/>
                    <Navigator
                        initialRoute={{name: 'TabBarView', component: TabBarView }}
                        configureScene={ this._configureScene }
                        renderScene={(route, navigator) => {
                            let Component = route.component
                            return (
                                <Component navigator={navigator} route = {route} {...route.passProps} />
                            )
                        }} />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Root
