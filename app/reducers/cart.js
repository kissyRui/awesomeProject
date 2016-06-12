/**
 * Created by kissy小鬼 on 16/6/12下午11:54.
 */
import { combineReducers } from 'redux'
import ActionTypes from '../constants/ActionTypes'

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = [], action = {}) => {

    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            if (state.indexOf(action.productId) != -1) {
                return state
            }
            return [...state, action.productId]
        default:
            return state
    }

}

const quantityById = (state = {}, action = {}) => {

    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            const { productId } = action
            return Object.assign({}, state, {
                [productId]: (state[productId] || 0) + 1
            })
        default:
            return state
    }

}

export default cart = (state = initialState, action = {}) => {

    return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
    }

}

export const getQuantity = (state, productId) => {
    return state.quantityById[productId] || 0
}

export const getAddedIds = (state) => {
    return state.addedIds
}