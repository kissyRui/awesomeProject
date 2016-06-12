/**
 * Created by kissy小鬼 on 16/6/12上午10:49.
 */
import { combineReducers } from 'redux'
import ActionTypes from '../constants/ActionTypes'

function products(state, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return Object.assign({}, state, {
                inventory: state.inventory - 1
            })
        default:
            return state
    }
}

const byId = (state = {}, action = {}) => {

    switch (action.type) {
        case ActionTypes.RECEIVE_PRODUCTS:
            return Object.assign({},
                state,
                action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            )
        default:
            const { productId } = action
            if(productId) {
                return Object.assign({}, state, {
                    [productId]: products(state[productId], action)
                })
            }
            return state
    }

}

const visibleIds = (state = [], action = {}) => {

    switch(action.type) {
        case ActionTypes.RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export const getProduct = (state, id) => {
    return state.byId[id]
}

export const getVisibleProducts = (state) => {
    return state.visibleIds.map(id => getProduct(state, id))
}