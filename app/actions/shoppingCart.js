/**
 * Created by kissy小鬼 on 16/6/12上午10:19.
 */
import ActionTypes from '../constants/ActionTypes'
import APIs from '../apis/serverAPI'

const requestProducts = () => {
    return {
        type: ActionTypes.REQUEST_PRODUCTS
    }
}

const receiveProducts = (products) => {
    // 可先开发actions
    // console.log(products)
    return {
        type: ActionTypes.RECEIVE_PRODUCTS,
        products
    }
}

export const getAllProducts = () => {
    return dispatch => {
         dispatch(requestProducts())
        return fetch(APIs.cartList())
            .then(response => response.json())
            .then(json => dispatch(receiveProducts(json)))
    }
}

const addToCartUnsafe = (productId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        productId
    }
}

export const addToCart = (productId) => {
    return (dispatch, getState) => {
        if(getState().products.byId[productId].inventory > 0) {
            dispatch(addToCartUnsafe(productId))
        }

    }
}

