import ActionTypes from '../constants/ActionTypes'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  }
}





