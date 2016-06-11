import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ActionTypes from '../constants/ActionTypes'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case ActionTypes.SHOW_ALL:
      return todos
    case ActionTypes.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case ActionTypes.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoListContainer
