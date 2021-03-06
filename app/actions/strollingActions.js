/**
 * Created by kissy小鬼 on 16/6/16-下午2:43.
 * 食物派《逛吃》频道
 */
import ActionTypes from '../constants/ActionTypes'
import Util from '../utils/utils'
import APIs from '../apis/serverAPI'
// banners
let fetchBannerList = () => {
    return {
        type: ActionTypes.FETCH_BANNER_LIST
    }
}

let receiveBannerList = (bannerList) => {
    return {
        type: ActionTypes.RECEIVE_BANNER_LIST,
        bannerList
    }
}

export let fetchBanners = () => {
    return dispatch => {

        dispatch(fetchBannerList())

        Util.get(APIs.banners(), (json) => {
            dispatch(receiveBannerList(json.banners))
        }, (error) => {
            console.log('Fetch banner list error: ' + error)
            dispatch(receiveBannerList([]))
        })
    }
}

let fetchFeedList = (isLoadMore, isRefreshing, isLoading) => {
    return {
        type: ActionTypes.FETCH_FEED_LIST,
        isLoadMore,
        isRefreshing,
        isLoading
    }
}

let receiveFeedList = (feeds) => {
    return {
        type: ActionTypes.RECEIVE_FEED_LIST,
        feedList: feeds
    }
}

export let fetchFeeds = (page, isLoadMore, isRefreshing, isLoading) => {

    return dispatch => {

        dispatch(fetchFeedList(isLoadMore, isRefreshing, isLoading))

        Util.get(APIs.feeds(page), (json) => {
            dispatch(receiveFeedList(json.feeds))
        }, (error) => {
            dispatch(receiveFeedList([]))
        })
    }

}