/**
 * Created by kissy小鬼 on 16/6/7下午3:34.
 */

import ActionTypes from '../constants/ActionTypes'
import APIs from '../apis/serverAPI'
import Util from '../utils/utils'

// 选择Reddit
export const selectReddit = (reddit) => {
    return {
        type: ActionTypes.SELECT_REDDIT,
        reddit
    }
}

const requestPosts = (reddit) => {
    return {
        type: ActionTypes.REQUEST_POSTS,
        reddit
    }
}

const receivePosts = (reddit, json) => {
    return {
        type: ActionTypes.RECEIVE_POSTS,
        reddit,
        posts: json.data.map(child => child.data),
        receivedAt: Date.now()
    }
}

const fetchPosts = (reddit) => {
    return dispatch => {
        dispatch(requestPosts(reddit))
        Util.get(APIs.reddit(reddit), (json) => {
            dispatch(receivePosts(reddit, json))
        }, (error) => {
            // dispatch(receivePosts(reddit, {}))
        })

    }
}

const shouldFetchPosts = (state, reddit) => {

    const posts = state.postsByReddit[reddit]

    if(!posts) {
        return true
    }

    if(posts.isFetching) {
        return false
    }

}

export const fetchPostsIfNeeded = (reddit) => {
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), reddit)) {
            return dispatch(fetchPosts(reddit))
        }
    }
}