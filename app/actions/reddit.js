/**
 * Created by kissy小鬼 on 16/6/7下午3:34.
 */

import ActionTypes from '../constants/ActionTypes'
import APIs from '../apis/serverAPI'

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
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

const fetchPosts = (reddit) => {
    return dispatch => {
        dispatch(requestPosts(reddit))
        return fetch(APIs.reddit(reddit))
            .then(response => response.json())
            .then(json => dispatch(receivePosts(reddit, json)))
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