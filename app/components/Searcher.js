import React, {
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native'

import FilterLink from '../containers/FilterLink'

class Searcher extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.links_wrapper}>
                <FilterLink style={styles.links_item} filter="SHOW_ALL">
                    <Text>所有</Text>
                </FilterLink>
                <FilterLink style={styles.links_item} filter="SHOW_ACTIVE">
                    <Text>未完成</Text>
                </FilterLink>
                <FilterLink style={styles.links_item} filter="SHOW_COMPLETED">
                    <Text>完成</Text>
                </FilterLink>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    links_wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    links_item: {
        flex: 1
    }
})

export default Searcher
