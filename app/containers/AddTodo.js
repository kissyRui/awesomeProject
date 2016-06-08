import React, {
    Component
} from 'react-native'

import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'


const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
