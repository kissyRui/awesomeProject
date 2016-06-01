import React, {
    Component,
    View,
    Text,
    PixelRatio,
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
                    <Text style={styles.link_text}>所有</Text>
                </FilterLink>
                <FilterLink style={styles.links_item} filter="SHOW_ACTIVE">
                    <Text style={styles.link_text}>未完成</Text>
                </FilterLink>
                <FilterLink style={styles.links_item} filter="SHOW_COMPLETED">
                    <Text style={styles.link_text}>完成</Text>
                </FilterLink>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    links_wrapper: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9'
    },
    links_item: {
        flex: 1
    },
    link_text: {
        color: '#666'
    }
})

export default Searcher
