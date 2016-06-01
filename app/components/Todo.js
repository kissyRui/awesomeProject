// 单个todo项

import React, {
    Component,
    PropTypes,
    StyleSheet,
    View,
    Text,
    Dimensions,
    PixelRatio,
    TouchableOpacity
} from 'react-native'

class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { text, completed, onClick } = this.props

        return (
            <TouchableOpacity style={styles.todo_item} onPress={onClick}>
                <Text style={{ color: completed ? '#CCC' : '#000' }}>{text}</Text>
            </TouchableOpacity>
        )

    }

}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    todo_item: {
        height: 40,
        paddingLeft: 15,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#d9d9d9'
    }
})

export default Todo
