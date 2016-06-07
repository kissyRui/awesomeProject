/**
 * Created by kissy小鬼 on 16/6/7上午11:00.
 */
import ActionTypes from '../constants/ActionTypes'

export const selectedReddit = (state = 'reactjs', action = {}) => {
    switch (action.type) {
        case ActionTypes.SELECT_REDDIT:
            return action.reddit
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    items: []
}, action = {}) => {
    switch(action.type) {
        case ActionTypes.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case ActionTypes.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export const postsByReddit = (state = {}, action = {}) => {

    switch(action.type) {

        case ActionTypes.REQUEST_POSTS:
        case ActionTypes.RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.reddit]: posts(state[action.reddit], action)
            })
        default:
            return state
    }

    return state
}
