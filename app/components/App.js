import React, {
    View,
    Text,
    StyleSheet,
    Component
} from 'react-native'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Searcher from './Searcher'

class App extends Component {
    render() {
        return (
            <View style={styles.main}>
                <AddTodo/>
                <Searcher/>
                <VisibleTodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    }
})

export default App
