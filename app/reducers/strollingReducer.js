/**
 * Created by kissy小鬼 on 16/6/16-下午3:04.
 */
import ActionTypes from '../constants/ActionTypes'

const initialState = {
    bannerList: []
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
        default:
            return state
    }

}

export default strollingReducer