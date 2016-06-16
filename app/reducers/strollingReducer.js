/**
 * Created by kissy小鬼 on 16/6/16-下午3:04.
 */
import ActionTypes from '../constants/ActionTypes'

const initialState = {
    bannerList: [],
    feedList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false
}

let strollingReducer = (state = initialState, action = {}) => {

    switch(action.type) {

        case ActionTypes.FETCH_BANNER_LIST:
            return {
                ...state
            }
        case ActionTypes.RECEIVE_BANNER_LIST:
            return Object.assign({}, state, {
                bannerList: action.bannerList
            })
        case ActionTypes.FETCH_FEED_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })
        case ActionTypes.RECEIVE_FEED_LIST:
            return Object.assign({}, state, {
                isRefreshing: false,
                isLoading: false,
                feedList: state.isLoadMore ? state.feedList.concat(action.feedList) : action.feedList
            })
        default:
            return state
    }

}

export default strollingReducer