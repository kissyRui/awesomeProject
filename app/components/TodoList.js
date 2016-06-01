import React, {
    PropTypes,
    Component,
    View,
    ListView
} from 'react-native'

import Todo from './Todo'

class TodoList extends Component {

    constructor(props) {
        super(props)
    }

    _renderTodoRow = (todo) => {
        const { onTodoClick } = this.props
        return (
            <Todo
                key={todo.id}
                {...todo}
                onClick={
                    () => onTodoClick(todo.id)
                }/>
        )
    };

    render() {
        const { todos } = this.props
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        let dataSource = ds.cloneWithRows(todos)
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this._renderTodoRow}/>
        )
    }

}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}


export default TodoList
