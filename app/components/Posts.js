/**
 * Created by kissy小鬼 on 16/6/7上午11:35.
 */
import React, {
    Component,
    PropTypes,
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native'

class Posts extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let { posts } = this.props

        return (
            <View style={styles.todo_item}>
            {
                posts.map((post, i) => <Text key={i}>{post.title}</Text>)
            }
            </View>
        )

    }

}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
    todo_item: {
        padding: 5,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#d9d9d9',
        borderTopColor: '#d9d9d9'
    }
})

export default Posts