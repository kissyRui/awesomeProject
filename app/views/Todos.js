import React, {
    View,
    Text,
    StyleSheet,
    Component
} from 'react-native'

import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import Searcher from '../components/Searcher'

class Todos extends Component {
    render() {
        return (
            <View style={styles.main}>
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
