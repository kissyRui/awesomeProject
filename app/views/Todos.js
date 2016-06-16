import React, {
    View,
    Text,
    StyleSheet,
    InteractionManager,
    Component
} from 'react-native'

import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import Searcher from '../components/Searcher'
//import Constants from '../constants/Constants'
import StatusBarExample from  './practice/StatusBar' // StatusBar Demo
import SearchHeader from '../components/SearchHeader'
import ShoppingCart from '../views/ShoppingCart'

class Todos extends Component {

    render() {

        return (
            <View style={styles.main}>
                <SearchHeader
                    searchAction={() => {
                        InteractionManager.runAfterInteractions(() => {
                            this.props.navigator.push({
                                name: 'ShoppingCart',
                                component: ShoppingCart
                            })
                        })
                    }}
                    scanAction={() => alert('scan') }/>
                <AddTodoContainer/>
                <Searcher/>
                <VisibleTodoListContainer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    }
})

export default Todos
